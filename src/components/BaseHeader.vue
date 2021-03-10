<template>
  <header class="base-header">
    <h1>Find your GIF</h1>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
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
  h1 {
    font-size: 18px;
    color: $color;
    padding: 8px;
    margin: 0;
  }
}
</style>
