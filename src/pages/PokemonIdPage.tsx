import { useParams } from "react-router-dom";

export default function PokemonIdPage({ data }: { data: any[] }) {
  const { id } = useParams();
  const pokemon = data.find((p) => p.id === Number(id));

  if (!pokemon) {
    return (
      <div className="text-center text-red-500 mt-10">Pokémon not found.</div>
    );
  }

  return (
    <section className="relative font-poppins">
      <div className="absolute inset-0 bg-zinc-500 opacity-70 z-0" />

      <div className="h-[90vh] flex justify-center items-center">
        <div className="p-[4px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-400 to-purple-500 rounded-2xl w-6xl ">
          <div className="bg-white rounded-2xl p-8 relative h-[800px]">
            <img
              src={`/${pokemon.src}`}
              alt={pokemon.name}
              className="w-60 mx-auto mb-4 bg-gray-300 rounded-2xl"
            />
            <h2 className="text-2xl font-bold text-center capitalize mb-2 text-4xl text-amber-400">
              {pokemon.name}
            </h2>
            <div className="flex gap-48 mt-8 justify-center">
              <div>
                <p>
                  <strong>Type:</strong> {pokemon.type}
                </p>
                <p>
                  <strong>Weight:</strong> {pokemon.weight}
                </p>
                <p>
                  <strong>Height:</strong> {pokemon.height}
                </p>
              </div>
              <div>
                {pokemon.stats.map((stat: any) => (
                  <p key={stat.name}>
                    <strong>
                      {stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}:
                    </strong>{" "}
                    {stat.value}
                  </p>
                ))}
              </div>
            </div>
            <div className="my-10 bg-amber-300 h-[300px] rounded-3xl p-5 overflow-y-auto">
              <p className="font-poppins text-lg text-gray-700">
                {pokemon.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
