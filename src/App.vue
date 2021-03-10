<template>
  <div id="app">
    <section class="auth-section" v-if="!isLogged">
      <AuthLogin @login="changeLogged" />
    </section>
    <section v-else>
      <BaseHeader />

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
      <GifsList :gifs-list="trendingGifs">
        <h2>Otro titulo:</h2>
      </GifsList>
    </section>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'
import GifFilters from './components/GifFilters.vue'
import GifsList from './components/GifsList.vue'
import AuthLogin from './components/AuthLogin.vue'
export default {
  name: 'App',
  components: {
    GifFilters,
    GifsList,
    BaseHeader,
    AuthLogin,
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
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  .auth-section {
    background: #f0ebf8;
    padding: 16px 0 48px;
    margin: 32px auto;
  }
}
</style>
