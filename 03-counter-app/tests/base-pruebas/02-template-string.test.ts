import { getSaludo } from '../../src/base-pruebas/02-template-string';


describe('When GetSaludo', () => {
  test('should return "Hola Barbara"', () => {
    const name = 'Barbara';
    const message = getSaludo('Barbara');

    expect(message).toBe(`Hola ${name}`);
  })
  
})
