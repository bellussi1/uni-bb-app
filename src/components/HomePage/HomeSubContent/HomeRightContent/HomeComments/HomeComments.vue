<template>
  <div class="comments">
    <a :href="openComentario" target="_blank">
      <img class="avatar" :src="funci.avatarSrc" :alt="funci.nome" />
      <div class="info">
        <div class="info-pessoal">
          <div class="nome">{{ funci.nome }}</div>
          <div class="data">{{ funci.data }}</div>
        </div>
        <div class="comment">{{ funci.comentario }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    funci: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    openComentario() {
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

.comments {
  border-radius: 0.5vw;
  cursor: pointer;
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  background-color: var(--branco-private);
  padding: 2%;
  transition: all 0.25s ease-in-out;
}
.comments:first-child {
  margin-top: 0;
}

.avatar {
  margin-left: 1%;
  width: 20%;
  height: 20%;
  border-radius: 100%;
}

.info {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  margin-left: 5%;
}

.info-pessoal {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  white-space: normal;
  justify-content: space-between;
}

.nome {
  color: var(--azul-corporativo);
  font-family: "BancoDoBrasil TitulosBold";
  font-size: 0.9vw;
  padding: 1%;
}

.data {
  font-size: 0.8vw;
  color: var(--cinza-atemporal);
  padding: 1%;
  font-family: "BancoDoBrasil TextosLight";
}

.comment {
  color: var(--azul-corporativo);
  font-size: 0.8vw;
  padding: 1%;
  font-family: "BancoDoBrasil Textos";
}

.comments:hover {
  cursor: pointer;
  transform: scale(1.02);
  transition: all 0.25s ease-in-out;
}
</style>