document.addEventListener('DOMContentLoaded', () => {
    const platoPrincipal = [];
    console.log("Platos principales cargados:", platoPrincipal);

    const buscarPlatoBtn = document.getElementById('buscarPlatoBtn');
    const terminoBusquedaInput = document.getElementById('terminoBusqueda');
    const resultadosDiv = document.getElementById('resultadosBusqueda');
    const agregarPedidoBtn = document.getElementById('agregarPedido');
    const pedidosUl = document.getElementById('pedidos');

    function mostrarInformacion(mensaje) {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = mensaje;
    }

    function buscarPlato(termino) {
        return platoPrincipal.filter(plato => plato.toLowerCase().includes(termino.toLowerCase()));
    }

    function limpiarResultadosAnteriores() {
        if (resultadosDiv) {
            resultadosDiv.innerHTML = "";
        }
    }

    function mostrarResultadosEnInterfaz(resultados) {
        limpiarResultadosAnteriores();

        if (resultadosDiv) {
            if (resultados.length > 0) {
                resultados.forEach(plato => {
                    const platoElement = document.createElement('p');
                    platoElement.textContent = plato;
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

    if (buscarPlatoBtn && terminoBusquedaInput) {
        buscarPlatoBtn.addEventListener('click', () => {
            const terminoBusqueda = terminoBusquedaInput.value;
            console.log("Se hizo clic en buscarPlatoBtn. Término de búsqueda:", terminoBusqueda);

            const resultadosBusqueda = buscarPlato(terminoBusqueda);
            console.log("Resultados de la búsqueda:", resultadosBusqueda);

            mostrarResultadosEnInterfaz(resultadosBusqueda);
        });
    } else {
        console.error("Elementos 'buscarPlatoBtn' o 'terminoBusqueda' no encontrados.");
    }

    if (agregarPedidoBtn) {
        agregarPedidoBtn.addEventListener('click', () => {
            console.log("Se hizo clic en agregarPedidoBtn.");
            if (platoSeleccionado) {
                // Agrega el plato al pedido
                const nuevoPedido = document.createElement('li');
                nuevoPedido.textContent = platoSeleccionado;
                pedidosUl.appendChild(nuevoPedido);

                // Almacena los pedidos en localStorage
                const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
                pedidosGuardados.push(platoSeleccionado);
                localStorage.setItem('pedidos', JSON.stringify(pedidosGuardados));
                console.log("Plato agregado al pedido:", platoSeleccionado);
            } else {
                console.error("No se pudo obtener el plato seleccionado.");
            }
        });
    } else {
        console.error("Elemento 'agregarPedidoBtn' no encontrado.");
    }

    console.log("Configuración de eventos completada.");

    function agregarPedidoAlLocalStorage(plato) {
        let pedidos = obtenerPedidosDesdeLocalStorage();

        if (!pedidos) {
            pedidos = [];
        }

        pedidos.push(plato);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }

    function obtenerPedidosDesdeLocalStorage() {
        const pedidosAlmacenados = localStorage.getItem('pedidos');
        return pedidosAlmacenados ? JSON.parse(pedidosAlmacenados) : null;
    }

    function mostrarPedidosEnInterfaz() {
        const pedidos = obtenerPedidosDesdeLocalStorage();

        if (pedidos) {
            pedidosUl.innerHTML = ""; // Limpiar pedidos anteriores

            pedidos.forEach(plato => {
                const pedidoElement = document.createElement('li');
                pedidoElement.textContent = plato;
                pedidosUl.appendChild(pedidoElement);
            });
        }
    }
});
