<template>
  <div class="credit">
    <header class="flex-center flex-middle site-box">
      <img class="site-box logo" src="../assets/credit.jpg">
    </header>
    <section style="padding:0 1.1rem 1rem;background:#FEE332;" >
      <article class="article" v-for="(article, index) in credit.list.data" @click="$router.push(`/induction/credit/${index}`)">
        <h6>{{article.loan_name}}</h6>
        <img class="site-box logo" height="175" :src="article.loan_image+'?imageMogr2/auto-orient/thumbnail/395x175!/format/jpg/interlace/1/blur/1x0/quality/80|imageslim'">
        <p v-html="article.loan_summary"></p>
      </article>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'credit',
  computed: {
    ...mapGetters(['credit'])
  },
  data () {
    return {
      show: false
    }
  },
  metaInfo: {
    title: '我要贷款'
  },
  methods: {
    ...mapActions(['getCredit', 'setCreditScroll'])
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.$refs.viewBoxBody.scrollTop = vm.credit.scroll
  //   })
  // },
  // beforeRouteLeave (to, from, next) {
  //   this.setCreditScroll(this.$refs.viewBoxBody.scrollTop)
  //   next()
  // },
  created () {
    this.getCredit()
  }
}
</script>

<style scoped>
.credit{
  background:#FEE332;
  height:100%;
}
.article{background:#fff;border-radius:3px;margin-bottom:1rem;}
.article h6{margin: 0;padding:.5rem .75rem}
.article p{margin: 0;padding:.5rem;font-size:1.4rem;}
.article img{}
img{margin:0;}
</style>
