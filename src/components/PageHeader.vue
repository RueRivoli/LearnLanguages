<template>
  <div class="flex_horizontal height">
      <div class="flex_item">My account</div>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
      <div class="flex_item">Find locals</div>
      <div class="flex_item">Data</div>
      <div class="flex_item">Mix</div>
      <div class="flex_item">How to improve</div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {},
  data () {
    return {
    }
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

.flex_item{
  
}
</style>
