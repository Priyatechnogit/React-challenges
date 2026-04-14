import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // This should be a state variable.
  //const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState("false")

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite) //toggle the boolean vaalue
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />} 
    </button>
  );
}
 // The star should be filled now :)