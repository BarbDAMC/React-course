//Desestructuración

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Iroman',
  rango: 'Soldado'
}

const { nombre, edad, clave } = persona;

console.log("🚀 ~ nombre:", nombre)
console.log("🚀 ~ clave:", clave)
console.log("🚀 ~ edad:", edad)

const useContext = ({clave, edad, rango = 'Capitan'}) => {
  // console.log("🚀 ~ retornaPersona ~ usuario:", nombre)
  // console.log("🚀 ~ retornaPersona ~ rango:", rango)

  return {
    nombreClave: clave,
    anios: edad,
    latLng: {
      lat: 14.12,
      lng: -12.32
    }
  }
}

const {nombreClave, anios, latLng:{ lat, lng }} = useContext(persona);
//otra opción para desestructurar objetos anidados:
// const {lat, lng} = latLng;

// console.log("🚀 ~ avenger:", avenger)
console.log("🚀 ~ nombreClave:", nombreClave)
console.log("🚀 ~ anios:", anios)
console.log("🚀 ~ lng:", lng)
console.log("🚀 ~ lat:", lat)
