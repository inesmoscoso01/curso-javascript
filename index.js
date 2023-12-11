function calcularTotal() {
    const comidas = document.querySelectorAll(".comida");
    let total = 0;

    for (let i = 0; i < comidas.length; i++) {
        if (comidas[i].checked) {
            total += parseFloat(comidas[i].getAttribute("data-precio"));
        }
    }

    // Descuento del 10% solo si se seleccionan las tres comidas
    if (comidas[0].checked && comidas[1].checked && comidas[2].checked) {
        total *= 0.9;
    }

    // Descuento adicional del 10% si se paga en efectivo
    const pagoEfectivo = document.querySelector('input[name="pago"][value="si"]');
    if (pagoEfectivo && pagoEfectivo.checked) {
        total *= 0.9;
    }

    // Agregar console.log para imprimir el total antes de mostrarlo en la página
    console.log("Total calculado:", total);

    // Mostrar el total en la página
    const totalAmountElement = document.getElementById("total-amount");
    totalAmountElement.textContent = total.toFixed(2);

    // Pregunta "¿Desea reservar?" utilizando confirm
    const deseaReservar = confirm("El total calculado es: " + total.toFixed(2) + "\n¿Desea reservar?");

    // Imprimir la respuesta de "¿Desea reservar?" en la consola
    console.log("¿Desea reservar?", deseaReservar);
}
