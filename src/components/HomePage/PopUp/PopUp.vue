<template>
  <section class="pop-up-container" :class="{ show: showPopUp, hidden: rated }">
    <h2>Como avalia nosso site?</h2>

    <main class="pop-up-content">
      <transition name="alert">
        <p v-if="alert == true" class="alert">{{ log }}</p>
      </transition>

      <the-star @add="(i) => (rate = i)" />
      <div class="input-container">
        <textarea
          class="input"
          v-model="text"
          name="text"
          id="input"
          cols="30"
          rows="10"
          required
          placeholder="O que você pode sugerir?"
        ></textarea>
      </div>
    </main>
    <div class="btnconfirm">
      <button @click="submit()">Enviar</button>
    </div>
  </section>
</template>

<script>
import TheStar from "./PopUpStars/PopUpStars.vue";

import { ref } from "vue";

const rate = ref(0); // Usa de referencia o valor (Avaliacao) de PopUpStars.vue
export default {
  components: {
    TheStar,
  },
  data() {
    return {
      showPopUp: false,
      text: "", // Texto de sugestao
      log: "", // Log de aviso caso esqueceu de avaliar/sugerir
      rated: false, // Se foi avaliado ou não
      rate: rate, // A nota que foi avaliada
      alert: false,
    };
  },

  methods: {
    // Função chamada no evento de scroll da página para verificar se é necessário mostrar o botão de "Scroll to Top".
    onScroll() {
      // Verifica se o usuário após 75 pixels da página.
      const popUp = document.documentElement.scrollTop >= 75;
      // Atualiza o valor da variável "showPopUp".
      this.showPopUp = popUp;
    },
    submit() {
      if (this.rate == 0) {
        this.alert = true;
        this.log = "Por favor, avalie antes de confirmar.";
      } else if (this.text == "") {
        this.alert = true;
        this.log = "Que tal quer deixar uma sugestão?";
      } else {
        this.rated = true;
        console.log(this.text, this.rate, this.rated);
      }
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
h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
  width: 100%;
  white-space: normal;
  font-size: 0.9vw;
  font-family: "BancoDoBrasil Titulos";
  color: var(--cinza-seguranca);
}
.pop-up-container {
  border-radius: 0.5vw;
  background-color: rgb(246, 250, 251);
  width: 11%;
  margin-top: 1%;
  margin-right: 0.75%;
  right: 0;
  position: fixed;
  display: flex;
  z-index: 3;
  opacity: 0;
  flex-flow: column nowrap;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  box-shadow: 0 5px 15px 2px rgba(255, 255, 255, 0.25);
}

.pop-up-container.show {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.pop-up-container.hidden {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.pop-up-content {
  border-radius: 0.25em;
  padding: 5% 8%;
  background-color: var(--azul-corporativo);
  display: flex;
  flex-flow: column;
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
  width: 100%;
  white-space: normal;
  font-size: 0.75vw;
  font-family: "BancoDoBrasil Titulos";
  color: var(--branco-private);
  transition: all 0.2s ease-in-out;
}
.input-container {
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: auto;
  transition: all 0.2s ease-in-out;
}

.input {
  transition: all 0.2s ease-in-out;
  resize: none;
  font-size: 0.7vw;
  background-color: transparent;
  color: var(--cinza-confianca);
  background-color: rgb(246, 250, 251);
  width: 100%;
  padding: 5%;
  outline: none;
  border-radius: 0.5em;
  transition: all 0.3s ease-in-out;
  font-family: "BancoDoBrasil Titulos";
}

.btnconfirm {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
}

button {
  background-color: var(--azul-acinzentado);
  color: var(--branco-private);
  border-radius: 0.75em;
  font-family: "BancoDoBrasil Titulos";
  font-size: 1vw;
  margin: 5% 0;
  padding: 5% 10%;
  cursor: pointer;
  transition: 0.15s all ease-in-out;
}

button:hover {
  transform: scale(1.03);
  transition: 0.15s all ease-in-out;
  transform-origin: center;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  width: 0.5em;
  background-color: rgb(246, 250, 251);
}

::-webkit-scrollbar-thumb {
  background-color: var(--azul-acinzentado);
  border-radius: 0.25em;
}

.alert-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.alert-enter-active {
  transition: all 0.3s ease-in-out;
}
.alert-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>