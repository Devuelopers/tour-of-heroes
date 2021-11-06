<script lang="ts">
  import { defineComponent } from 'vue';
  import Hero from './components/Hero.vue';

  export default defineComponent({
    name: "App",
    components: {
      Hero
    },
    data() {
      return {
        title: "Tour of Heroes"
      };
    },
  });
</script>

<template>
  <h1>{{ title }}</h1>
  <Hero />
</template>

<style lang="scss">
  @import './style/App';
</style>
