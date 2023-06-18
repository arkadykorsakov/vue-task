<template>
  <div id="app">
    <TheNavbar />
    <div class="container with-nav">
      <AppMessage @close="close" />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import AppMessage from './components/ui/AppMessage.vue'
export default {
  components: { TheNavbar, AppMessage },
  methods: {
    close() {
      this.$store.commit('clearMessage')
    }
  }
}
</script>

<style></style>
