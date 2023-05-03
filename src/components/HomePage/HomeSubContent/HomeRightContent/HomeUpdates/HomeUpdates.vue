<template>
  <div class="atualizacoes">
    <a :href="openAtualizacao" target="_blank">
      <div class="info">
        <div class="titulo">{{ atualizacao.titulo }}</div>
        <div class="data">{{ atualizacao.data }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    atualizacao: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    openAtualizacao() {
      return `#`;
    },
  },
};
</script>


<style scoped>
a {
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.atualizacoes:first-child {
  margin-top: 0;
}

.atualizacoes {
  width: 100%;
  border-radius: 0.5vw;
  cursor: pointer;
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  background-color: var(--azul-corporativo);
  padding: 2%;
  transition: all 0.25s ease-in-out;
}

.info {
  width: 100%;
  font-family: "BancoDoBrasil Textos";
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.data {
  font-size: 0.8vw;
  color: var(--cinza-atemporal);
  padding: 1%;
  font-family: "BancoDoBrasil TitulosLight";
}

.titulo {
  font-family: "BancoDoBrasil Titulos";
  color: var(--amarelo-seratonina);
  font-size: 0.8vw;
  padding: 1%;
}

.atualizacoes:hover {
  cursor: pointer;
  transform: scale(1.02);
  transition: all 0.25s ease-in-out;
}
</style>