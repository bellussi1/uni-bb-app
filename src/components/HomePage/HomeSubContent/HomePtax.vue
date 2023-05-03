<template>
  <div class="ptax-container">
    <h1>Ptax: USD/BRL</h1>
    <img :src="graphTeste" class="ptax-content" alt="imagem de teste" />
  </div>
</template>

<script>
import graphTeste from "/src/assets/icons/GraficoExemplo.png";

export default {
  data() {
    return {
      graphTeste: graphTeste,
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  color: var(--branco-private);
  width: 100%;
  font-family: "BancoDoBrasil Titulos";
  font-size: 1.2vw;
  margin: 0;
  margin-bottom: 1%;
  position: relative;
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
}

.ptax-container {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  transition: all 0.2s ease-in-out;
  width: 65%;
  height: 100%;
  padding: 0.6% 1%;
  border-radius: 0.5vw;
  background-color: var(--azul-corporativo);
}

.ptax-content {
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.25);
  object-fit: contain;
  border-radius: 0.5rem;
  width: 100%;
  background-color: white;
}
</style>
