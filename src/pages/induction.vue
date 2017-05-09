<template>
  <div>
    asdasd
    <a href="javascript:void(0);" class="btn btn-primary" @click="_download">立即下载</a>
    <Dialog :value="show" v-on:onHide="_onHide">
      <div slot="value">
        asdasd
        asdasd
      </div>
    </Dialog>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Dialog from '@/components/dialog'

export default {
  name: 'credit',
  components: {Dialog},
  computed: {
    ...mapGetters(['system', 'isWeixin'])
  },
  data () {
    return {
      show: true
    }
  },
  metaInfo: {
    title: '我要贷款'
  },
  methods: {
    _onHide () {
      this.show = false
    }
  }
}
</script>

<style scoped>
.article{background:#fff;border-radius:3px;margin-bottom:1.5rem;}
.article h6{margin: 0;padding:.5rem .75rem}
.article p{margin: 0;padding:.5rem .75rem }
img{margin:0;}

</style>
