/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida(nombre, apellido) {
    return "Bienvenido " + nombre + " " + apellido;
}
let nombre = "Cristian";
let apellido = "Martin";
console.log(bienvenida(nombre, apellido)); 


/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
function calc(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: División por cero (0) no permitida.";
            }
        default:
            return "Operador no válido (solo se permiten '+', '-', '*' y '/').";
    }
}
/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp(max, min, porcentajeLluvia) {
    let mensaje = '';

    if (max < 15) {
        mensaje = 'Es recomendable salir con abrigo';
    }
    else if (max < 26 && min > 17) {
        mensaje = 'El día está lindo';
    }
    else if (min > 25) {
        mensaje = 'El día estará caluroso';
    }
    if (porcentajeLluvia > 50) {
        mensaje += ', recomendable un paraguas';
    }

    return mensaje;
}
/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:
function checkPassword(contrasena) {
    if (contrasena.length >= 8) {
        return "La contraseña es segura 8 caracteres o más.";
    } else {
        return "La contraseña es insegura, menos de 8 caracteres.";
    }
}
/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
function stringInverso(cadena) {
    let palabras = cadena.split(' ');
    let palabrasInversas = palabras.reverse();
    let cadenaInversa = palabrasInversas.join(' ');
    return cadenaInversa;
}
/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}