import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Stat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  type: string;
  src: string;
  height: number;
  weight: number;
  stats: Stat[];
}

interface PokemonState {
  data: Pokemon[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PokemonState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchPokemons = createAsyncThunk<Pokemon[], number>(
  "pokemon/fetchPokemons",
  async (page) => {
    const limit = 30;
    const offset = (page - 1) * limit;
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const detailedData: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const detailRes = await fetch(pokemon.url);
        const detailData = await detailRes.json();

        return {
          id: detailData.id,
          name: detailData.name,
          type: detailData.types
            .map((t: { type: { name: string } }) => t.type.name)
            .join(", "),
          src: detailData.sprites.front_default,
          height: detailData.height,
          weight: detailData.weight,
          stats: detailData.stats.map(
            (stat: { base_stat: number; stat: { name: string } }) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            })
          ),
        };
      })
    );

    return detailedData;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
        state.data = [];
      })

      .addCase(
        fetchPokemons.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong.";
      });
  },
});

export default pokemonSlice.reducer;
