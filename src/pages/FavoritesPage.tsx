import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GrCompare } from "react-icons/gr";
import { removeFavorite } from "../store/favoritesSlice";
import { addPokemon, removePokemon } from "../store/compareSlice";
import { motion } from "framer-motion";

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

interface Pokemon {
  id: number;
  name: string;
  src: string;
  type: string;
  stats: PokemonStats;
}

export default function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const comparePokemons = useAppSelector((state) => state.compare.pokemons);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFavorites = favorites.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleRemove = (id: number) => {
    dispatch(removeFavorite(id));
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const isInCompare = (id: number) => comparePokemons.some((p) => p.id === id);

  const toggleCompare = (pokemon: Pokemon) => {
    if (isInCompare(pokemon.id)) {
      dispatch(removePokemon(pokemon.id));
    } else {
      dispatch(addPokemon(pokemon));
    }
  };

  return (
    <section className="relative font-poppins h-[90vh]">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />

      {favorites.length === 0 ? (
        <p className="text-gray-900 text-center pt-20 text-3xl">
          No favorites yet.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-[32.6px] relative z-10 h-[82.3vh]">
            {currentFavorites.map((pokemon: Pokemon) => (
              <motion.div
                key={pokemon.id}
                className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-xl group h-[344px] cursor-pointer"
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
              >
                <div className="bg-white rounded-xl shadow-md p-5 relative overflow-hidden">
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                      className="text-zinc-600 cursor-pointer"
                      onClick={() => handleRemove(pokemon.id)}
                    >
                      <MdClose size={24} />
                    </button>

                    <button
                      className="text-zinc-600 cursor-pointer"
                      onClick={() => toggleCompare(pokemon)}
                    >
                      <GrCompare
                        size={24}
                        className={
                          isInCompare(pokemon.id) ? "text-blue-500" : ""
                        }
                      />
                    </button>
                  </div>

                  <img
                    src={pokemon.src}
                    alt={pokemon.name}
                    className="w-60 mx-auto"
                  />
                  <h2 className="text-center text-xl font-semibold mt-4 capitalize">
                    {pokemon.name}
                  </h2>
                  <p className="text-center text-gray-500">{pokemon.type}</p>

                  <div
                    className="absolute inset-0 bg-zinc bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center cursor-pointer z-10"
                    onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                  >
                    <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500">
                      Show More
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-[25px] pb-[12px] z-10 relative gap-5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600 text-white flex items-center justify-center"
              disabled={currentPage === 1}
            >
              <MdArrowBackIos size={20} />
            </button>
            <span className="text-lg font-semibold text-zinc-700 font-poppins">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600 text-white flex items-center justify-center"
              disabled={currentPage === totalPages}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
