function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
frase = frase.toLowerCase();

let contador = 0;

let vocales = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
        contador++;
    }
}

return contador;


}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
// Tu código:👇
 // Inicializar una variable para almacenar el número actual
 let numeroActual = dividendo;

 // Iterar mientras el número actual no sea divisible por el divisor
 while (numeroActual % divisor !== 0) {
     // Incrementar el número actual para probar el siguiente número
     numeroActual++;
 }

 // Devolver el primer número divisible encontrado
 return numeroActual;
}

// Ejemplo de uso de la función
let divisor = 3;
let dividendo = 10;
console.log("El primer número divisible por " + divisor + " a partir de " + dividendo + " es: " + primerDivisible(divisor, dividendo));

function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    for (let i = 1; i <= 100; i++) {
        if (i === X) {
            return "El número " + X + " ha sido encontrado.";
        }
    }
    return "El número " + X + " no se encuentra en el rango del 1 al 100.";
}


function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma = 0;
for (let i = 0; i <= numero; i++) {
    suma += i;
}
return suma;
}


function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let resultado = 0;

for (let i = numeroBinario.length - 1, potencia = 0; i >= 0; i--, potencia++) {
    resultado += parseInt(numeroBinario[i]) * Math.pow(2, potencia);
}
return resultado;
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇

}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}