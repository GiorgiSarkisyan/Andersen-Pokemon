import { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import PokemonCard from "../components/comparisonPage/PokemonCard.tsx";
import PokemonList from "../components/comparisonPage/PokemonList.tsx";
import PokemonStats from "../components/comparisonPage/PokemonStats.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  src: string;
  [key: string]: any;
}

export default function ComparisonPage() {
  const [openList, setOpenList] = useState<"left" | "right" | null>(null);
  const [leftPokemon, setLeftPokemon] = useState<Pokemon | null>(null);
  const [rightPokemon, setRightPokemon] = useState<Pokemon | null>(null);

  const allPokemon = useSelector((state: RootState) => state.pokemon.data); // adjust based on your actual slice

  const handleSelectPokemon = (side: "left" | "right", pokemon: Pokemon) => {
    if (side === "left") setLeftPokemon(pokemon);
    else setRightPokemon(pokemon);
    setOpenList(null);
  };

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
      <div className="min-h-[90vh] flex">
        <div className="bg-white z-10 rounded-3xl w-full h-auto m-10 shadow-2xl border-[1px] border-gray-400 flex flex-col p-8">
          <div className="flex justify-between w-full select-none gap-5 flex-wrap">
            {/* Left Side */}
            <div className="flex flex-col items-center">
              {leftPokemon ? (
                <>
                  <PokemonCard
                    pokemon={leftPokemon}
                    onRemove={() => setLeftPokemon(null)}
                  />
                  {!openList && <PokemonStats pokemon={leftPokemon} />}
                </>
              ) : (
                <div
                  onClick={() => setOpenList("left")}
                  className="cursor-pointer w-[275px] h-[343px] bg-white rounded-xl shadow-md border-4 border-gray-400 relative overflow-hidden flex items-center justify-center flex-col group"
                >
                  <PiPlusCircle className="w-20 h-20 text-gray-400" />
                  <h2 className="text-gray-400 font-medium">
                    Add your Pokémon
                  </h2>
                </div>
              )}
            </div>

            {/* VS Text */}
            <div className="h-[338px] flex text-center items-center">
              <h2 className="font-dancing font-semibold text-8xl text-gray-400">
                VS
              </h2>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
              {rightPokemon ? (
                <>
                  <PokemonCard
                    pokemon={rightPokemon}
                    onRemove={() => setRightPokemon(null)}
                  />
                  {!openList && <PokemonStats pokemon={rightPokemon} />}
                </>
              ) : (
                <div
                  onClick={() => setOpenList("right")}
                  className="cursor-pointer w-[275px] h-[343px] bg-white rounded-xl shadow-md border-4 border-gray-400 relative overflow-hidden flex items-center justify-center flex-col group"
                >
                  <PiPlusCircle className="w-20 h-20 text-gray-400" />
                  <h2 className="text-gray-400 font-medium">
                    Add your Pokémon
                  </h2>
                </div>
              )}
            </div>
          </div>

          {openList && (
            <PokemonList
              data={allPokemon}
              openList={openList}
              handleSelectPokemon={handleSelectPokemon}
              setOpenList={setOpenList}
            />
          )}
        </div>
      </div>
    </section>
  );
}
