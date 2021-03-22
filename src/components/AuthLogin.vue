<template>
  <div class="auth">
    <h3 class="title">Auth login</h3>
    <form @submit.prevent="onSubmit">
      <div>
        <base-input
          v-model="formName"
          name="nombre"
          placeholder="Introduce tu nombre"
        />
        <base-input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="Introduce tu email"
        />
        <base-input
          v-model="form.password"
          type="password"
          name="password"
          placeholder="Introduce tu contraseña"
        />
      </div>
      <div>
        <base-button type="submit" theme="primary">Iniciar Sesión</base-button>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseInput, BaseButton },
  name: 'AuthLogin',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    formName: {
      get() {
        return this.$store.state.auth.userData.name
      },
      set(newValue) {
        this.$store.commit('auth/updateUserName', newValue)
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('login', { ...this.form, name: this.formName })
    },
  },
}
</script>

<style lang="scss">
.auth {
  width: 60%;
  min-width: 400px;
  margin: auto;
  .title {
    text-align: center;
  }
  form div {
    display: flex;
    flex-direction: column;
  }
}
</style>
