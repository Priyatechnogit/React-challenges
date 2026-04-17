import { useState,useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    // Run loadPokemon on first render
    loadPokemon();
  },[] ); // empty array = run once on mount

  return (
    <main>
     {/*  <button type="button" onClick={loadPokemon}>
        Load Pokémon
      </button> */}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
