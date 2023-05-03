<template>
  <div
    class="nav-container"
    :class="navClass"
    :style="{ height: maxHeight + 'vw' }"
  >
    <div class="nav">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.src">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // Mapeando o getter "isNavHidden" para ser utilizado neste componente
  data() {
    return {
      menuItems: [
        { name: "HOME", src: "/home" },
        { name: "Crédito e Captação", src: "/" },
        { name: "Câmbio", src: "/" },
        { name: "Serviços", src: "/" },
        { name: "Negócios e Gestão", src: "/" },
        { name: "Rede Brasil", src: "/" },
        { name: "Rede Exterior", src: "/" },
        { name: "Comunicação e Marketing", src: "/" },
        { name: "Relatórios Gerenciais", src: "/" },
        { name: "Pessoas", src: "/" },
      ],
      maxHeight: 2,
    };
  },
  computed: {
    ...mapGetters(["isNavHidden"]),
    // Criando novo computed property para definir classe na div baseado no valor de "isNavHidden"
    navClass() {
      return {
        "nav-container--hidden": this.isNavHidden, // Adiciona classe na div
      };
    },
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
/* Define a navegação vertical */

.nav-container {
  display: flex;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--azul-corporativo);
  transition: all 0.5s ease-in-out;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.15);
  transform: translateY(0);
}

.nav-container--hidden {
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
}

.nav {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.nav li {
  padding: 0 1.15% 0 1.15%;
  height: 100%;
  display: flex;
  transition: all 0.2s ease-in-out;
}

.nav li:first-child {
  padding: 0 1.45% 0 0.85%;
}

.nav a {
  padding: 0 50% 0 50%;
  width: 100%;
  font-size: 0.75vw;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  font-family: "BancoDoBrasil Titulos";
  text-decoration: none;
  color: var(--branco-private);
}

li:hover {
  background-color: var(--branco-private);
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: var(--azul-corporativo);
  transition: all 0.2s ease-in-out;
}
</style>
