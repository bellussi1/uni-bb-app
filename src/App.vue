<template>
  <section>
    <!-- Componente do cabeçalho -->
    <header-container />

    <!-- Componente do conteúdo -->
    <router-view />
    <!-- Componente do rodapé -->
    <footer-container />
  </section>
</template>


<script>
// Importa componentes

import FooterContainer from "./components/Footer/FooterContainer.vue";
import HeaderContainer from "./components/Header/HeaderContainer.vue";

// Import um arquivo CSS para estilização global
import "./assets/global.css";
import "./assets/colors.css";

export default {
  components: {
    FooterContainer,
    HeaderContainer,
  },
};
</script>


