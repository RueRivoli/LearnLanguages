<template>
  <div id="app">
    <!-- <Initialize /> -->
    <router-view/>
  </div>
</template>

<script>
import Initialize from './Initialize.vue'

export default {
  name: 'App',
  created () {
    console.log(this.$store.state.db)
  },
  components: {
    Initialize
  }
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  margin:0;
  padding:0;
  height:100%;
  width:100%;
  background: url(assets/wallpape.jpg) no-repeat center fixed;
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisée */
}

</style>
