<template>
<div>
<el-container>
      <!-- <el-header height="100px;" style="background-color:blue;"></el-header> -->
        <el-header style="background: linear-gradient(#ffff99, #ffcc99);">
            <a id="logo">
                <img src="../images/plumei.png" style="width: 10px;">
                <span>Formation à l'ancien égyptien</span>
            </a>
        </el-header>
      </el-container>
      <el-container style="height: 670px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

                <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
        </el-aside>
    </el-container>
    </div>
</template>

<script>

export default {
  name: 'Page',
  data () {
    return {
      input: 'Welcome to Your Vue.js App'
    }
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
