// Realizar operaciones matemáticas básicas.
// Implementar estructuras condicionales y de bucles.
// Usar funciones para modularizar el código.
// Trabajar con arreglos y objetos.

// Debe ejecutarse en la consola del navegador.
// Debe permitir al usuario ingresar datos mediante prompt o variables predefinidas.
// Debe realizar al menos tres operaciones diferentes usando funciones.
// Debe utilizar condicionales y estructuras de repetición.
// Debe incluir arreglos y objetos para almacenar y manipular datos.

// Funciones y modularización: Separación del código en funciones reutilizables.
// Uso de estructuras de control: Implementación de if, switch, for, while, según corresponda. tienen que estar todos
// Uso de arreglos y objetos: Manipulación de datos utilizando estos conceptos.
// Validaciones: Control de entradas del usuario para evitar errores.(validacion de datos)

// Introducción al lenguaje JavaScript (Lección #1)
//------------------------------------------------------------
//mensajes mostrados en consola.
console.log("este es un mensaje que se mostrará en consola:");
console.log("Aquí comienza el trabajo:");
//------------------------------------------------------------
//forma de pedir un valor al usuario.
prompt("ingrese su nombre:");
//------------------------------------------------------------
//Alert para mostrar mensajes a los usuarios.
alert("este mensaje se mostrará como advertencia de que empezó el proyecto");
alert("Aquí Vamos");
//------------------------------------------------------------
// Variables, expresiones y sentencias condicionales (Lección #2)
//------------------------------------------------------------
//forma de guardar variables en const y let.
const primerNombre = "Raúl";
let numeroOriginal = 0;
//------------------------------------------------------------
//estas constantes guardan numero1 y numero2 ingresados por el usuario.
const numero1 = prompt("ingrese el primer número:");
const numero2 = prompt("ingrese el segundo número:");
//------------------------------------------------------------
// estas son constantes que almacenan las operaciones de suma,resta,division y multiplicacion
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
//------------------------------------------------------------
//la siguiente condicional verifica si numero! es mayor a 0 o null, y además dice si es negativo o null.
if (numero1 >= 0 && numero1 == !null) {
	console.log("numero1 es mayor a 0");
} else {
	console.log("el numero1 es negativo o null");
}
//la siguiente condicional con switch verifica un color ingresado por el usuario y entrega un msj en consola.
let color = prompt("Ingrese un color");

if (color === null) {
	console.log("Se canceló la operación.");
} else {
	color = color.trim().toLowerCase();

	switch (color) {
		case "naranja":
			console.log("El color es naranja");
			break;
		case "amarillo":
			console.log("El color es amarillo");
			break;
		case "rojo":
			console.log("El color es rojo");
			break;
		default:
			console.log("El color no se encuentra en las opciones");
			break;
	}
}
//------------------------------------------------------------

// Arreglos y ciclos (Lección #3)

const marcasAuto = ["Mazda", "Chevrolet", "Kia", "Nissan", "Ford"];

//------------------------------------------------------------
//los siguientes bucles for recorre el arreglo marca auto diciendo cuantos datos hay, y el while hace un contador hasta 10 y dice en que contador va.
for (let index = 0; index < marcasAuto.length; index++) {}
console.log(marcasAuto);

let indice = 0;
while (indice < 10) {
	console.log("vamos en el siguiente indice:", indice);
	indice++;
}

//------------------------------------------------------------
// funcion para filtrar numeros pares, se verifica que el valor ingresado sea un numero y no un string, y si es string pide un numero nuevamente.
function filtrarNumerosPares(numero) {
	if (typeof numero === "number" && !isNaN(numero)) {
		if (numero % 2 === 0) {
			console.log("El número es par");
		} else {
			console.log("El número es impar");
		}
	} else {
		filtrarNumerosPares(Number(prompt("Ingrese un número")));
	}
}

filtrarNumerosPares("2");

//------------------------------------------------------------
// Funciones en JavaScript (Lección #4)
// estas son funciones que retornan las ecuaciones Suma,Resta,Division,Multiplicar.
function sumar(numero1, numero2) {
	return numero1 + numero2;
}
function restar(numero1, numero2) {
	return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
	return numero1 * numero2;
}
function dividir(numero1, numero2) {
	return numero1 / numero2;
}

//------------------------------------------------------------
// la siguiente función es para saludar a una persona, ingresando el nombre como parametro.
function saludarPersonas(nombre) {
	console.log(`Hola ${nombre}, bienvenido a la prueba del modulo3`);
}
saludarPersonas("Franco");
//------------------------------------------------------------
//la siguiente funcion calcular, se divide en 2 funciones una que dice calcular, que llama a otra para calcular una suma con los parametros ingresados.
function calcular() {
	function sumar(a, b) {
		return a + b;
	}

	const resultado = sumar(8, 12);
	console.log("la suma es:", resultado);
}

calcular();

//------------------------------------------------------------

//Conceptos básicos de objetos en JavaScript (Lección #5)
// el siguiente objeto Auto contiene sus propias propiedades.
const Auto = {
	Marca: "Nissan",
	Anio: "2021",
	color: "Gris",
	modelo: "Versa",
};
//------------------------------------------------------------
// el siguiente objeto heroe, contiene metodo de ataque y defensa.
const heroe = {
	nombre: "Clark Kent",
	alias: "Superman",
	poder: "superfuerza",
	ataque: () => {
		console.log("Ataque de cuerpo");
	},
	defensa: () => {
		console.log("Defenderse cuerpo a cuerpo");
	},
};
//------------------------------------------------------------
// Personas es un arreglo de objetos, que contiene nombre, apellido y edad de cada persona.
const Personas = [
	{
		nombre: "Pablo",
		apellido: "Vazquéz",
		edad: "20",
	},
	{
		nombre: "Fernando",
		apellido: "Fernandez",
		edad: "25",
	},
	{
		nombre: "Nicolas",
		apellido: "Morán",
		edad: "28",
	},
	{
		nombre: "Sebastian",
		apellido: "Valenzuela",
		edad: "35",
	},
];
//la siguiente funcion lista las personas anteriores, y genera un nuevo arreglo con los nombres de las personas.
const listaDeNombres = Personas.map(function (personas) {
	return personas.nombre;
});
console.log(listaDeNombres);

//------------------------------------------------------------
