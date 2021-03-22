export default {
  setUserData(state, payload) {
    state.userData = payload
  },
  updateUserName(state, payload) {
    state.userData.name = payload
  },
}
