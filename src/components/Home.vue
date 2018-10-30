<template>
  <div>
      <Login v-if="isLogIn"/>
      <Page v-else/>
  </div>
</template>

<script>

import Page from '@/components/Page'
import Login from '@/components/Login'

export default {
  name: 'Home',
  components: { Login, Page },
  data () {
    return {
      isLogIn: true,
      login: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#logo{
    float:left;
    margin-top: 11px;
    font-size: 1.5em;
    color: #2c3e50;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
</style>
