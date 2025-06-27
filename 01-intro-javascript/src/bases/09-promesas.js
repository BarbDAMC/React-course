
import {getHeroById} from './bases/08-import-export'

// const promesa = new Promise((resolve, reject) => {
//   //resolve callback a ejecutar cuando se cumpla la promesa
//   //reject callback para cuando falla la promesa

//   setTimeout(() => {
//     // console.log('Dos segundos después')
//     const heroe = getHeroById(2);
//     // console.log("🚀 ~ setTimeout ~ heroe:", heroe)
    
//     // pasa a la promesa el parámetro heroe
//     // resolve(heroe);

//     reject('No se pudo encontrar el heroe')
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log("🚀 ~ promesa.then ~ heroe:", heroe)
// })
// .catch((err) => console.warn( err ))

// // then manejar resultado exitosos
// //catch manejar excepción
// //finally después de catch or then

const getHeroByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroById(id);

      if (!heroe) {
        return reject('No se pudo encontrar el heroe')
      }

      resolve(heroe);
    }, 2000);

  });

  return promesa;
}

getHeroByIdAsync(4)
  // .then((heroe) => console.log("🚀 ~ getHeroByIdAsync.then ~ heroe:", heroe))
  .then( console.log )
  // .catch((err) => console.warn(err))
  .catch( console.warn )