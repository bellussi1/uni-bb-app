<template>
  <section class="main-container">
    <home-carousel />
    <home-cards />
  </section>
</template>

<script>
import HomeCards from "./HomeCards.vue";
import HomeCarousel from "./HomeCarousel.vue";

export default {
  components: {
    HomeCards,
    HomeCarousel,
  },
};
</script>

<style scoped>
.main-container {
  margin-bottom: 5%;
  display: flex;
  flex-flow: column;
  width: 100%;
  transition: all 0.2s ease-in-out;
}
</style>