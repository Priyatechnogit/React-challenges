import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  
  async function loadPokemon(url = "https://pokeapi.co/api/v2/pokemon?offset=0") {
    try {
      const response = await fetch(url);
      const data = await response.json();

        setPokemon(data.results);

        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
useEffect(() => {
    loadPokemon();
  }, []);

  function handleNextPage() {
    if (nextUrl) {
      loadPokemon(nextUrl);
    }
  }

  function handlePrevPage() {
    if (prevUrl) {
      loadPokemon(prevUrl);
    }
  }

  return (
    <main>
      <button type="button" onClick={handlePrevPage} disabled={!prevUrl}>
        Previous Page
      </button>

      <button type="button" onClick={handleNextPage} disabled={!nextUrl}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
