<template>
<el-container>
    <div id="cover" style="margin-top: 9%;">
        <div id="container">
            <div style="width:400px;">
                <el-form ref="form" :model="form" label-width="120px" >
                    <el-form-item label="Login">
                        <el-input size="mini" type="text" v-model="form.login"></el-input>
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input size="mini" type="text" v-model="form.password" ></el-input>
                    </el-form-item>
                    <el-button type="primary" plain round style="color:orange;" @click="toAccueil()">Primary</el-button>
                </el-form>
                <span style="cursor:pointer;">New on talkToBob?</span>
            </div>
        </div>
    </div>
</el-container>

</template>

<script>

import '../css/login.css'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    toAccueil () {
      if (this.form.login) {
        this.$store.commit('envInfos', { login: this.form.login })
        console.log('REGISTER IN STORE')
        if (this.envInfos.login && this.envInfos.login !== '') this.$router.push({ name: 'Accueil' })
        console.log('router')
      }
    }
  },
  computed: {
    ...mapGetters([ 'envInfos' ])
  }
}
</script>

<style scoped>

#cover{
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    height:100%;
    color: black;
}

#container{
    /* margin: auto; */
    /* background-color: white; */
    border-radius: 4px;
    width: 50%;
    height:40%;
    margin:auto;
}

</style>
