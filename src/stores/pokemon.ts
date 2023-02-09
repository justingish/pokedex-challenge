import { ref } from "vue";
import { defineStore } from "pinia";
import type { NameAndURL, PokemonDetails } from "../types";

const baseUrl = "https://pokeapi.co/api/v2";
const TOTAL_POKEMON = 1008;
export const usePokemonStore = defineStore("pokemon", () => {
  const fullList = ref<PokemonDetails[]>([]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // I don't want to spam the API, so I'm only grabbing a random selection of pokemon each time
  async function fetchAll() {
    fullList.value = [];
    const limit = 16;
    const offset = getRandomInt(TOTAL_POKEMON - limit);
    const response = await fetch(
      `${baseUrl}/pokemon-species?limit=${limit}&offset=${offset}`
    );
    const list: NameAndURL[] = (await response.json()).results;

    const promises: Promise<PokemonDetails | null>[] = [];
    list.map((pokemon: NameAndURL): void => {
      const url = `${baseUrl}/pokemon/${pokemon.name}`;
      const pokemonPromise = fetch(url)
        .then((res: Response): Promise<PokemonDetails> => res.json())
        .catch((e: Error): null => {
          console.log(e);
          return null;
        });
      if (pokemonPromise) promises.push(pokemonPromise);
    });
    const resolvedPromises = await Promise.all(promises);
    const pokemon: PokemonDetails[] = [];
    resolvedPromises.forEach((poke) => {
      if (poke) pokemon.push(poke);
    });

    fullList.value = pokemon;
  }

  return { fullList, fetchAll };
});
