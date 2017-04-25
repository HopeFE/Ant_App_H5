<template>
  <div class="container">
    <div class="flex-center flex-middle site-box">
      <img class="site-box logo" src="../assets/logo.png">
    </div>
    <div class="flex-center flex-middle site-box">
      <img class="site-box slogan" src="../assets/slogan.png">
    </div>
    <a href="javascript:void(0);" class="btn btn-primary" @click="_download">立即下载</a>
    <wechatmask :value="show" v-on:onHide="_onHide" msg='选择在"浏览器或Safari"中打开'></wechatmask>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import wechatmask from '@/components/mask'

export default {
  name: 'download',
  components: {
    wechatmask
  },
  computed: {
    ...mapGetters(['system', 'isWeixin'])
  },
  data () {
    return {
      show: false
    }
  },
  metaInfo: {
    title: '爱农田APP下载'
  },
  methods: {
    _download () {
      // 安卓微信环境下打开浏览器,IOS环境下打开appstore
      if (this.isWeixin) {
        this.show = true
      } else {
        (this.system === 'IOS' ? window.location.href = 'https://appsto.re/cn/2jqVhb.i' : window.location.href = 'http://peifeifarmer.qmant.com/apk/ant_farmer.apk')
      }
    },
    _onHide () {
      this.show = false
    }
  }
}
</script>

<style scoped>
.container{
  height:100%;
}
.logo{
  margin-top:10rem;
  width:14rem;
  height:14rem;
}
.slogan{
  margin-top:1rem;
  width:10.3rem;
  height:4.8rem;
}
.btn-primary{
  margin-top:10rem;
  background: #0e9e59;
}
.btn{
  padding: 8px 10px;
}
</style>
