import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PokemonListPage from "./pages/PokemonListPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparisonPage from "./pages/ComparisonPage";
import PokemonIdPage from "./pages/PokemonIdPage";

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    src: "pikachu.png",
    height: "3ft",
    weight: "25kg",
    about:
      "Pikachu is a lively Electric-type Pokémon known for storing electricity in its cheeks. It's friendly, loyal, and loves to play, making it one of the most iconic Pokémon in the world.",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 2,
    name: "Eevee",
    type: "Fire",
    src: "eevee.png",
    height: "3ft",
    weight: "25kg",
    about:
      "Eevee is a curious and adaptable Pokémon known for its multiple evolution forms. Its playful nature and big, bright eyes make it a fan favorite.",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 3,
    name: "Charizard",
    type: "Fire/Flying",
    src: "charizard.png",
    height: "3ft",
    weight: "25kg",
    about:
      "Charizard is a powerful Fire and Flying-type Pokémon. Known for its fierce nature and blazing breath, it's admired by trainers who seek a strong and loyal battle partner.",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 4,
    name: "Mimic",
    type: "Normal",
    src: "mimic.png",
    height: "3ft",
    weight: "25kg",
    about:
      "Mimic is a mysterious Normal-type Pokémon that loves to imitate others. Its playful disguises can confuse opponents and delight trainers.",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 5,
    name: "Mewtwo",
    type: "Psychic",
    src: "mewtwo.png",
    height: "3ft",
    weight: "25kg",
    about:
      "Mewtwo is a legendary Psychic-type Pokémon created through genetic manipulation. With unmatched psychic powers, it is both feared and respected in the Pokémon world.",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-gray-200 bg-cover bg-center"
        style={{ backgroundImage: 'url("/wallpaper.png")' }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Header />
          <Routes>
            <Route path="/" element={<PokemonListPage data={pokemons} />} />
            <Route
              path="/favorites"
              element={<FavoritesPage data={pokemons} />}
            />
            <Route
              path="/comparison"
              element={<ComparisonPage data={pokemons} />}
            />
            <Route
              path="/pokemon/:id"
              element={<PokemonIdPage data={pokemons} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
