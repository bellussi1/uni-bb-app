<template>
  <section class="carousel-container-text">
    <h1>UNI News</h1>
    <div
      class="carousel-container"
      :style="{ '--selected-image': 'url(' + imagemSelecionada + ')' }"
    >
      <img class="carousel" :src="imagemSelecionada" alt="Imagem da nóticia" />
      <div class="carousel-preview">
        <img
          v-for="(imagem, index) in imagens"
          :key="index"
          class="carousel-preview-image"
          @click="selectImage(imagem)"
          :src="imagem"
          alt="Pré-visualização"
        />
      </div>
      <div class="bar-timer animate" ref="barTimer"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imagemSelecionada: "",
      imagens: [
        "https://ambrelec.com/wp-content/uploads/2017/05/distribution-1250x400.jpg",
        "https://www.norfolkkitchenandbath.com/wp-content/uploads/2022/01/project-financing-header-1250x400-1.jpg",
        "https://cc-interactive.com/wp-content/uploads/2016/11/shutterstock_388844110-1-1250x400.jpg",
        "https://endingpovertytogether.org/wp-content/uploads/2020/09/hunters-race-MYbhN8KaaEc-unsplash-1250x400.jpg",
        "http://factta.com/wp-content/uploads/2015/08/Business-Meeting-V2-1250x400.jpg",
      ],
      timerId: null,
    };
  },
  // Define a ação a ser executada quando o componente é criado
  created() {
    // Seleciona a primeira imagem do array imagens
    this.imagemSelecionada = this.imagens[0];
    // Define o ID do temporizador que altera as imagens a cada 5 segundos
    this.timerId = setInterval(this.changeImage, 5000);
  },
  // Define os métodos que serão usados no componente
  methods: {
    // Define a ação a ser executada quando uma imagem é selecionada
    selectImage(imagem) {
      // Seleciona a imagem clicada
      this.imagemSelecionada = imagem;
      // Para o temporizador atual
      clearInterval(this.timerId);
      // Define um novo temporizador que inicia a mudança de imagens novamente
      this.timerId = setInterval(this.changeImage, 5000);
      // Remove classe 'animate' e adiciona 'animate' para resetar animação
      this.resetTimer();
    },
    // Define a ação a ser executada quando a imagem atual é alterada
    changeImage() {
      // Seleciona o índice da imagem atual no array de imagens
      const currentIndex = this.imagens.indexOf(this.imagemSelecionada);
      // Seleciona o índice da próxima imagem a ser exibida
      const nextIndex =
        currentIndex === this.imagens.length - 1 ? 0 : currentIndex + 1;
      // Seleciona a próxima imagem a ser exibida
      this.imagemSelecionada = this.imagens[nextIndex];
      // Remove classe 'animate' e adiciona 'animate' para resetar animação
      this.resetTimer();
    },
    // Define a ação a ser executada para reiniciar a animação da barra de tempo
    resetTimer() {
      // Seleciona o elemento da barra de tempo
      const barTimer = this.$refs.barTimer;
      if (barTimer) {
        // Remove a classe de animação da barra de tempo
        barTimer.classList.remove("animate");
        // Força uma redefinição do layout do elemento da barra de tempo
        void barTimer.offsetWidth;
        // Adiciona novamente a classe de animação à barra de tempo
        barTimer.classList.add("animate");
      }
    },
  },
};
</script>

<style scoped>
.carousel-container-text {
  display: flex;
  flex-flow: column wrap;
}

h1 {
  margin-bottom: 1%;
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
  color: var(--azul-corporativo);
  position: relative;
  font-size: 1.2vw;
  font-weight: 500;
  width: 8%;
  font-family: "BancoDoBrasil Titulos";
}

.carousel-container {
  --selected-image: url("");
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  transition: all 0.2s ease-in-out;
}

.carousel {
  object-fit: cover;
  max-height: 400px;
  height: 100%;
  max-width: 1250px;
  width: 85%;
  border-radius: 1vw;
  margin-right: 1%;
  transition: all 0.2s ease-in-out;
}

.carousel-preview {
  margin-left: 1%;
  width: 15%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
}

.carousel-preview-image {
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  border-radius: 0.5vw;
  object-fit: cover;
  width: 100%;
}

.carousel-preview-image:hover {
  margin-bottom: 5%;
  margin-top: 5%;
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}

.carousel-preview-image:active {
  transform: scale(1.05);
  transition: all 0.1s ease-in-out;
}

/* BARRA DE TIMER ANIMAÇÃO */

.bar-timer {
  position: absolute;
  bottom: -3%;
  left: 0;
  width: 85%;
  height: 0.2vw;
  background-color: var(--cinza-atemporal);
}

.bar-timer:after {
  content: "";
  position: absolute;
  width: 0%;
  height: 0.2vw;

  background-color: var(--amarelo-seratonina);
  animation: none;
}

.bar-timer.animate:after {
  animation: carousel-timer 5s linear infinite;
}

@keyframes carousel-timer {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

/* BLUR FUNDO CARROSSEL */
.carousel-container::after {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  background-image: var(--selected-image);
  filter: blur(100px);
  width: 120%;
  height: 150%;
  opacity: 0.45;
  z-index: -1;
  pointer-events: none;
  transform: translate(-43%, -24%);
  transition: all 0.3s ease-in-out;
}
</style>
