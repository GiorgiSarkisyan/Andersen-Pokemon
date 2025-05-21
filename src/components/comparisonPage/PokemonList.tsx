import { IoClose } from "react-icons/io5";

const PokemonList = ({
  data,
  openList,
  handleSelectPokemon,
  setOpenList,
}: {
  data: any[];
  openList: "left" | "right" | null;
  handleSelectPokemon: (side: "left" | "right", pokemon: any) => void;
  setOpenList: React.Dispatch<React.SetStateAction<"left" | "right" | null>>;
}) => (
  <div className="mt-10 bg-gray-100 rounded-xl p-4 relative max-w-[1130px]">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Choose your Pokémon</h3>
      <button onClick={() => setOpenList(null)}>
        <IoClose className="text-2xl text-red-500" />
      </button>
    </div>

    <div className="flex overflow-x-auto pb-2">
      {data.map((pokemon) => (
        <div
          key={pokemon.id}
          onClick={() => {
            if (openList !== null) {
              handleSelectPokemon(openList, pokemon);
            }
          }}
          className="min-w-[180px] bg-white shadow-lg rounded-lg p-4 flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={pokemon.src}
            alt={pokemon.name}
            className="w-24 h-24 object-contain mx-auto mb-2"
          />
          <h4 className="text-center font-semibold">{pokemon.name}</h4>
          <p className="text-center text-sm text-gray-500">{pokemon.type}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PokemonList;
