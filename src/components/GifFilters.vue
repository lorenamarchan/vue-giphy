<template>
  <div id="filters">
    <base-input
      type="text"
      name="holi"
      v-model="searchText"
      @keyup-enter="search"
    />
    <base-input
      type="number"
      name="holi2"
      v-model="limit"
      @input="changeLimit"
      @keyup-enter="search"
    />
    <base-button :disabled="!searchText" theme="primary">Buscar</base-button>
  </div>
</template>
<script>
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

export default {
  name: 'GifFilters',
  components: { BaseInput, BaseButton },
  props: {
    limitNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      searchText: '',
      limit: 0,
    }
  },
  mounted() {
    this.limit = this.limitNumber
  },
  methods: {
    search() {
      this.$emit('filter', this.searchText)
    },
    changeLimit() {
      this.$emit('change-limit', +this.limit)
    },
  },
}
</script>
<style lang="scss">
#filters {
  display: flex;
}
</style>
