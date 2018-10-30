<template>
  <el-menu background-color="white" text-color="#00e673" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
    <el-menu-item index="1" style="color:purple;">talkToBob</el-menu-item>
    <el-submenu index="2">
    <template slot="title">Your account</template>
    <el-menu-item index='/Profile'>Profile</el-menu-item>
    <el-menu-item index='/Chat'>Chat</el-menu-item>
    <el-menu-item index="1-3">Progress</el-menu-item>
  </el-submenu>
  <el-menu-item index="2">Find Locals</el-menu-item>
   <el-submenu index="3">
    <template slot="title">Lessons</template>
    <el-menu-item index="3-1">Japonese</el-menu-item>
    <el-menu-item index="3-2">English</el-menu-item>
  </el-submenu>
  <el-menu-item index="4">Data</el-menu-item>
  <el-menu-item index='/Products'>Buy products</el-menu-item>
  <el-menu-item index='/Profile' style="margin-left:400px;color:black;"><img src="../assets/profile.png" alt="" style="width:30px;height:30px;margin-right:10px;">{{ envInfos.login }}</el-menu-item>
</el-menu>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    handleSelect () {
      console.log('HANDLE SELECT')
    }
  },
  computed: {
    ...mapGetters([ 'envInfos' ])
  }
}
</script>

<style scoped>

.height{
    height:38px;
    color:black;
    border-bottom: 1px solid black;
    margin:0;
}

.flex_horizontal{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
}

</style>
