import { useState } from 'react';

interface FormValues {
  username: string;
  email: string;
  password: string;
}

export const useForm = (initialForm:FormValues) => {  

  const [formState, setFormState] = useState(initialForm);
  
  const onInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(
      initialForm
    );
  }

  return {
    ...formState,
    onInputChange,
    onResetForm
  }
}

