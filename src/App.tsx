import "./App.css";
import Header from "./components/Header";
import PokemonListPage from "./pages/PokemonListPage";

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    src: "pikachu.png",
    height: "3ft",
    weight: "25kg",
    stats: {
      vitality: 100,
      strength: 50,
      agility: 50,
    },
  },
  {
    id: 2,
    name: "Eevee",
    type: "fire",
    src: "eevee.png",
    height: "3ft",
    weight: "25kg",
    stats: {
      vitality: 100,
      strength: 50,
      agility: 50,
    },
  },
  {
    id: 3,
    name: "Charizard",
    type: "Fire/Flying",
    src: "charizard.png",
    height: "3ft",
    weight: "25kg",
    stats: {
      vitality: 100,
      strength: 50,
      agility: 50,
    },
  },
  {
    id: 4,
    name: "mimic",
    type: "Normal",
    src: "mimic.png",
    height: "3ft",
    weight: "25kg",
    stats: {
      vitality: 100,
      strength: 50,
      agility: 50,
    },
  },
  {
    id: 5,
    name: "mewtwo",
    type: "Psychic",
    src: "mewtwo.png",
    height: "3ft",
    weight: "25kg",
    stats: {
      vitality: 100,
      strength: 50,
      agility: 50,
    },
  },
];

function App() {
  return (
    <div
      className="bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: 'url("/wallpaper.png")' }}
    >
      <div className="mx-auto max-w-[1280px]">
        <Header />
        <PokemonListPage data={pokemons} />
      </div>
    </div>
  );
}
export default App;
