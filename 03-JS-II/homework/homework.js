// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x > y){
    return x;
  }
  else if(x === y){
    return x;
  }
  return y;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad >= 18){
    return 'Allowed';
  }
  return 'Not allowed';
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1 || status === 2){
    if(status === 1){
      return 'Online';
    }
    else{
      return 'Away';
    }
  }
  return 'Offline';
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma === 'aleman'|| idioma === 'mandarin'|| idioma === 'ingles'){
    if(idioma === 'aleman'){
      return 'Guten Tag!';
    }
    else if(idioma === 'mandarin'){
      return 'Ni Hao!';
    }
    else{
      return 'Hello!';
    }
  }
  return 'Hola!';
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  
  switch(color){
    case 'red': return 'This is red';
    break;
    case 'blue': return 'This is blue';
    break;
    case 'green': return 'This is green';
    break;
    case 'orange': return 'This is orange';
    break;
    default: return 'Color not found';
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero === 10 || numero === 5){
    return true;
  }
  return false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero>20 && numero<50){
    return true;
  }
  return false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var entero = Math.floor(numero);
  if(numero === entero){
    return true;
  }
  return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var div3 = numero%3;
  var div5 = numero%5;
  if(div3 === 0 && div5 === 0){
    return 'fizzbuzz';
  }
  else if(div3 === 0){
    return 'fizz';
  }
  else if(div5 === 0){
    return 'buzz';
  }
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  var b = 0;
  if(num1<=0 ||num2<=0 ||num3<=0){
    b = 1;
    if(num1===0 || num2===0 || num3===0){
      return 'Error';
    }
    return 'Hay negativos';
  }

  var mayor = num1;
  if(num2>mayor || num3>mayor){
    if(num2>mayor){
      mayor = num2;
      if(num3>mayor){
        mayor = num3+1;
        b = 1;
        return mayor;
      }
    }
    else{
      mayor = num3+1;
      b = 1;
      return mayor;
    }
  }
  else{
    if(mayor>0){
      return 'Número 1 es mayor y positivo';
    }
  }
  if(b===0){
    return false;
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var b = 0;
  if(numero!==0 && numero!==1){
    for(let i = 2; i<=(numero/2);i++){
      var div = numero%i;
      if(div===0){
        b = 1;
      }
    }
  }
  else{
    return false;
  }
  if(b===0){
    return true;
  }
  return false;
  
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor===true || valor===1){
    return 'Soy verdadero';
  }
  else if(valor===false || valor===0){
    return 'Soy falso';
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  let tabla = []; 
  for(let i = 0; i<11; i++){
    var multiplo = 6*i;
    tabla.push(multiplo); 
  }
  return tabla;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero>0){
    if(numero>99 && numero<1000){
      return true;
    }
    return false;
  }
  else{
    if(numero<-99 && numero>-1000){
      return true;
    }
    return false;
  }
 
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var num = numero;
  var c = 0;
  do{
    num = num+5;
    c = c+1;
  }while(c<8);
  return num;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
