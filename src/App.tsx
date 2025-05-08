import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PokemonListPage from "./pages/PokemonListPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparisonPage from "./pages/ComparisonPage";
import PokemonIdPage from "./pages/PokemonIdPage";

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
            <Route path="/" element={<PokemonListPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/pokemon/:id" element={<PokemonIdPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
