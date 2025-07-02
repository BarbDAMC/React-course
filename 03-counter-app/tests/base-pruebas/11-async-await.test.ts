import { getImagen } from '../../src/base-pruebas/11-async-await';
describe('Pruebas en 11-async-await', () => {

  test('should return a image url', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
    // expect(url).toBe('No se encontró la imgen');
  })
  
  
})
