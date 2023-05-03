<template>
  <header class="header">
    <header-main />
    <header-sub />
    <header-menu />
  </header>
</template>

<script>
// Importa componentes

import HeaderMain from "./HeaderMain/HeaderMain.vue";
import HeaderSub from "./HeaderSub/HeaderSub.vue";
import HeaderMenu from "./HeaderMenu/HeaderMenu.vue";

export default {
  components: {
    HeaderMain,
    HeaderSub,
    HeaderMenu,
  },
};
</script>

<style scoped>
.header {
  flex-flow: column;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 1;
}
</style>
