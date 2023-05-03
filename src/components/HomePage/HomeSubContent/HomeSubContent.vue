<template>
  <section class="sub-container">
    <home-ptax />
    <home-right-content />
  </section>
</template>

<script>
import HomePtax from "./HomePtax.vue";
import HomeRightContent from "./HomeRightContent/HomeRightContent.vue";

export default {
  components: {
    HomePtax,
    HomeRightContent,
  },
};
</script>

<style scoped>
.sub-container {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  width: 100%;
}
</style>