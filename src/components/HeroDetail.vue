<script lang="ts">
    import { defineComponent } from 'vue';
    import { Hero } from '../models/Hero';

    export default defineComponent({
        name: "HeroDetail",
        props: {
            hero: {
                type: Object as () => Hero,
                required: true
            }
        }
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
  @import '../style/HeroDetail';
</style>