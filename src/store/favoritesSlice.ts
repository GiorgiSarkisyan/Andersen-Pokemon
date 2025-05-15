import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  type: string;
  src: string;
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
