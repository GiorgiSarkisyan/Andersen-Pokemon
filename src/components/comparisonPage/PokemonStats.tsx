import React from "react";

interface PokemonStatsProps {
  pokemon: any;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => (
  <div className="mt-4 text-center">
    <h3 className="text-lg font-semibold">Stats</h3>
    <ul className="text-gray-600">
      {pokemon.stats.map((stat: any, i: number) => (
        <li key={i}>
          {stat.name}: {stat.value}
        </li>
      ))}
    </ul>
  </div>
);

export default PokemonStats;
