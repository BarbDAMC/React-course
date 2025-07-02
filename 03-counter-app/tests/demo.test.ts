
describe('Pruebas en <DemoComponent />', () => {
  test('should pass', () => {
    //Arrange
    const message1 = 'Hola Mundo';
  
    //Act
    const message2 = message1.trim();
  
    //Assert
    expect(message1).toBe(message2);
  })
})

