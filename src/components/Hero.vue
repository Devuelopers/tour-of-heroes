<script lang="ts">
  import { defineComponent } from 'vue';
  import { Hero } from '../models/Hero';
  import HeroService  from '../service/HeroService';
  
  export default defineComponent({
    name: "Hero",
    created() {
      this.getAllHeroes();
    },
    methods: {
      async getAllHeroes() {
        this.heros = await this.heroService.getHeroes();
      }
    },
    data() {
      return {
        heroService: new HeroService(),
        heros: Array<Hero>()
      };
    },
  });
</script>

<template>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li v-for="hero in heroes" :key="hero.id">
      {{ hero.name }}
    </li>
  </ul>
</template>

<style lang="scss">
  @import '../style/Hero';
</style>