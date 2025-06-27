
//declarar un arreglo a las posiciones vacias
//const arreglo = new Array();

const arreglo = [1, 2, 3, 4];


//no se recomienda usar el push porque muta la variable principal
//arreglo.push(1)

//al igual que con los objetos al hacer asignaciones, no se duplica un nuevo arrego
//sino que se asigna la dirección en memoria, por lo cual apuntan al mismo arreglo
//const arreglo2 = arreglo;

//para hacer una copia y añadir más elementos se usa el operador spread
const arreglo2 = [ ...arreglo, 5]

const arreglo3 = arreglo2.map(function name(numero) {
  return numero * 2;
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)