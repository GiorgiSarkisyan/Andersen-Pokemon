// src/store/pokemonApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  id: number;
  name: string;
  src: string;
  type: string;
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemons: build.query<Pokemon[], void>({
      query: () => "pokemon?limit=100",
      transformResponse: async (response: any) => {
        const detailedData: Pokemon[] = await Promise.all(
          response.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return {
              id: data.id,
              name: data.name,
              src: data.sprites.front_default,
              type: data.types.map((t: any) => t.type.name).join(", "),
              height: data.height,
              weight: data.weight,
              stats: data.stats.map((stat: any) => ({
                name: stat.stat.name,
                value: stat.base_stat,
              })),
            };
          })
        );
        return detailedData;
      },
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
