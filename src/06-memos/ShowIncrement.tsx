interface ShowIncrementProps {
  increment: ()=> void
}

export const ShowIncrement:React.FC<ShowIncrementProps> = ({increment}) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Increment
    </button>
  )
}

