document.addEventListener('DOMContentLoaded', () => {
    const productos = [      
    // Sandwiches
    { nombre: "Jamón Cocido y Queso", precio: 2000, categoria: "Sandwiches" },
    { nombre: "Jamón Cocido, Queso, Tomate y Lechuga", precio: 2200, categoria: "Sandwiches" }, 
    // Ensaladas
    { nombre: "Ensalada Caprese Chica", precio: 3100, categoria: "Ensaladas" },
    { nombre: "Ensalada Caprese Grande", precio: 3500, categoria: "Ensaladas" },    
    // Pizzas
    { nombre: "Pizza Muzzarella", precio: 5000, categoria: "Pizzas" },
    { nombre: "Pizza napolitana", precio: 5500, categoria: "Pizzas" },  
    // Platos Principales
    { nombre: "Lomo grille", precio: 6600, categoria: "Platos Principales" },
    { nombre: "Pechuga grille", precio: 4500, categoria: "Platos Principales" },      
    // Postres
    { nombre: "Ensalada de Frutas", precio: 2500, categoria: "Postres" },
    { nombre: "Helado (2 Bochas)", precio: 1950, categoria: "Postres" },
    ];

    const categorias = ["Sandwiches", "Ensaladas", "Pizzas", "Platos Principales", "Postres"];
    categorias.forEach(categoria => {
        const listaCategoria = document.getElementById(`lista${categoria.replace(/ /g, '')}`);   
        if (listaCategoria) {
            const productosCategoria = productos.filter(producto => producto.categoria === categoria);
            if (productosCategoria.length > 0) {
                productosCategoria.forEach(producto => {
                    // Renderizar productos en la lista correspondiente
                    const li = document.createElement('li');
                    li.textContent = `${producto.nombre} - $${producto.precio}`;      
                    const botonAgregar = document.createElement('button');
                    botonAgregar.textContent = "Añadir a la Orden";
                    botonAgregar.addEventListener('click', () => agregarPedido(producto));       
                    li.appendChild(botonAgregar);
                    listaCategoria.appendChild(li);
                });
            } else {
                console.error(`No hay productos para la categoría ${categoria}.`);
            }
        } else {
            console.error(`Elemento 'lista${categoria.replace(/ /g, '')}' no encontrado.`);
        }
    });
    // Elementos del DOM
    const pedidosUl = document.getElementById('pedidos');
    const buscarPlatoBtn = document.getElementById('buscarPlatoBtn');
    const terminoBusquedaInput = document.getElementById('terminoBusqueda');
    const resultadosDiv = document.getElementById('resultadosBusqueda');
  
    // Función para añadir pedido al Local Storage y mostrar en la interfaz
    function agregarPedido(producto) {
        const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidosGuardados.push(producto);
        localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
        mostrarPedidosEnInterfaz();
    }
  
// Función para mostrar pedidos en la interfaz
function mostrarPedidosEnInterfaz() {
    const pedidos = obtenerPedidosDesdeLocalStorage();
    if (pedidos) {
        pedidosUl.innerHTML = ""; // Limpiar pedidos anteriores

        pedidos.forEach(({ nombre, precio }) => {
            const pedidoElement = document.createElement('li');
            pedidoElement.textContent = `${nombre} - $${precio}`;
            pedidosUl.appendChild(pedidoElement);
        });
    }
}

  
    // Función para buscar un plato
    function buscarPlato(termino) {
        return productos.filter(producto => producto.nombre.toLowerCase().includes(termino.toLowerCase()));
    }
  
    // Evento de clic en el botón de buscar plato
    if (buscarPlatoBtn && terminoBusquedaInput) {
        buscarPlatoBtn.addEventListener('click', () => {
            const terminoBusqueda = terminoBusquedaInput.value;
            mostrarResultadosEnInterfaz(buscarPlato(terminoBusqueda));
        });
    } else {
        console.error("Elementos 'buscarPlatoBtn' o 'terminoBusqueda' no encontrados.");
        }
    });
  
    // Función para limpiar resultados de búsqueda anteriores
    function limpiarResultadosAnteriores() {
        if (resultadosDiv) {
            resultadosDiv.innerHTML = "";
        } else {
            console.error("Elemento 'resultadosBusqueda' no encontrado.");
        }
    }

    // Función para mostrar resultados de búsqueda en la interfaz
    function mostrarResultadosEnInterfaz(resultados) {
        limpiarResultadosAnteriores();
        if (resultadosDiv) {
            if (resultados.length > 0) {
                resultados.forEach(producto => {
                    const platoElement = document.createElement('p');
                    platoElement.textContent = `${producto.nombre} - $${producto.precio}`;
                    resultadosDiv.appendChild(platoElement);
                });
            } else {
                const mensajeElement = document.createElement('p');
                mensajeElement.textContent = "No se encontraron resultados.";
                resultadosDiv.appendChild(mensajeElement);
            }
        } else {
            console.error("Elemento 'resultadosBusqueda' no encontrado.");
        }
    }
  
    // Función para obtener pedidos desde Local Storage
    function obtenerPedidosDesdeLocalStorage() {
        const pedidosAlmacenados = localStorage.getItem('pedidos');
        return pedidosAlmacenados ? JSON.parse(pedidosAlmacenados) : null;
    }