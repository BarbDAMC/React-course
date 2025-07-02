import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
describe('Pruebas en 09-promesas', () => {
  
  test('should return a hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })

        done();
      })
  })

  test('should return an error if heroe does not exists', (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe con el id 100')
        done();
      })
  })
  

})
