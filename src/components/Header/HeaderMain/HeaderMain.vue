<template>
  <main class="main-header" :style="{ height: maxHeight + 'vw' }">
    <img :src="iconLogo" alt="" class="logo" />
    <img :src="iconUser" alt="" class="user-icon" />
  </main>
</template>

<script>
// Importa o logotipo
import logo from "/src/assets/logo.png";

export default {
  data() {
    return {
      maxHeight: 3.5,
      iconUser: "https://humanograma.intranet.bb.com.br/avatar/T1091543",
      iconLogo: logo,
    };
  },
  methods: {
    // Função para manipular o evento de scroll na página
    handleScroll() {
      const scrollTop = window.scrollY; // Pega o valor do scroll da página
      // Verifica se o valor do scroll é igual a 0
      if (scrollTop === 0) {
        this.maxHeight = 3.5; // Define a altura máxima do componente
      } else {
        // Caso contrário
        this.maxHeight = 3.25; // Define a altura máxima do componente
      }
    },
  },
  mounted() {
    // Adiciona um listener de scroll quando o componente é montado
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.main-header {
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  color: var(--branco-private);
  background-color: var(--azul-corporativo);
  transition: all 0.3s ease-in-out;
}

.logo {
  position: relative;
  width: auto;
  height: 75%;
  object-fit: contain;
}

.user-icon {
  position: relative;
  margin-right: 1.5%;
  object-fit: cover;
  height: 90%;
  border-radius: 100%;
}
</style>