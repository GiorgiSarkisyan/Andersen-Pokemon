import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import pokemonReducer from "./pokemonSlice";
import compareReducer from "./compareSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { pokemonApi } from "./pokemonApi";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const rootReducer = combineReducers({
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  pokemon: pokemonReducer,
  compare: compareReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
