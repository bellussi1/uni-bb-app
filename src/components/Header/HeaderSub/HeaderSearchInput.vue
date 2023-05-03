<template>
  <main class="input-container">
    <input
      class="input"
      name="text"
      placeholder="O que você precisa?"
      type="search"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.input-container {
  margin-left: auto;
  margin-right: 3%;
  display: flex;
  width: 20%;
  transition: all 0.3s ease-in-out;
}

.input {
  width: 100%;
  font-size: 0.7vw;
  background-color: transparent;
  color: var(--grafite-private);
  padding-top: 2%;
  margin-bottom: 1%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--cinza-atemporal);
  transition: all 0.3s ease-in-out;
  font-family: "BancoDoBrasil Titulos";
}

input:focus {
  transform: scale(1.1);
  border-radius: 0.125rem;
  transition: all 0.2s ease-in-out;
}
</style>
