<template>
  <div class="antmask" :style="{display: show ? 'block' : 'none'}" @click="onClickMask">
    <div class="antmask_weixin">
      <div class="flex-left">
        <div class="unit-1-3 site-box"></div>
        <div class="unit-2-3 site-box antmask_weixin_right">
          <h3>链接打不开？</h3>
          <p>请点击右上角</p>
          <p>{{msg}}</p>
          <img class="antmask_weixin__tip" src="../assets/opentip.png" width="150" height="70">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: '选择在"浏览器或Safari"中打开'
    }
  },
  created () {
    this.show = this.value
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    value (val) {
      this.show = val
    }
  },
  methods: {
    onClickMask () {
      this.show = false
      this.$emit('onHide')
    }
  }
}
</script>

<style scoped>
.antmask{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  right:0;
  background-color:rgba(0,0,0,.7);
}
.antmask_weixin h3{
  font-weight: normal;
  font-size:1.6rem;
  margin:0;
}
.antmask_weixin{
  background-color:#fff; 
  border-radius: 0 0 5px 5px;
  padding-bottom:10px;
}
.antmask_weixin p{
  margin: 0 ;
  font-size: 1.2rem;
}
.antmask_weixin_right{
  position: relative;
  padding:30px 0 0 20px;
}
.antmask_weixin__tip{
  position: absolute;
  right:0;
  top:0;
}
</style>
