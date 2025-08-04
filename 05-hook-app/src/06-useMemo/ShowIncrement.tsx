
interface ShowIncrementInterface {
  increment: (value: number) => void;
}

export const ShowIncrement = ({increment}: ShowIncrementInterface) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5)
      }}
    >
      Increment
    </button>
  )
}
