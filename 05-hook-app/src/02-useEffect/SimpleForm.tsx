import { useState, useEffect } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Pepito',
    email: 'pepito@email.com'
  });

  const { username, email} = formState;

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  //es una buena practica tener un useEffect especializado por cada dependencia
  useEffect(() => {
    console.log('formState effect');
  }, [formState])

  useEffect(() => {
    console.log('email effect');
  }, [email])
  


  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type="text"
        placeholder="username"
        name="username"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />

      <input 
        type="email"
        placeholder="fernando@google.com"
        name="email"
        className="form-control mt-2"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'strinder2') && <Message />
      }

    </>
  )
}
