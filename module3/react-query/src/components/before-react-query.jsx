import { useState, useEffect } from "react";

function BeforeReactQuery() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      setPokemons(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Render loading state
  if (isLoading) {
    return <p>Loading Pokémon...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render data once loaded
  return (
    <div>
      <h1>Pokémon List (Basic useEffect + fetch)</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BeforeReactQuery;
