// store/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  id: number;
  name: string;
  src: string;
  type: string;
}

const initialState: Pokemon[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Pokemon>) => {
      if (!state.find((fav) => fav.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      return state.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
