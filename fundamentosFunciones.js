// Almacenes Japon - VideoJuegos

// Strings

let juegoNintendoSwitch = "The Legend of Zelda: Breath of the Wild";
console.log(juegoNintendoSwitch.length);
console.log(juegoNintendoSwitch.trim());
console.log(juegoNintendoSwitch.includes("Mario"));
console.log(juegoNintendoSwitch.toLocaleLowerCase());
console.log(juegoNintendoSwitch.toLocaleUpperCase());

// Casting

let precioPS5 = "499.99";
let precioXboxSeriesX = 549.99;

console.log(+precioPS5 + precioXboxSeriesX);

//Operador ternario

let memoriaPS5 = 825;
let memoriaXboxSeriesX = 1000;

memoriaPS5 <= memoriaXboxSeriesX ? console.log("Gana Xbox Series X en almacenamiento") : console.log("Gana PS5 en almacenamiento");

// Funcion declarada

function getConsolaNintendo() {
  console.log("photo/consola/NintendoSwitch.png");
}

getConsolaNintendo();

// Funcion Expresada

const activarModoMultijugador = function () {
  console.log("El modo multijugador está activado");
};
activarModoMultijugador();

// Arguentos de la Funcion

const aplicarDescuentoJuego = function (precio, descuento) {
  precio -= precio * (descuento / 100); // Corregir cálculo del descuento
  console.log(
    `El descuento es de ${descuento}% y el total a pagar es ${precio}`
  ); // Usar backticks para interpolar
};

aplicarDescuentoJuego(60, 15);

// Objetos
const datosConsolaPS5 = {
  name: "PlayStation 5",
  modelo: "PS5",
  marca: "Sony",
  garantia: 24,
  status: true,
};

