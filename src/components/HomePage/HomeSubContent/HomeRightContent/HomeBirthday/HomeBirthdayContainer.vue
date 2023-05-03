<template>
  <div class="birthday-container">
    <h1>Aniversariantes</h1>
    <div class="birthday-scroll">
      <home-birthday
        v-for="funci in listaFunci"
        :key="funci.matricula"
        :funci="funci"
      />
    </div>
  </div>
</template>
  
<script>
import HomeBirthday from "./HomeBirthday.vue";

export default {
  components: {
    HomeBirthday,
  },
  data() {
    return {
      // Valores temporarios, implementar uma query que verifica os funcionarios que fazem aniversario no dia/semana
      // aplicar a propriedades e alterar o icon, data, cargo, unidade, nome e chave
      listaFunci: [
        {
          matricula: "T10915432",
          nome: "Enzo Bellussi",
          data: "08/03",
          cargo: "Estagiário",
          dependencia: "Unidade de Negócios Internacionais",
          avatarSrc: "https://humanograma.intranet.bb.com.br/avatar/T1091543",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          cargo: "Gerente de Soluções",
          dependencia: "Comex Atacado",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          cargo: "Gerente de Soluções",
          dependencia: "Comex Atacado",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          cargo: "Gerente de Soluções",
          dependencia: "Comex Atacado",
          avatarSrc: "https://via.placeholder.com/150",
        },
        {
          matricula: "F0000000",
          nome: "Lorem ipsum",
          data: "00/00",
          cargo: "Gerente de Soluções",
          dependencia: "Comex Atacado",
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
  border-bottom: 0.15vw solid var(--amarelo-seratonina);
  margin: 0;
  margin-bottom: 1%;
  text-align: center;
  color: var(--branco-private);
  font-family: "BancoDoBrasil Titulos";
}

.birthday-container {
  border-radius: 0.5vw;
  padding: 2.5%;
  background-color: var(--azul-corporativo);
  display: flex;
  flex-flow: column nowrap;
  height: 18.5%;
  width: 100%;
}

.birthday-scroll {
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
  background-color: var(--azul-corporativo);
}

::-webkit-scrollbar-thumb {
  background-color: var(--branco-private);
  border-radius: 1vw;
}
</style>