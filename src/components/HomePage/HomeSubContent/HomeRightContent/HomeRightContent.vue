<template>
  <div class="right-container">
    <home-birthday-container />
    <home-comments-container />
    <home-updates-container />
  </div>
</template>

<script>
import HomeBirthdayContainer from "./HomeBirthday/HomeBirthdayContainer.vue";
import HomeCommentsContainer from "./HomeComments/HomeCommentsContainer.vue";
import HomeUpdatesContainer from "./HomeUpdates/HomeUpdatesContainer.vue";

export default {
  components: {
    HomeBirthdayContainer,
    HomeCommentsContainer,
    HomeUpdatesContainer,
  },
};
</script>

<style scoped>
.right-container {
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>