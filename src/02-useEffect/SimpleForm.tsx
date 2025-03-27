import { useEffect, useState } from "react"
import { Message } from './Message';

export const SimpleForm:React.FC = () => {


  const [formState, setFormState] = useState({
    username: 'Guillermo',
    email: 'guillermo@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('Form state changed') 
  }, [formState]);

  return (
    <>
      <h1>Simple Form</h1> 
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input 
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {
        username === 'MetalG' && <Message/>
      }
    </>
  )
}

