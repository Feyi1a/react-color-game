// components/ColorOptions.jsx
// while the game is been played, the user can select a color from the options
// When the wrong attempts is over 5, the game is over
// The user can only continue playing when the new game is clicked again.

export default function ColorOptions({ options, onColorClick, disabled }) {
  return (
    <div className="options-container">
      {options.map((color, index) => (
        <button
          key={color}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => !disabled && onColorClick(color)}
          data-testid="colorOption"
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
}