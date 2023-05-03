<template>
  <header class="sub-header" :style="{ height: maxHeight + 'vw' }">
    <header-button />
    <header-search-input />
  </header>
</template>

<script>
import HeaderSearchInput from "./HeaderSearchInput.vue";
import HeaderButton from "./HeaderBtn.vue";

export default {
  components: {
    HeaderButton,
    HeaderSearchInput,
  },
  data() {
    return {
      maxHeight: 2,
    };
  },
  methods: {
    // Função para manipular o evento de scroll na página
    handleScroll() {
      const scrollTop = window.scrollY; // Pega o valor do scroll da página
      // Verifica se o valor do scroll é igual a 0
      if (scrollTop === 0) {
        this.maxHeight = 2; // Define a altura máxima do componente
      } else {
        // Caso contrário
        this.maxHeight = 1.5; // Define a altura máxima do componente
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
.sub-header {
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
  height: 100%;
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  color: var(--azul-corporativo);
  background-color: var(--branco-private);
  transition: all 0.3s ease-in-out;
}
</style>
