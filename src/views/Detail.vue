<template>
  <section v-if="gifDetail">
    <div class="gif">
      <img
        :src="gifDetail.data.images.original.url"
        :alt="gifDetail.data.title"
      />
      <span class="gif-text"> {{ gifDetail.data.title }} </span>
      <h2>
        <a :href="gifDetail.data.url" target="_blank"
          >{{ gifDetail.data.title }}
        </a>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      gifDetail: '',
    }
  },
  mounted() {},
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/${this.id}?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB`
      )
      const data = await response.json()
      this.gifDetail = data
      console.log(this.gifDetail)
    },
  },
}
</script>

<style></style>
