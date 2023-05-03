<template>
  <button
    class="scroll-to-top"
    :class="{ show: showScrollToTop }"
    @click="scrollToTop"
    title="Botão para topo da página"
    type="button"
  >
    <font-awesome-icon :icon="['fas', 'chevron-up']" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      // Variável usada para controlar a exibição do botão de "Scroll to Top".
      showScrollToTop: false,
    };
  },
  methods: {
    // Função para realizar o scroll para o topo da página com animação.
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    // Função chamada no evento de scroll da página para verificar se é necessário mostrar o botão de "Scroll to Top".
    onScroll() {
      // Verifica se o usuário está faltando 50 pixels para o final da página.
      const bottomOfPage =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 150;
      // Atualiza o valor da variável "showScrollToTop".
      this.showScrollToTop = bottomOfPage;
    },
  },
  // Adiciona o evento de scroll ao objeto window ao montar o componente.
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  // Remove o evento de scroll ao desmontar o componente.
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.scroll-to-top {
  background-color: var(--azul-corporativo);
  color: var(--branco-private);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 1%;
  bottom: 7.5%;
  width: 2.5%;
  height: 3.5%;
  font-size: 1.2vw;
  cursor: pointer;
  opacity: 0;
  border: none;
  border-radius: 0.25vw;
  transition: opacity 0.2s ease-in-out;
}

.scroll-to-top.show {
  z-index: 2;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.scroll-to-top.show:hover {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
}
</style>
