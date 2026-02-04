import React from "react";

function PokemonCard({ name, id }) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <img src={imgUrl} alt={name} />
      <p>#{id}</p>
      <h3>{name}</h3>
    </div>
  );
}

export default PokemonCard;
