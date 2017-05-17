<template>
  <div class="antmask" :style="{display: show ? 'block' : 'none'}" >
    <div class="antmask_center">
      <div class="antmask_center_title" @click="onClickMask">请选择咨询单位<span style="float:right;color:#ff520c">X</span></div>
      <div class="scroll-view" style="max-height:20rem;">
        <slot name="value"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    value: {
      type: Boolean,
      default: false
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
.antmask_center{
  width:80%;
  position:relative;
  top:50%;
  left:50%;
  margin-top:-12.5rem;
  margin-left:-40%;
  height:25rem;
  background:#fff;
}
.antmask_center_title{
  padding:.5rem 1rem;
}
</style>
