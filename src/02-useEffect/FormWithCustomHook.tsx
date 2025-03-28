import { useForm } from "../hooks/useForm";

export const FormWithCustomHook:React.FC = () => {

  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  })
  

  // useEffect(() => {
  //   console.log('Form state changed') 
  // }, [formState]);

  return (
    <>
      <h1>Simple Form with Custom Hook</h1> 
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Type your username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input 
        type="text"
        className="form-control mt-2"
        placeholder="example@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input 
        type="password"
        className="form-control mt-2"
        placeholder="Type your password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Reset Form</button>
    </>
  )
}

