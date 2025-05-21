// components/ColorBox.jsx

export default function ColorBox({ targetColor }) {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: targetColor }}
      data-testid="colorBox"
    ></div>
  );
}

