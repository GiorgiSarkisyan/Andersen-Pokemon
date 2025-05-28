import { configureStore } from "@reduxjs/toolkit";

import { vi, describe, it, expect, beforeEach } from "vitest";
import { fetchPokemonById } from "../pokemonSlice";
import pokemonReducer from "../pokemonSlice";

const mockPokemon = {
  id: 1,
  name: "bulbasaur",
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  sprites: { front_default: "image.png" },
  height: 7,
  weight: 69,
  stats: [
    { stat: { name: "hp" }, base_stat: 45 },
    { stat: { name: "attack" }, base_stat: 49 },
  ],
};

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPokemon),
    })
  ) as unknown as typeof fetch;
});

describe("fetchPokemonById thunk", () => {
  it("should fetch and return a single Pokémon", async () => {
    const store = configureStore({
      reducer: { pokemon: pokemonReducer },
    });

    const result = await store.dispatch(fetchPokemonById(1) as any);
    const payload = result.payload;

    expect(payload).toEqual({
      id: 1,
      name: "bulbasaur",
      type: "grass, poison",
      src: "image.png",
      height: 7,
      weight: 69,
      stats: [
        { name: "hp", value: 45 },
        { name: "attack", value: 49 },
      ],
    });
  });
});
