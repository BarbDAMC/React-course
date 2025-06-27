const personajes = ['Goku', 'Vegeta', 'Trunks'];

// const [p1, personaje2, personaje3] = personajes;
// console.log("🚀 ~ personaje1:", p1)


// const [, p2 ] = personajes;
// console.log("🚀 ~ p2:", p2)


// const [, , p3 ] = personajes;
// console.log("🚀 ~ p3:", p3)

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log("🚀 ~ numeros:", numeros)
console.log("🚀 ~ letras:", letras)

//Tarea
const useState = (valor) => {
  return [valor, () => {
    console.log("🚀 ~ Hola Mundo")
    
  }]
}

const [nombre, setNombre] = useState('Goku');
console.log("🚀 ~ nombre:", nombre)
setNombre();
