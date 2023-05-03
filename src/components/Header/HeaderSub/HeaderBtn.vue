<template>
  <main class="btn-container">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      type="button"
      class="btn"
      @click="button.method()"
    >
      {{ button.text }}
    </button>
  </main>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      buttons: [
        {
          text: "Menu",
          method: () => {
            this.toggleNav();
          },
        },
        {
          text: "Fale com Comex",
          method: () => {
            /* Implementar lógica do botão */
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions(["toggleNav"]),
  },
};
</script>

<style scoped>
.btn-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  font-family: "BancoDoBrasil Titulos";
  width: 100%;
  height: 100%;
  font-size: 0.95vw;
  padding: 0 13% 0 8%;
  text-align: center;
  white-space: nowrap;
  border: none;
  background-color: transparent;
  color: var(--azul-corporativo);
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  background-color: var(--azul-corporativo);
  color: var(--branco-private);
}

.btn:focus {
  outline: none;
}
</style>
