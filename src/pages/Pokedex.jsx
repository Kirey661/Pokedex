import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pokedex.css";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading)
    return (
      <div className="pokedex-container">
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="pokedex-container">
        <h1 style={{ color: "red" }}>Error</h1>
      </div>
    );

  return (
    <>
      <div className="pokedex-container">
        <h1>Pokédex</h1>

        <input
          type="text"
          placeholder="Search Pokémon..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="pokemon-grid">
          {filteredPokemons.map((pokemon, index) => {
            const pokemonId = pokemon.url.split("/")[6];
            // "https [1]://[tomt]] pokeapi.com [2] /api [2]/ v2 [4] / pokemon?limit=151 [5]  
            return (
              <PokemonCard key={pokemonId} id={pokemonId} name={pokemon.name} />
            );
          })}
        </div>
      </div>

      <div className="back-home">
        <Link className="back-link" to="/">
          {" "}
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default Pokedex;
