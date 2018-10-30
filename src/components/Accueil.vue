<template>
  <div>
      <Header/>
  </div>
</template>

<script>

import Header from '@/components/Header'

export default {
  name: 'Accueil',
  components: { Header },
  data () {
    return {
      isLogIn: true
    }
  }
}
</script>

<style scoped>

</style>
