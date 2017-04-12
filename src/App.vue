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
body{
  background-color:#fff
}
img{
  margin:6px 0;
}
</style>
