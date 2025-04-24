import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PokemonListPage from "./pages/PokemonListPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparisonPage from "./pages/ComparisonPage";

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    src: "pikachu.png",
    height: "3ft",
    weight: "25kg",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 2,
    name: "Eevee",
    type: "fire",
    src: "eevee.png",
    height: "3ft",
    weight: "25kg",
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
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 4,
    name: "mimic",
    type: "Normal",
    src: "mimic.png",
    height: "3ft",
    weight: "25kg",
    stats: [
      { name: "vitality", value: 100 },
      { name: "strength", value: 50 },
      { name: "agility", value: 50 },
    ],
  },
  {
    id: 5,
    name: "mewtwo",
    type: "Psychic",
    src: "mewtwo.png",
    height: "3ft",
    weight: "25kg",
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
