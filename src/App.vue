<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body{
  background-color:#fff;
  height:100%;
}
#app{
  height:100%;
}
img{
  margin:6px 0;
}
</style>
