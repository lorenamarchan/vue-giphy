<template>
  <input
    v-model="inputValue"
    v-bind="$props"
    class="base-input"
    @input="$emit('input', inputText)"
    @keyup.enter="$emit('keyup-enter')"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.inputText = newValue
      },
    },
  },
  data() {
    return {
      inputText: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  margin: 4px;
  padding: 8px;
  border-radius: 4px;
  border: solid 2px #c4b1e4;
  &::placeholder {
    color: #c4b1e4;
  }
}
</style>
