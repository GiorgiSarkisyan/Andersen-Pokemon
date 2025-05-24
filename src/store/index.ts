import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import pokemonReducer from "./pokemonSlice";
import compareReducer from "./compareSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    pokemon: pokemonReducer,
    compare: compareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
