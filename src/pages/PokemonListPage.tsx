import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  addPokemon,
  removePokemon,
  selectComparePokemons,
} from "../store/compareSlice";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { useGetPokemonsQuery } from "../store/pokemonApi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { GrCompare } from "react-icons/gr";

export default function PokemonListPage() {
  const comparePokemons = useAppSelector(selectComparePokemons);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetPokemonsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const isInCompare = (id: number) => comparePokemons.some((p) => p.id === id);

  const toggleCompare = (pokemon: any) => {
    if (isInCompare(pokemon.id)) {
      dispatch(removePokemon(pokemon.id));
    } else if (comparePokemons.length < 2) {
      dispatch(addPokemon(pokemon));
    } else {
      alert("You can only compare 2 Pokémon at a time.");
    }
  };

  const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = (pokemon: any) => {
    if (isFavorite(pokemon.id)) {
      dispatch(removeFavorite(pokemon.id));
    } else {
      dispatch(addFavorite(pokemon));
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[90vh] relative">
        <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading Pokémons</p>;
  }

  if (!data) return null;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPokemons = data.slice(indexOfFirst, indexOfLast);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-[32.6px] relative z-10 h-[82.3vh]">
        {currentPokemons.map((pokemon) => (
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
                  onClick={() => toggleFavorite(pokemon)}
                >
                  <BiBookmark
                    size={24}
                    className={isFavorite(pokemon.id) ? "text-blue-500" : ""}
                  />
                </button>
                <button
                  className="text-zinc-600 cursor-pointer"
                  onClick={() => toggleCompare(pokemon)}
                >
                  <GrCompare
                    size={24}
                    className={isInCompare(pokemon.id) ? "text-blue-500" : ""}
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
                onClick={() => navigate(`pokemon/${pokemon.id}`)}
              >
                <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500">
                  Show More
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[21px] pb-[12px] z-10 relative gap-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600 text-white flex items-center justify-center"
          disabled={currentPage === 1}
        >
          <MdArrowBackIos size={24} />
        </button>
        <span className="text-white font-semibold text-lg">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600 text-white flex items-center justify-center"
          disabled={currentPage === totalPages}
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </section>
  );
}
