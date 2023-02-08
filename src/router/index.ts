import { createRouter, createWebHistory } from "vue-router";
import PokemonList from "../components/PokemonList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "list",
      component: PokemonList,
    },
    {
      path: "/details/:id",
      name: "details",
      component: PokemonDetails,
    },
  ],
});

export default router;
