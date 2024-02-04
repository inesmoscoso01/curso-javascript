function mostrarError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje,
    });
}

async function cargarDatos() {
    try {
        const response = await fetch('productos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar datos estáticos:', error.message);
        mostrarError('Error al cargar los productos. Por favor, inténtelo de nuevo más tarde.');
        throw error;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const productos = await cargarDatos();
        const categorias = ["Sandwiches", "Ensaladas", "Pizzas", "Platos Principales", "Postres"];
        categorias.forEach(categoria => {
            const listaCategoria = document.getElementById(`lista${categoria.replace(/\s/g, '')}`);
            if (listaCategoria) {
                const productosCategoria = productos.filter(producto => producto.categoria === categoria);
                if (productosCategoria.length > 0) {
                    productosCategoria.forEach(producto => {
                        const li = document.createElement('li');

                        const nombreProducto = document.createTextNode(`${producto.nombre} - `);
                        li.appendChild(nombreProducto);

                        const cantidadInput = document.createElement('input');
                        cantidadInput.type = 'number';
                        cantidadInput.id = `cantidad-${producto.nombre.replace(/\s+/g, '-')}`;
                        cantidadInput.value = 1; 
                        cantidadInput.min = 1;
                        li.appendChild(cantidadInput);

                        const botonAgregar = document.createElement('button');
                        botonAgregar.textContent = "Añadir a la Orden";
                        botonAgregar.addEventListener('click', () => {
                            const cantidad = parseInt(cantidadInput.value, 10);
                            agregarPedido({ ...producto, cantidad });

                            Swal.fire({
                                icon: 'success',
                                title: 'Añadido al carrito',
                                text: `${cantidad} ${producto.nombre}(s) añadido(s) al carrito.`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        });
                        li.appendChild(botonAgregar);
                        listaCategoria.appendChild(li);
                    });
                } else {
                    console.error(`No hay productos para la categoría ${categoria}.`);
                }
            } else {
                console.error(`Elemento 'lista${categoria.replace(/\s/g, '')}' no encontrado.`);
            }
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error.message);
    }

    function agregarPedido(producto) {
        if (producto.cantidad < 1) {
            mostrarError('La cantidad debe ser al menos 1.');
            return;
        }
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        const index = pedidosGuardados.findIndex(item => item.nombre === producto.nombre);
        if (index !== -1) {
            pedidosGuardados[index].cantidad += producto.cantidad;
        } else {
            pedidosGuardados.push(producto);
        }
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
        mostrarPedidosEnInterfaz();
    }

    function mostrarPedidosEnInterfaz() {
        const pedidosUl = document.getElementById('pedidos'); 
        const pedidos = obtenerPedidosDesdeLocalStorage();
        pedidosUl.innerHTML = ""; 
        if (pedidos) {
            let totalPedido = 0;
            pedidos.forEach(({ nombre, precio, cantidad }) => {
                const pedidoElement = document.createElement('li');
                pedidoElement.textContent = `${nombre} - $${precio} x ${cantidad}`;

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener('click', function() {
                    eliminarPedido(nombre);
                    mostrarPedidosEnInterfaz(); 
                });
                pedidoElement.appendChild(botonEliminar);
                pedidosUl.appendChild(pedidoElement);
                totalPedido += precio * cantidad;
            });

            const totalElement = document.createElement('li');
            totalElement.textContent = `Total: $${totalPedido}`;
            pedidosUl.appendChild(totalElement);
        } else {
            pedidosUl.textContent = "No hay pedidos en el carrito.";
        }
    }

    function obtenerPedidosDesdeLocalStorage() {
        return JSON.parse(localStorage.getItem('pedidos')) || [];
    }

    function eliminarPedido(nombre) {
        let pedidos = obtenerPedidosDesdeLocalStorage();
        pedidos = pedidos.filter(pedido => pedido.nombre !== nombre);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        mostrarPedidosEnInterfaz();
    }
    
});