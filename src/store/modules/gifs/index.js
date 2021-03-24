export default {
  namespaced: true,
  state: {
    allGifs: [],
    foundGifs: [],
  },
  mutations: {
    setAllGifs(state, payload) {
      state.allGifs = payload
    },
    setFoundGifs(state, payload) {
      state.foundGifs = payload
    },
  },
  actions: {
    async listGifs({ commit }, params) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.VUE_APP_API_KEY_GIPHY}${params}`
      )
      const { data } = await response.json()
      commit('setAllGifs', data)
    },
    async searchGifs({ commit }, params) {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.VUE_APP_API_KEY_GIPHY}${params}`
      )
      const { data } = await response.json()
      commit('setFoundGifs', data)
    },
  },
  getters: {
    gifsNames(state) {
      return state.allGifs.map(gif => gif.title)
    },
  },
}
