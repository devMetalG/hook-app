import { useRef } from "react"

export const FocusScreen:React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    if(inputRef.current) inputRef.current.select();
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Write your name"
        className="form-control"
       /> 
       <button 
        className="btn btn-primary mt-2"
        onClick={onClick}
      >
        Set focus
      </button>
    </>
  )
}