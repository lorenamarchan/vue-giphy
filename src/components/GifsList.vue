<template>
  <section>
    <slot>
      <h1>{{ title }}:</h1>
    </slot>
    <div class="gif-wrapper">
      <div class="gif" v-for="(gif, index) in gifsList" :key="index">
        <img v-bind:src="gif.images.original.url" alt="gif" />
        <span class="gif-text">{{ gif.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GifsList',
  props: {
    title: {
      type: String,
      default: 'Gifs',
    },
    gifsList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.gif-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  .gif {
    position: relative;
    display: flex;
    max-width: 250px;
    img {
      width: 100%;
    }
    &-text {
      position: absolute;
      bottom: 0;
      left: 0;
      background: #c4b1e4;
      padding: 5px 15px;
    }
  }
}
</style>
