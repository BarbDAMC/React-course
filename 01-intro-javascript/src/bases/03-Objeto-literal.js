//const persona = {}; //las llaves son un objeto literal, en algunos lenguajes se concoen como diccionarios

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zipcode: 2434543,
    lat: 34.32,
    long: 34.5
  }
};

//
//console.log({person: persona})

//desde ECS6 se puede pasar la propiedad si tiene exactamente el mismo nombre se puede obviar la llave persona: 
console.log(persona)

//const persona2 = persona; al hacer esto se copia la referencia en espacio en memoria
//persona.nombre = 'Peter' -> al hacer esto, se cambia la propiedad

//para hace una copia del objecto
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)


