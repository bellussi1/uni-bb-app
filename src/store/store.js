import { createStore } from 'vuex'

// Criação do store com um estado
const store = createStore({
  state() {
    return {
      isNavHidden: true, // Estado inicial da navegação escondida
    }
  },
  mutations: {
    // Mutação que atualiza o estado da navegação para esconder ou mostrar
    toggleNav(state) {
      state.isNavHidden = !state.isNavHidden // Alterna o estado da navegação entre true e false
    },
  },
  actions: {
    // Ação que dispara a mutação toggleNav
    toggleNav(context) {
      context.commit('toggleNav') // Chama a mutação toggleNav
    },
  },
  getters: {
    // Getter que retorna o estado atual da navegação
    isNavHidden(state) {
      return state.isNavHidden // Retorna o estado atual da navegação
    },
  },
})

export default store
