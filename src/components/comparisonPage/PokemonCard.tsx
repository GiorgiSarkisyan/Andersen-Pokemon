// src/components/PokemonCard.tsx

import { MdClose } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";

const PokemonCard = ({
  pokemon,
  onRemove,
}: {
  pokemon: any;
  onRemove?: () => void;
}) => (
  <div className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-xl group">
    <div className="w-[270px] h-[338px] bg-white rounded-xl shadow-md relative overflow-hidden flex items-center flex-col justify-center">
      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button className="text-zinc-600 cursor-pointer">
          <BiBookmark size={24} />
        </button>
        <button onClick={onRemove} className="text-zinc-600 cursor-pointer">
          <MdClose size={24} />
        </button>
      </div>

      <img
        src={`/${pokemon.src}`}
        alt={pokemon.name}
        className="w-40 h-40 object-contain mx-auto"
      />
      <h2 className="text-center text-xl font-semibold mt-4 capitalize">
        {pokemon.name}
      </h2>
      <p className="text-center text-gray-500">{pokemon.type}</p>
    </div>
  </div>
);

export default PokemonCard;
