<template>
  <header class="base-header">
    <h1>Find your GIF</h1>
    <h2>{{ userData.name }}</h2>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseHeader',
  computed: {
    ...mapState('auth', ['userData']),
  },
}
</script>

<style lang="scss" scoped>
.base-header {
  $color: purple;
  border-bottom: solid 1px $color;
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    color: $color;
    padding: 0 20px;
    margin: 0;
  }
  h2 {
    padding: 0 20px;
  }
}
</style>
