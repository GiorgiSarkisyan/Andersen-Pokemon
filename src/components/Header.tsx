import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-tl from-amber-500 to-yellow-400 w-full select-none flex justify-between px-20 h-[10dvh] items-center">
      <h1 className="text-5xl font-bold cursor-pointer font-dancing text-white">
        <Link to="/">PokeStat</Link>
      </h1>
      <div>
        <ul className="grid grid-cols-2 text-2xl font-poppins text-white gap-6">
          <Link
            to="/favorites"
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              location.pathname === "/favorites" ? "text-blue-600" : ""
            }`}
          >
            Favorites
          </Link>
          <Link
            to="/comparison"
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              location.pathname === "/comparison" ? "text-blue-600" : ""
            }`}
          >
            Comparison
          </Link>
        </ul>
      </div>
    </header>
  );
}
