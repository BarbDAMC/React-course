import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('should return an object', () => {
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(testUser);
  })

  test('getUsuarioActivo', () => {
    const name = 'Barbara';

    const testUser = {
        uid: 'ABC567',
        username: name
    }

    const user = getUsuarioActivo(name);

    expect(user.username).toBe(name);
    expect(user).toEqual(testUser);
  })
  
  
})
