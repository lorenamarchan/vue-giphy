<template>
  <div id="login">
    <section class="auth-section">
      <AuthLogin @login="changeLogged" />
    </section>
  </div>
</template>

<script>
import AuthLogin from '@/components/AuthLogin.vue'
export default {
  name: 'Home',
  components: {
    AuthLogin,
  },
  data() {
    return {}
  },
  methods: {
    changeLogged() {
      //this.$router.push('/'})
      //this.$router.push({ path: '/' })
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>

<style lang="scss">
#login {
  .auth-section {
    background: #f0ebf8;
    padding: 16px 0 48px;
    margin: 32px auto;
  }
}
</style>
