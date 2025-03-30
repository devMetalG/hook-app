interface ShowIncrementProps {
  increment: (value:number)=> void
}

export const ShowIncrement:React.FC<ShowIncrementProps> = ({increment}) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(4);
      }}
    >
      Increment
    </button>
  )
}

