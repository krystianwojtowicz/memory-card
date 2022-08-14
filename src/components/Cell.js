function Cell({ color, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(color);
    }
  };
  return (
    <div
      className={flipped ? color.name : `${color.name}  white`}
      onClick={handleClick}
    ></div>
  );
}

export default Cell;
