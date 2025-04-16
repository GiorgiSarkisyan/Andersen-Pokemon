import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";
import "./App.css";
import { BiBookmark } from "react-icons/bi";

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    src: "pikachu.png",
  },
  {
    id: 2,
    name: "Eevee",
    type: "fire",
    src: "eevee.png",
  },
  {
    id: 3,
    name: "Charizard",
    type: "Fire/Flying",
    src: "charizard.png",
  },
  {
    id: 4,
    name: "mimic",
    type: "Normal",
    src: "mimic.png",
  },
  {
    id: 5,
    name: "mewtwo",
    type: "Psychic",
    src: "mewtwo.png",
  },
];

function App() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1280px] mx-auto">
        <header className="bg-neutral-500 w-full select-none flex justify-between px-20 h-20 items-center">
          <h1 className="text-5xl font-bold cursor-pointer  font-dancing text-zinc-800">
            PokeStat
          </h1>
          <div>
            <ul className="grid grid-cols-2 text-2xl font-poppins text-zinc-800">
              <li className="cursor-pointer">Favorites</li>
              <li className="cursor-pointer">Comparison</li>
            </ul>
          </div>
        </header>
        <section className="bg-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 py-10">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="bg-white rounded-lg shadow-md p-5 relative group"
              >
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-zinc-600">
                    <BiBookmark size={24} />
                  </button>
                  <button className="text-zinc-600">
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
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-[37px]">
            <button className="p-2 rounded-full hover:bg-zinc-300 text-white flex items-center justify-center">
              <MdArrowBackIos size={20} />
            </button>
            <span className="text-lg font-semibold text-zinc-700">100</span>
            <button className="p-2 rounded-full hover:bg-zinc-300 text-white flex items-center justify-center">
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
