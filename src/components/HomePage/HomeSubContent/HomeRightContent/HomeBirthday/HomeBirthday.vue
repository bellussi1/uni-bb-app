<template>
  <div class="birthday">
    <a :href="openHumanograma" target="_blank">
      <img class="avatar" :src="funci.avatarSrc" :alt="funci.nome" />
      <div class="info">
        <div class="info-pessoal">
          <div class="name">{{ funci.nome }}</div>
          <div class="date">{{ funci.data }}</div>
        </div>
        <div class="info-trabalho">
          <div class="position">{{ funci.cargo }}</div>
          <div class="unit">{{ funci.dependencia }}</div>
        </div>
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
    openHumanograma() {
      return `https://humanograma.intranet.bb.com.br/${this.funci.matricula}`;
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
.birthday:first-child {
  margin-top: 0;
}

.birthday {
  border-radius: 0.5vw;
  cursor: pointer;
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  background-color: var(--branco-private);
  padding: 2%;
  transition: all 0.25s ease-in-out;
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

.info-trabalho {
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: normal;
}

.name {
  color: var(--azul-corporativo);
  font-size: 0.9vw;
  font-family: "BancoDoBrasil TitulosBold";
  padding: 1%;
}

.date {
  font-size: 0.8vw;
  color: var(--cinza-atemporal);
  padding: 1%;
  font-family: "BancoDoBrasil TextosLight";
}

.position {
  color: var(--cinza-confianca);
  font-size: 0.8vw;
  padding: 1%;
  font-family: "BancoDoBrasil Textos";
}

.unit {
  font-size: 0.8vw;
  color: var(--cinza-confianca);
  padding: 1%;
  font-family: "BancoDoBrasil Textos";
}

.birthday:hover {
  cursor: pointer;
  transform: scale(1.02);
  transition: all 0.25s ease-in-out;
}
</style>