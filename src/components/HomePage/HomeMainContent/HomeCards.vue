<template>
  <section class="card-container-text">
    <h1>UNI Cards</h1>
    <div class="card-container">
      <a
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :href="card.src"
        target="_blank"
      >
        <div class="content">
          <img class="card-image" :src="card.imagem" :alt="card.titulo" />
          <p class="titulo">{{ card.titulo }}</p>
        </div>
        <img
          class="backgroundground-img"
          :src="card.imagemFundo"
          :alt="card.titulo"
        />
      </a>
    </div>
  </section>
</template>

<script>
import dashboard from "/src/assets/icons/Dashboard.png";
import dashboardSimplificado from "/src/assets/icons/Dashboard_simplificado.png";
import extratoCliente from "/src/assets/icons/ExtratoCliente.png";
import extratoClienteSimplificado from "/src/assets/icons/ExtratoCliente_simplificado.png";
import gerenteInternacional from "/src/assets/icons/GerenteInternacional.png";
import gerenteInternacionalSimplificado from "/src/assets/icons/GerenteInternacional_simplificado.png";

export default {
  data() {
    return {
      cards: [
        {
          titulo: "Dashboard",
          imagem: dashboard,
          imagemFundo: dashboardSimplificado,
          src: "https://www.example.com/card1",
        },
        {
          titulo: "Extrato do Cliente Comex",
          imagemFundo: extratoClienteSimplificado,
          imagem: extratoCliente,
          src: "https://www.example.com/card2",
        },
        {
          titulo: "Localize o seu Gerente Internacional",
          imagemFundo: gerenteInternacionalSimplificado,
          imagem: gerenteInternacional,
          src: "https://www.example.com/card3",
        },
        {
          titulo: "CAM 57",
          imagemFundo: "https://via.placeholder.com/200x200/e0e0e0/ffffff",
          imagem: "https://via.placeholder.com/200x200/dbdbdb/ffffff",
          src: "https://www.example.com/card1",
        },
        {
          titulo: "Acompanhamento REN",
          imagemFundo: "https://via.placeholder.com/200x200/e0e0e0/ffffff",
          imagem: "https://via.placeholder.com/200x200/dbdbdb/ffffff",
          src: "https://www.example.com/card2",
        },
        {
          titulo: "Cliente 360º",
          imagemFundo: "https://via.placeholder.com/200x200/e0e0e0/ffffff",
          imagem: "https://via.placeholder.com/200x200/dbdbdb/ffffff",
          src: "https://www.example.com/card3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container-text {
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
}

h1 {
  margin-bottom: 1%;
  width: 8%;
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
  color: var(--azul-corporativo);
  position: relative;
  font-size: 1.2vw;
  font-weight: 500;
  font-family: "BancoDoBrasil Titulos";
}

.card-container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.card {
  position: relative;
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin-right: 1%;
  margin-left: 1%;
  background-color: var(--offwhite-autenticidade);
  border-radius: 1vw;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.25);
}

.backgroundground-img {
  margin-top: -25%;
  margin-left: -20%;
  z-index: 0;
  object-fit: cover;
  position: absolute;
  opacity: 0.1;
  width: 200%;
}

.content {
  background-color: transparent;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 1%;
}

.card-image {
  margin-top: -30%;
  margin-left: -30%;

  height: 100%;
  width: 100%;
  object-fit: cover;
}

.titulo {
  white-space: normal;
  background-color: transparent;
  font-size: 0.85vw;
  font-family: "BancoDoBrasil TitulosBold";
  color: var(--azul-corporativo);
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 75%;
}

.card:hover {
  margin-right: 1.75%;
  margin-left: 1.75%;
  cursor: pointer;
  transform: scale(1.05);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
}

.card:first-child:hover {
  margin-right: 1.75%;
  transform-origin: center;
  cursor: pointer;
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.card:last-child:hover {
  margin-left: 1.75%;
  transform-origin: center;
  cursor: pointer;
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
