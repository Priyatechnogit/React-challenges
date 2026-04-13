import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Adopt me</Button>
      <Button>Fed me</Button>
      <Button>Play with me</Button>
      <Button>Give treat to me</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
      
    </button>
  );
}
