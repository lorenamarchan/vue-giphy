<template>
  <div id="home">
    <section>
      <GifFilters
        @filter="searchData"
        @change-limit="updateLimit"
        :limit-number="limitNumber"
      />
      <!-- con gifs-list y con attr title -->
      <GifsList title="GIFs buscado" :gifs-list="foundGifs" />
      <!-- sin gifs-list y con attr title -->
      <GifsList title="Trendig Gifs" />
      <!-- con gifs-list y con title como slot -->
      <GifsList :gifs-list="allGifs" @select-gif="goToDetail">
        <h2>Otro titulo:</h2>
      </GifsList>
    </section>
  </div>
</template>

<script>
import GifFilters from '@/components/GifFilters.vue'
import GifsList from '@/components/GifsList.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    GifFilters,
    GifsList,
  },
  data() {
    return {
      limitNumber: 10,
      isLogged: false,
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    ...mapState('gifs', ['allGifs', 'foundGifs']),
  },
  methods: {
    //...mapActions('gifs', ['listGifs']),
    ...mapActions({
      listGifs: 'gifs/listGifs',
      searchGifs: 'gifs/searchGifs',
    }),
    loadData() {
      const params = `&limit=${this.limitNumber}`
      this.listGifs(params)
    },
    searchData(searchText) {
      const params = `&limit=${this.limitNumber}&q=${searchText}`
      this.searchGifs(params)
    },
    updateLimit(limit) {
      this.limitNumber = limit
    },
    changeLogged() {
      this.isLogged = true
    },
    goToDetail({ id, title }) {
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
