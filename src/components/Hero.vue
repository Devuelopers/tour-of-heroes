<script lang="ts">
  import { defineComponent } from 'vue';
  import { Hero } from '../models/Hero';
  import HeroService  from '../service/HeroService';
  import HeroDetail from './HeroDetail.vue';
  
  export default defineComponent({
    name: "Hero",
    created() {
      this.getAllHeroes();
    },
    components: {
      HeroDetail
    },
    methods: {
      async getAllHeroes() {
        this.heroes = await this.heroService.getHeroes();
      },
      changeHero(id: number) {
        this.hero = this.heroes.find(h => h.id === id);
        this.selectedHero = true;
      },
      isHeroSelected(id: number) {

        if (!this.selectedHero) {
          return false;
        }

        if (this.hero === undefined || this.hero.id === null) {
          return false;
        }

        return this.hero.id === id;
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
    <h2>My Heroes</h2>
    <li v-for="row in heroes" :key="row.id" v-on:click="changeHero(row.id)" :class="isHeroSelected(row.id)?' selected':''">
      <span class="badge">{{row.id}}</span> {{row.name}}
    </li>
    <div v-if="selectedHero">
      <HeroDetail :hero="this.hero"/>
    </div>
  </ul>
</template>

<style lang="scss">
  @import '../style/Hero';
</style>