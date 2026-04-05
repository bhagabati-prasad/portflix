export const Thumb = (props) => {
  const { selected, value, onClick } = props

  return (
    <div
      className={`embla-thumbs__slide ${selected ? "embla-thumbs__slide--selected" : ""}`}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {value}
      </button>
    </div>
  )
}
