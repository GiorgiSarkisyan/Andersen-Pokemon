import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import { addPokemon, removePokemon } from "../store/compareSlice";
import PokemonList from "../components/comparisonPage/PokemonList.tsx";
import { PiPlusCircle } from "react-icons/pi";
import PokemonStats from "../components/comparisonPage/PokemonStats.tsx";
import PokemonCard from "../components/comparisonPage/PokemonCard.tsx";
import { useState } from "react";

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  weight: number;
  height: number;
}

interface Pokemon {
  id: number;
  name: string;
  src: string;
  type: string;
  stats: PokemonStats;
}

export default function ComparisonPage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.compare.pokemons);

  const [openList, setOpenList] = useState<"left" | "right" | null>(null);

  const allPokemon = useSelector((state: RootState) => state.pokemon.data);

  const leftPokemon = pokemons[0] ?? null;
  const rightPokemon = pokemons[1] ?? null;

  const handleSelectPokemon = (side: "left" | "right", pokemon: Pokemon) => {
    if (side === "left" && leftPokemon) {
      dispatch(removePokemon(leftPokemon.id));
    }
    if (side === "right" && rightPokemon) {
      dispatch(removePokemon(rightPokemon.id));
    }

    dispatch(addPokemon(pokemon));

    setOpenList(null);
  };

  const handleRemovePokemon = (id: number) => {
    dispatch(removePokemon(id));
  };

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />
      <div className="min-h-[90vh] flex">
        <div className="bg-white z-10 rounded-3xl w-full h-auto m-10 shadow-2xl border-[1px] border-gray-400 flex flex-col p-8">
          <div className="flex justify-between w-full select-none gap-5 flex-wrap">
            <div className="flex flex-col items-center">
              {leftPokemon ? (
                <>
                  <PokemonCard
                    pokemon={leftPokemon}
                    onRemove={() => handleRemovePokemon(leftPokemon.id)}
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

            <div className="h-[338px] flex text-center items-center">
              <h2 className="font-dancing font-semibold text-8xl text-gray-400">
                VS
              </h2>
            </div>

            <div className="flex flex-col items-center">
              {rightPokemon ? (
                <>
                  <PokemonCard
                    pokemon={rightPokemon}
                    onRemove={() => handleRemovePokemon(rightPokemon.id)}
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
