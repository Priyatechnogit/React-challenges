import { useState } from "react";
import "./styles.css";

export default function App() {
//  let code = "?";
const [ inputCode , setInputCode ] = useState("")

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setInputCode( inputCode + emoji); // append emoji to the inputcode
    console.log(emoji);
    console.log(inputCode);
  }

  function handleReset(){ // Reset function
    setInputCode(""); // clear the inputCode
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
        
      </div>

      <button
        type="button"
        onClick={handleReset} // calls reset function
      >
        Reset
      </button>

      {inputCode === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
