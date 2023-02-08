<script setup>
import { usePokemonStore } from "../stores/pokemon";
import { RouterLink, useRoute, useRouter } from "vue-router";
const store = usePokemonStore();
const router = useRouter();
const route = useRoute();
const id = Number(route.params.id);
const pokemon = store.fullList.find((item) => item.id === id);

// If we can't find the pokemon, just route back to the list
if (typeof pokemon === "undefined") {
  router.push("/");
}
</script>

<template>
  <section>
    <RouterLink to="/">Back to List</RouterLink>
    <div v-if="pokemon">
      <h1>Details</h1>
      <img :src="pokemon?.sprites.front_default" />
      <p>{{ pokemon?.name }}</p>
      <!-- 
        TODO: What other things could I show here? 
        I really wish there was a TS interface to help me 
      -->
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

img {
  width: 400px;
}

p {
  font-size: 2rem;
}
</style>
