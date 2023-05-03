<template>
  <div class="comments-container">
    <h1>Comentários</h1>
    <div class="comments-scroll">
      <home-comments
        v-for="funci in listaFunci"
        :key="funci.matricula"
        :funci="funci"
      />
    </div>
  </div>
</template>
  
<script>
import HomeComments from "./HomeComments.vue";

export default {
  components: {
    HomeComments,
  },
  data() {
    return {
      // Valores temporarios, implementar uma query que verifica os funcionarios que fazem aniversario no dia/semana
      // aplicar a propriedades e alterar o icon, data, cargo, unidade, nome e chave
      listaFunci: [
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          comentario:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          comentario:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          comentario:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          comentario:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          comentario:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          avatarSrc: "https://via.placeholder.com/150",
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
  border-bottom: 0.2vw solid var(--azul-corporativo);
  padding: 1%;
  margin: 0;
  text-align: center;
  color: var(--branco-private);
  font-family: "BancoDoBrasil Titulos";
}

.comments-container {
  margin-top: 5%;
  border-radius: 0.5vw;
  padding: 2.5%;
  background-color: var(--roxo-claro);
  display: flex;
  flex-flow: column nowrap;
  height: 18%;
  width: 100%;
}
.comments-scroll {
  width: 100%;
  max-height: 185px;
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
  background-color: var(--roxo-claro);
}

::-webkit-scrollbar-thumb {
  background-color: var(--branco-private);
  border-radius: 1vw;
}
</style>