import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// Query => GET
// Mutation => PUT, POST, DELETE

const fetchPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  return response.json();
};

function AfterReactQuery() {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isLoading) {
    return <p>Loading Pokémon...</p>;
  }

  if (isError) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Pokémon List (Basic useEffect + fetch)</h1>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button onClick={() => refetch()}> Refetch</button>
    </div>
  );
}

export default AfterReactQuery;
