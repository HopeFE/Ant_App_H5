<template>
  <div class="credit">
    <header class="flex-center flex-middle site-box">
      <img class="site-box logo" src="../assets/credit.jpg">
    </header>
    <section style="padding:0 1.1rem 1rem;background:#FEE332;" >
      <article class="article">
        <h6>我是标题标题标题</h6>
        <img class="site-box logo" src="http://placehold.it/690x320">
        <p>
          我是标题标题标题我是标题标题标题我是标题标题标题我是标题标题标题
        </p>
      </article>
      <article class="article">
        <h6>我是标题标题标题</h6>
        <img class="site-box logo" src="http://placehold.it/690x320">
        <p>
          我是标题标题标题我是标题标题标题我是标题标题标题我是标题标题标题
        </p>
      </article>
      <article class="article">
        <h6>我是标题标题标题</h6>
        <img class="site-box logo" src="http://placehold.it/690x320">
        <p>
          我是标题标题标题我是标题标题标题我是标题标题标题我是标题标题标题
        </p>
      </article>
      <article class="article">
        <h6>我是标题标题标题</h6>
        <img class="site-box logo" src="http://placehold.it/690x320">
        <p>
          我是标题标题标题我是标题标题标题我是标题标题标题我是标题标题标题
        </p>
      </article>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'credit',
  computed: {
    ...mapGetters(['system', 'isWeixin'])
  },
  data () {
    return {
      show: false
    }
  },
  metaInfo: {
    title: '我要贷款'
  }
}
</script>

<style scoped>
body{
 
}
.credit{
  background:#FEE332;
  height:100%;
}
.article{background:#fff;border-radius:3px;margin-bottom:1.5rem;}
.article h6{margin: 0;padding:.5rem .75rem}
.article p{margin: 0;padding:.5rem .75rem }
img{margin:0;}
.btn-primary{
  margin-top:10rem;
  background: #0e9e59;
}
.btn{
  padding: 8px 10px;
}
</style>
