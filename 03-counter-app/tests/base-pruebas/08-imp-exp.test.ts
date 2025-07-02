import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';
describe('Pruebas en 08-imp-exp', () => {
  
  test('should return a hero if exist the id', () => {
    const heroe = getHeroeById(2);

    expect(heroe).toEqual({
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    })
  })

  test('should return an empty objet if there is not a hero with the provided id', () => {
    const heroe = getHeroeById(6);
    expect(heroe).toBeFalsy()
  })

  test('should return all the heroes that are owened by DC', () => {
    const DCHeroes = getHeroesByOwner('DC');

    expect(DCHeroes.length).toBe(3);
    expect(DCHeroes).toEqual([
       {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      },
    ])

    expect(DCHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === 'DC' ))
  })

  test('should return all the heroes that are owened by Marvel', () => {
    const marvelHeroes = getHeroesByOwner('Marvel');

    expect(marvelHeroes.length).toBe(2);
    expect(marvelHeroes).toEqual([
       {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
      },
      {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
      }
    ])
  })
  
  
  

})
