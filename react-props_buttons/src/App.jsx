export default function App() {
  function handleClick(text) {
    alert(`You clicked ${text} Button!`);
  }

  return (
    <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
      <Button color="orange" disabled={true} text="Click Me" onClick={handleClick} />
      <Button color="green" disabled={false} text="Save" onClick={handleClick} />
      <Button color="gray" disabled={true} text="Disabled" onClick={handleClick} />
      <Button color="red" disabled={false} text="Warning" onClick={handleClick} />
    </div>
  );
}

function getTextColor(bgColor) {
  // simple readability fix for common colors
  const darkColors = ["green", "red", "blue", "purple", "black"];
  return darkColors.includes(bgColor) ? "white" : "black";
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        backgroundColor: disabled ? "#ccc" : color,
        color: getTextColor(color),
        height: "60px",
        width: "120px",
        border: "none",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "0.2s ease",
        opacity: disabled ? 0.6 : 1,
      }}
      disabled={disabled}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}