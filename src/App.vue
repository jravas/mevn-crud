<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'home',
  components: {
    AppHeader
  },
  mounted () {
    this.$store.dispatch('fetchItems')
  }
}
</script>

<style lang="scss">
</style>
