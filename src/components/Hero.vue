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
        this.heroes = await this.heroService.getHeroes();
      },
      changeHero(id: number) {
        this.hero = this.heroes.find(h => h.id === id);
        this.selectedHero = true;
      }
    },
    data() {
      return {
        heroService: new HeroService(),
        heroes: Array<Hero>(),
        hero : new Hero(11, "Dr Nice") as Hero | undefined, 
        selectedHero: false
      };
    },
  });
</script>

<template>
  <ul class="heroes">
    <div v-if="selectedHero">
      <h2>{{ $filters.uppercase(hero.name) }} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div><span>name: </span>{{hero.name}}</div>
      <div>
        <label for="name">Hero name: </label>
        <input id="name" v-model="hero.name" placeholder="name">
      </div>
    </div>
    <h2>My Heroes</h2>
    <li v-for="row in heroes" :key="row.id" v-on:click="changeHero(row.id)">
      <span class="badge">{{row.id}}</span> {{row.name}}
    </li>
  </ul>
</template>

<style lang="scss">
  @import '../style/Hero';
</style>