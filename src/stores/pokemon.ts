import { ref } from "vue";
import { defineStore } from "pinia";

const baseUrl = "https://pokeapi.co/api/v2";
const TOTAL_POKEMON = 1008;
export const usePokemonStore = defineStore("pokemon", () => {
  const fullList = ref([]);

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
    const list = (await response.json()).results;

    const promises = [];
    list.map((pokemon) => {
      const url = `${baseUrl}/pokemon/${pokemon.name}`;
      promises.push(
        fetch(url)
          .then((res) => res.json())
          .catch((e) => console.log(e))
      );
    });

    fullList.value = await Promise.all(promises);
  }

  return { fullList, fetchAll };
});
