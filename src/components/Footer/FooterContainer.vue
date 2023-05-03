<template>
  <footer class="footer">
    <main class="footer-content">
      <ul v-for="(items, title) in lista" :key="title" class="lista">
        <li class="lista-title">{{ title }}</li>
        <li v-for="item in items" :key="item.nome" class="lista-item">
          <a :href="item.src">{{ item.nome }}</a>
        </li>
      </ul>
    </main>
    <h2>UNIDADE DE NEGÓCIOS INTERNACIONAIS</h2>
    <footer-button />
  </footer>
</template>

<script>
import FooterButton from "./FooterButton.vue";

export default {
  components: {
    FooterButton,
  },
  data() {
    return {
      lista: {
        "Links BB": [
          { nome: "bb.com.br", src: "bb.com.br" },
          { nome: "Intranet BB", src: "#" },
          { nome: "IN", src: "#" },
          { nome: "Portal Jurídico", src: "#" },
        ],
        "Sites VIPAT": [
          { nome: "Portal Atacado", src: "#" },
          { nome: "UPB", src: "#" },
        ],
        "Outras áreas": [
          { nome: "DICRE", src: "#" },
          { nome: "DIFIN", src: "#" },
          { nome: "DIGOV", src: "#" },
          { nome: "DIPES", src: "#" },
          { nome: "DIRAO", src: "#" },
          { nome: "Portal Gecex", src: "#" },
          { nome: "Portal da Redex", src: "#" },
          { nome: "BB Data Science", src: "#" },
        ],
        "Links úteis": [
          { nome: "Bacen", src: "#" },
          { nome: "SECINT", src: "#" },
          { nome: "Apex", src: "#" },
          { nome: "Amcham", src: "#" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.footer {
  z-index: 2;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.15);
  background-color: var(--branco-private);
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
}

.footer h2 {
  margin: 0;
  border-top: 1px solid rgba(209, 209, 209, 0.5);
  font-size: 1vw;
  padding: 1%;
  color: var(--azul-corporativo);
  font-family: "BancoDoBrasil TitulosBold";
  text-align: center;
}

.footer-content {
  height: 100%;
  padding: 2% 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding-left: 12.5%;
}

.lista {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
}

.lista-title {
  list-style: none;
  color: var(--azul-corporativo);
  font-size: 1.1vw;
  font-weight: 500;
  font-family: "BancoDoBrasil Titulos";
  margin: 0;
  padding-bottom: 3.5%;
}

.lista-item {
  list-style: none;
  padding-bottom: 2%;
  padding-left: 0;
}

.lista-item a {
  font-family: "BancoDoBrasil TextosLight";
  color: var(--azul-corporativo);
  font-size: 0.8vw;
  text-decoration: none;
}
</style>
