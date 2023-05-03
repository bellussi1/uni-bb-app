<template>
  <div class="update-container">
    <h1>Últimas atualizações</h1>
    <div class="update-scroll">
      <home-update
        v-for="(atualizacao, index) in listaAtualizacao"
        :key="index"
        :atualizacao="atualizacao"
      />
    </div>
  </div>
</template>
  
<script>
import HomeUpdate from "./HomeUpdates.vue";

export default {
  components: {
    HomeUpdate,
  },
  data() {
    return {
      // Valores temporarios, implementar uma query que verifica os funcionarios que fazem aniversario no dia/semana
      // aplicar a propriedades e alterar o icon, data, cargo, unidade, nome e chave
      listaAtualizacao: [
        {
          titulo: "Lorem ipsum dolor sit amet. ",
          data: "00/00",
        },
        {
          titulo: "Lorem ipsum dolor sit amet. ",
          data: "00/00",
        },
        {
          titulo: "Lorem ipsum dolor sit amet. ",
          data: "00/00",
        },
        {
          titulo: "Lorem ipsum dolor sit amet. ",
          data: "00/00",
        },
        {
          titulo: "Lorem ipsum dolor sit amet. ",
          data: "00/00",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1vw;
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
  padding: 1%;
  margin: 0;
  text-align: center;
  color: var(--branco-private);
  font-family: "BancoDoBrasil Titulos";
}

.update-container {
  margin-top: 5%;
  border-radius: 0.5vw;
  padding: 2.5%;
  background-color: var(--verde-escuro);
  display: flex;
  flex-flow: column nowrap;
  height: 14.8%;
  width: 100%;
}

.update-scroll {
  width: 100%;
  max-height: 95px;
  margin: 2% 0;
  padding: 0 2.5%;
  display: flex;
  flex-flow: column nowrap;
  overflow-y: auto;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  border-radius: 0.5vw;
}

::-webkit-scrollbar {
  width: 0.4em;
  background-color: var(--verde-escuro);
}

::-webkit-scrollbar-thumb {
  background-color: var(--cinza-confianca);
  border-radius: 1vw;
}
</style>