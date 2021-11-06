<script lang="ts">
  import { defineComponent } from 'vue';
  import { Hero } from '../models/Hero';
  import HeroService  from '../service/HeroService';
  
  export default defineComponent({
    name: "Hero",
    mounted() {
      this.heroService.getHeroes().then((data: Hero) => this.heros.push(data));
    },
    data() {
      return {
        heroService: new HeroService(),
        heros: Array<Hero>(),
        hero: new Hero(1, 'Windstorm')
      };
    },
  });
</script>

<template>
  <h2>{{ $filters.uppercase(hero.name) }} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div><span>name: </span>{{hero.name}}</div>
  <div>
    <label for="name">Hero name: </label>
    <input id="name" v-model="hero.name" placeholder="name">
  </div>
</template>

<style lang="scss">
  @import '../style/Hero';
</style>