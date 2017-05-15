<template>
  <div class="insurance">
    <header class="flex-center flex-middle site-box">
      <img class="site-box logo" src="../assets/insurance.jpg">
    </header>
    <section style="padding:0 1.1rem 1rem;background:#70C0E5;" >
      <article class="article" v-for="(article, index) in insurance.list.data" @click="$router.push(`/induction/insurance/${index}`)">
        <h6>{{article.insurance_name}}</h6>
        <img class="site-box logo" :src="article.insurance_image+'?imageMogr2/auto-orient/thumbnail/690x350!/format/jpg/interlace/1/blur/1x0/quality/80|imageslim'">
        <p v-html="article.insurance_summary"></p>
      </article>
    </section>
  </div>
</template>
 
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'insurance',
  computed: {
    ...mapGetters(['insurance'])
  },
  data () {
    return {
      show: false
    }
  },
  metaInfo: {
    title: '我要保险'
  },
  methods: {
    ...mapActions(['getInsurance', 'setInsuranceScroll'])
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.$refs.viewBoxBody.scrollTop = vm.insurance.scroll
  //   })
  // },
  // beforeRouteLeave (to, from, next) {
  //   this.setInsuranceScroll(this.$refs.viewBoxBody.scrollTop)
  //   next()
  // },
  created () {
    this.getInsurance()
  }
}
</script>

<style scoped>
.insurance{
  background:#70C0E5;
  height:100%;
}
.article{background:#fff;border-radius:3px;margin-bottom:1rem;}
.article h6{margin: 0;padding:.5rem .75rem}
.article p{margin: 0;padding:.5rem;font-size:1.4rem;}
img{margin:0;}
</style>
