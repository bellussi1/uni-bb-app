<template>
  <div class="content" :class="contentClass">
    <!-- Componente do Conteudo Principal -->
    <home-main-content />
    <!-- Componente do Conteudo Secundario -->
    <home-sub-content />
    <!-- Componente do Pop-Up -->
    <pop-up />
    <div class="square-background"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PopUp from "./PopUp/PopUp.vue";
import HomeMainContent from "./HomeMainContent/HomeMainContent.vue";
import HomeSubContent from "./HomeSubContent/HomeSubContent.vue";

export default {
  // Mapeando o getter "isNavHidden" para ser utilizado neste componente
  computed: {
    ...mapGetters(["isNavHidden"]),
    // Criando novo computed property para definir classe na div baseado no valor de "isNavHidden"
    contentClass() {
      return {
        "content--with-nav": !this.isNavHidden, // Adiciona classe na div
      };
    },
  },
  // Define os componentes filhos
  components: {
    PopUp,
    HomeMainContent,
    HomeSubContent,
  },
};
</script>

<style scoped>
.content {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding: 0 12.5% 10% 12.5%;
  right: 0;
  width: 100%;
  height: 100%;
  transform-origin: top center;
  transition: all 0.5s ease-in-out;
}

.content--with-nav {
  margin-top: 2%;
  transition: all 0.5s ease-in-out;
}

.square-background {
  left: 0;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.15);
  top: 39%;
  z-index: -1;
  display: flex;
  position: absolute;
  width: 100%;
  height: 60%;
  background-color: var(--azul-corporativo);
}
</style>
