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
    changeLogged(data) {
      try {
        this.$store.dispatch('auth/login', data)
        //this.$router.push('/'})
        //this.$router.push({ path: '/' })
        this.$router.push({ name: 'Home' })
      } catch (err) {
        console.error({ err })
      }
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
