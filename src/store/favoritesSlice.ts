import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export interface FavoritesState {
  favorites: Pokemon[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Pokemon>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
