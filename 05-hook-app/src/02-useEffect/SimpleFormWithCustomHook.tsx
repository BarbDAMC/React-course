import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
      username: '',
      email: '',
      password: ''
    })


  useEffect(() => {
    console.log('formState effect');
  }, [formState])

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
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

      <input 
        type="password"
        placeholder="Contraseña"
        name="password"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />

      <button 
      className="btn btn-primary mt-2"
      onClick={ onResetForm }
      >
        Borrar
      </button>

    </>
  )
}
