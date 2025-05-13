import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";
import { fetchPokemons } from "../store/pokemonSlice";

export default function PokemonListPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useAppSelector((state) => state.pokemon);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchPokemons(currentPage));
  }, [dispatch]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentPokemons = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-[90vh] relative">
        <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "failed") {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-[32.6px] relative z-10 h-[82.3vh]">
        {currentPokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="p-[3px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-xl group h-[344px]"
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
          </div>
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
    </section>
  );
}
