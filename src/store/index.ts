import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import pokemonReducer from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
