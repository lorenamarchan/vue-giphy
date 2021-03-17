<template>
  <div id="home">
    <section>
      <GifFilters
        @filter="searchGif"
        @change-limit="updateLimit"
        :limit-number="limitNumber"
      />
      <!-- con gifs-list y con attr title -->
      <GifsList title="GIFs buscado" :gifs-list="foundGifs" />
      <!-- sin gifs-list y con attr title -->
      <GifsList title="Trendig Gifs" />
      <!-- con gifs-list y con title como slot -->
      <GifsList :gifs-list="trendingGifs" @select-gif="goToDetail">
        <h2>Otro titulo:</h2>
      </GifsList>
    </section>
  </div>
</template>

<script>
import GifFilters from '@/components/GifFilters.vue'
import GifsList from '@/components/GifsList.vue'
export default {
  name: 'Home',
  components: {
    GifFilters,
    GifsList,
  },
  data() {
    return {
      trendingGifs: null,
      foundGifs: null,
      limitNumber: 10,
      isLogged: false,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const params = `&limit=${this.limitNumber}`
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB${params}`
      )
      const { data } = await response.json()

      this.trendingGifs = data
    },
    async searchGif(searchText) {
      const params = `&limit=${this.limitNumber}&q=${searchText}`
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB${params}`
      )
      const { data } = await response.json()
      this.foundGifs = data
    },
    updateLimit(limit) {
      this.limitNumber = limit
    },
    changeLogged() {
      this.isLogged = true
    },
    goToDetail({ id, title }) {
      console.log(id, title)
      this.$router.push({ name: 'Detail', params: { id, title } })
    },
  },
}
</script>

<style lang="scss">
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
