import { useEffect } from "react"

export const Message:React.FC = () => {

  useEffect(() => {
    console.log('Message mounted!');
    return() => {
      console.log('Message unmounted!')
    }
  }, []);

  return (
    <>
      <h3>User already exists.</h3>
    </>
  )
}

