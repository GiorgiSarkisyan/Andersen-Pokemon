import { useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";

export default function FavoritesPage({ data }: { data: any[] }) {
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
      <h1 className="text-center justify-center py-2 text-white font-poppins text-3xl relative z-10">
        Favorites <br />
        Here you can find your Favorite Pokemons!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-[14.5px] relative z-10">
        {data.map((pokemon: any) => (
          <div
            key={pokemon.id}
            className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-xl group"
          >
            <div className="bg-white rounded-xl shadow-md p-5 relative overflow-hidden">
              <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <button className="text-zinc-600 cursor-pointer">
                  <BiBookmark size={24} />
                </button>
                <button className="text-zinc-600 cursor-pointer">
                  <MdClose size={24} />
                </button>
              </div>

              <img
                src={`/${pokemon.src}`}
                alt={pokemon.name}
                className="w-60 mx-auto"
              />
              <h2 className="text-center text-xl font-semibold mt-4 capitalize">
                {pokemon.name}
              </h2>
              <p className="text-center text-gray-500">{pokemon.type}</p>

              <div
                className="absolute inset-0 bg-zinc bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center cursor-pointer z-10"
                onClick={() => setSelectedPokemon(pokemon)}
              >
                <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500">
                  Show More
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center z-10 relative">
        <button className="p-2 rounded-full hover:bg-zinc-300 text-white flex items-center justify-center cursor-pointer">
          <MdArrowBackIos size={20} />
        </button>
        <span className="text-lg font-semibold text-zinc-700 font-poppins">
          100
        </span>
        <button className="p-2 rounded-full hover:bg-zinc-300 text-white flex items-center justify-center cursor-pointer">
          <MdArrowForwardIos size={20} />
        </button>
      </div>

      {selectedPokemon && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="p-[4px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-2xl max-w-xl w-full">
            <div className="bg-white rounded-2xl p-8 relative">
              <button
                className="absolute top-3 right-3 text-zinc-600 hover:text-black cursor-pointer"
                onClick={() => setSelectedPokemon(null)}
              >
                <MdClose size={24} />
              </button>
              <img
                src={`/${selectedPokemon.src}`}
                alt={selectedPokemon.name}
                className="w-48 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-center capitalize mb-2">
                {selectedPokemon.name}
              </h2>
              <div className="flex justify-around mt-8">
                <div>
                  <p>
                    <strong>Type:</strong> {selectedPokemon.type}
                  </p>
                  <p>
                    <strong>Weight:</strong> {selectedPokemon.weight}
                  </p>
                  <p>
                    <strong>Height:</strong> {selectedPokemon.height}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Health:</strong> {selectedPokemon.stats.vitality}
                  </p>
                  <p>
                    <strong>Strength:</strong> {selectedPokemon.stats.strength}
                  </p>
                  <p>
                    <strong>Agility:</strong> {selectedPokemon.stats.agility}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
