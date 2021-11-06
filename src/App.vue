<script lang="ts">
  import { defineComponent } from 'vue';
  import Body from './components/Body.vue';
  import Footer from './components/Footer.vue';

  export default defineComponent({
    name: "App",
    data() {
      return {
        title: "Tour of Heroes"
      };
    },
  });
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss">
  @import './style/App';
</style>
