<template>
  <section>
    <div class="auth-links">
      <router-link to="/auth/login">Iniciar Sesión</router-link>
      <router-link to="/auth/register">Registrarse</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'Auth',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.auth-links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: grey;
    font-weight: 600;
    &.router-link-exact-active {
      color: purple;
    }
  }
}
</style>
