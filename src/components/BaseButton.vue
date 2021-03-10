<template>
  <button
    class="base-button"
    @click="$emit('click')"
    v-bind="$props"
    :class="theme"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: '',
      validate: value => ['primary', 'secondary'].includes(value),
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  margin: 4px;
  padding: 8px;
  border: solid 0 transparent;
  border-radius: 4px;
  &.primary {
    background: purple;
    color: white;
  }
}
</style>
