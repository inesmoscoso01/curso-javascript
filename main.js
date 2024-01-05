alert("Ingresa tu usuario y obtené descuentos!");

// Función para saludar al usuario
function saludar() {
    let usuario = prompt("Ingrese su usuario");
    if (usuario) {
        let mensaje = "Hola " + usuario;
        console.log(mensaje);
        alert(mensaje);
    } else {
        console.log("Error: Debes ingresar un nombre");
        alert("Error: Debes ingresar un nombre");
    }
}

// Llamada a la función de saludo
saludar();

// Función para verificar la edad del usuario
function verificarEdad() {
    let edad;
    do {
        edad = prompt("Ingrese su edad");
        if (edad >= 18) {
            alert("Podes comprar alcohol");
        } else if (edad < 18) {
            alert("No podes comprar alcohol");
        } else {
            alert("Por favor, ingrese un número válido para la edad");
            break;
        }
    } while (false);
}

// Llamada a la función para verificar la edad
verificarEdad();

// Función para mostrar descuentos según el día de la semana
function mostrarDescuentos() {
    let diaDeLaSemana = prompt("Ingrese qué día de la semana quiere venir y descubra sus descuentos!");
    switch (diaDeLaSemana.toLowerCase()) {
        case "lunes":
            alert("Pizzas a mitad de precio");
            break;
        case "martes":
            alert("15% off abonando en efectivo");
            break;
        case "miércoles":
            alert("Entrada de invitación");
            break;
        case "jueves":
            alert("Postres a mitad de precio");
            break;
        case "viernes":
            alert("2x1 en cerveza");
            break;
        case "sábado":
            alert("Happy hour de 19hs a 22hs");
            break;
        case "domingo":
            alert("Estamos Cerrados");
            break;
        default:
            alert("Ese día no existe");
            break;
    }
}

// Llamada a la función para mostrar descuentos
mostrarDescuentos();

// Menú económico
const menuEconomico = {
    entrada: "berenjenas con pan",
    platoPrincipal: "milanesa con ensalada/puré/papas fritas",
    postre: "helado o ensalada de frutas"
};
console.log(menuEconomico);

// Función para buscar un plato en el menú
function buscarPlato(termino) {
    const resultados = platoPrincipal.filter(plato => plato.toLowerCase().includes(termino.toLowerCase()));
    return resultados;
}

// Mostrar todos los platos del menú
console.log("Todos los platos:");
for (let i = 0; i < platoPrincipal.length; i++) {
    console.log(platoPrincipal[i]);
}

// Agregar un nuevo plato al menú
const nuevoPlato = prompt("Ingrese un nuevo plato para agregar al menú:");
platoPrincipal.push(nuevoPlato);
console.log(`"${nuevoPlato}" ha sido agregado al menú.`);

// Realizar una búsqueda de plato en el menú
const terminoBusqueda = prompt("Ingrese el término de búsqueda para encontrar un plato:");
const resultadosBusqueda = buscarPlato(terminoBusqueda);

// Mostrar resultados de la búsqueda
console.log(`Resultados de la búsqueda para "${terminoBusqueda}":`);
if (resultadosBusqueda.length > 0) {
    resultadosBusqueda.forEach(plato => console.log(plato));
} else {
    console.log("No se encontraron resultados.");
}

// Definir la clase Entradas para representar platos de entrada
function Entradas(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// Crear instancias de platos de entrada
const entradas1 = new Entradas("Provoleta", 5000);
const entradas2 = new Entradas("Bunuelos de espinaca", 4000);
const entradas3 = new Entradas("Tortilla de papa", 5000);
console.log(entradas1);
console.log(entradas2);
console.log(entradas3);

// Menú principal con platos principales
const platoPrincipal = [
    "Tarta de Atún / Pollo y Queso/ Jamón y queso",
    "Ensalada Caesar",
    "Milanesa sola / Napolitana",
    "Sandwich Jamón Cocido y Queso",
    "Sandwich Jamón Crudo, Rúcula, Tomates Secos y Manteca"
];

// Mostrar todos los platos del menú principal
console.log("Todos los platos:");
for (let i = 0; i < platoPrincipal.length; i++) {
    console.log(platoPrincipal[i]);
}

// Agregar un nuevo plato al menú principal
const nuevoPlatoMenuPrincipal = prompt("Ingrese un nuevo plato para agregar al menú principal:");
platoPrincipal.push(nuevoPlatoMenuPrincipal);
console.log(`"${nuevoPlatoMenuPrincipal}" ha sido agregado al menú principal.`);

// Realizar una nueva búsqueda de plato en el menú principal
const terminoBusquedaMenuPrincipal = prompt("Ingrese el término de búsqueda para encontrar un plato en el menú principal:");
const resultadosBusquedaMenuPrincipal = buscarPlato(terminoBusquedaMenuPrincipal);

// Mostrar resultados de la búsqueda en el menú principal
console.log(`Resultados de la búsqueda para "${terminoBusquedaMenuPrincipal}" en el menú principal:`);
if (resultadosBusquedaMenuPrincipal.length > 0) {
    resultadosBusquedaMenuPrincipal.forEach(plato => console.log(plato));
}
