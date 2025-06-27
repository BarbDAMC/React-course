
function saludar(nombre) {
  return `Hola, ${ nombre }`
}

//esto imprime la referencia a la función
console.log(saludar)

//el problema con el tipo previo de funciones es que es muy facil sobreescribirlas, ej:
saludar = 30;
console.log(saludar);

//asignadola a esta constante ayuda a evitar asignaciones no deseadas
const saludar2 = function (nombre) {
  return `Hola, ${ nombre }`
}

console.log(saludar2('Vegeta'));


//también se puede trabajar con arrow functions
const saludar3 = (nombre) => `Hola, ${ nombre }`
console.log(saludar3('Barbs'));

//devolver un objeto implicitamente
const getUser = () => ({
  uuiid: 'ABEJK12',
  username: 'username'
})

console.log(getUser())

const getUsuarioActivo = (nombre) => ({
  uuiid: 'ABC567',
  username: nombre
})

const user = getUsuarioActivo('Barbs');
console.log(user)