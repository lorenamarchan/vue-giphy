export default {
  login({ commit }, { name, email }) {
    const payload = { name, email, isLogged: true }
    commit('setUserData', payload)
  },
}
