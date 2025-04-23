export default function Header() {
  return (
    <header className="bg-gradient-to-tl from-amber-500 to-yellow-400   w-full select-none flex justify-between px-20 h-20 items-center">
      <h1 className="text-5xl font-bold cursor-pointer  font-dancing text-white">
        PokeStat
      </h1>
      <div>
        <ul className="grid grid-cols-2 text-2xl font-poppins text-white">
          <li className="cursor-pointer">Favorites</li>
          <li className="cursor-pointer">Comparison</li>
        </ul>
      </div>
    </header>
  );
}
