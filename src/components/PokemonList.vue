<script lang="ts" setup>
import { usePokemonStore } from "../stores/pokemon";
import { RouterLink } from "vue-router";
const store = usePokemonStore();

const fetchPokemon = () => {
  store.fetchAll();
};

if (store.fullList.length === 0) {
  fetchPokemon();
}
</script>

<template>
  <section>
    <button @click="fetchPokemon">Fetch new list</button>
    <div class="grid">
      <RouterLink
        v-for="pokemon in store.fullList"
        :key="pokemon?.name"
        :to="`details/${pokemon?.id}`"
      >
        <img :src="pokemon?.sprites?.front_default" />
        <p>{{ pokemon?.name }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

img {
  width: 200px;
}
</style>
