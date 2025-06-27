
// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
// importar con export
//import { heroes } from './data/heroes';

//importar con export default y una exportación individual
import heroes, {owners} from '../data/heroes';




export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id)
}
// console.log("🚀 ~ getHeroById ~ getHeroById:", getHeroById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner)
}
// console.log("🚀 ~ getHeroesByOwner ~ getHeroesByOwner:", getHeroesByOwner('DC'))


// console.log("🚀 ~ owners:", owners)


