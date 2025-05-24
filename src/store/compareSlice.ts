import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

interface Pokemon {
  id: number;
  name: string;
  src: string;
  type: string;
  stats: PokemonStats;
}

interface CompareState {
  pokemons: Pokemon[];
}

const initialState: CompareState = {
  pokemons: [],
};
const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addPokemon(state, action: PayloadAction<Pokemon>) {
      if (state.pokemons.length < 2) {
        state.pokemons.push(action.payload);
      }
    },
    removePokemon(state, action: PayloadAction<number>) {
      state.pokemons = state.pokemons.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = compareSlice.actions;

export const selectComparePokemons = (state: RootState) =>
  state.compare.pokemons;

export default compareSlice.reducer;
