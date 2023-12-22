alert("Ingresa tu usuario y obtené descuentos!");
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
saludar();

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


let diaDeLaSemana = prompt("Ingrese que dia de la semana quiere venir y descubra sus descuentos!");
switch (diaDeLaSemana) {
    case "lunes":
        alert("Pizzas a mitad de precio");
        break;
    case "martes":
        alert("15% off abonando en efectivo");
        break;
    case "miercoles":
        alert("Entrada de invitación");
        break;
    case "jueves":
        alert("Postres a mitad de precio");
        break;
    case "viernes":
        alert("2x1 en cerveza");
        break;
    case "sabado":
        alert("Happy hour de 19hs a 22hs");
        break;
    case "domingo":
        alert("Estamos Cerrados");
        break;
    default:
        alert("Ese día no existe");
        break;
}

const menuEconomico = {
    entrada: "berenjenas con pan",
    platoPrincipal: "milanesa con ensalada/pure/papasfritas",
    postre: "helado o ensalada de frutas"
}
console.log(menuEconomico)

function Entradas(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const entradas1 = new Entradas("Provoleta", 5000);
const entradas2 = new Entradas("Bunuelos de espinaca", 4000);
const entradas3 = new Entradas("Tortilla de papa", 5000);
console.log(entradas1);
console.log(entradas2);
console.log(entradas3);

const platoPrincipal = ["Tarta de Atún / Pollo y Queso/ Jamón y queso", "Ensalada Caesar", "Milanesa sola / Napolitana", "Sandwich Jamón Cocido y Queso", "Sandwich Jamón Crudo, Rúcula, Tomates Secos y Manteca"];
console.log(platoPrincipal);

function buscarPlato(termino) {
    const resultados = platoPrincipal.filter(plato => plato.toLowerCase().includes(termino.toLowerCase()));
    return resultados;
}

console.log("Todos los platos:");
for (let i = 0; i < platoPrincipal.length; i++) {
    console.log(platoPrincipal[i]);
}

const nuevoPlato = "Bife de chorizo con ensalada";
platoPrincipal.push(nuevoPlato);
console.log(`"${nuevoPlato}" ha sido agregado al menú.`);

const terminoBusqueda = "Ensalada";
const resultadosBusqueda = buscarPlato(terminoBusqueda);

console.log(`Resultados de la búsqueda para "${terminoBusqueda}":`);
if (resultadosBusqueda.length > 0) {
    resultadosBusqueda.forEach(plato => console.log(plato));
} else {
    console.log("No se encontraron resultados.");
}
