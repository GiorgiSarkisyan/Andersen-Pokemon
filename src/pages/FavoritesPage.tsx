import { BiBookmark } from "react-icons/bi";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function FavoritesPage() {
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.pokemon);

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
      <h1 className="text-center justify-center py-[4.5px] text-white font-poppins text-2xl relative z-10">
        Favorites <br />
        Here you can find your Favorite Pokemons!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-[14.5px] relative z-10">
        {favorites.length === 0 ? (
          <p className="text-white text-center col-span-full">
            No favorites yet.
          </p>
        ) : (
          favorites.map((pokemon: any) => (
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
                  onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                >
                  <span className="text-transparent text-xl font-semibold bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500">
                    Show More
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
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
    </section>
  );
}
