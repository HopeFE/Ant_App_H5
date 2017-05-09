<template>
  <div class="container" style="font-size:.4rem;">
    <template v-if="article.title">
      <header>
        <h5 class="title">{{article.title}}</h5>
        <p class="author">{{article.news_source}} {{article.create_date}}</p>
      </header>
      <hr style="margin:10px 0"></hr>
      <article>
        <div v-html="article.content" style="padding-bottom:40px;"></div>
        <aside class="bottom_fixed">
          <div class="flex-center site-box units-gap">
            <div class="unit site-box">
              <a href="javascript:void(0);" class="btn btn-primary" @click="_openApp">打开爱农田</a>
            </div>
            <div class="unit site-box">
              <router-link to="/download">
                <a href="javascript:void(0);" class="btn btn-primary">下载爱农田</a>
              </router-link>
            </div>
          </div>
        </aside>
      </article>
    </template>
    <infinite-loading :on-infinite="_onInfinite" ref="infiniteLoading" spinner="bubbles">
      <span slot="no-results">好像来到了奇怪的地方~</span>
      <span slot="no-more"></span>
    </infinite-loading>
    <wechatmask :value="show" v-on:onHide="_onHide" msg='选择在"浏览器或Safari"中打开'></wechatmask>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import wechatmask from '@/components/mask'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'article',
  components: {
    InfiniteLoading, wechatmask
  },
  computed: {
    ...mapGetters(['system', 'isWeixin', 'article', 'id'])
  },
  data () {
    return {
      show: false
    }
  },
  metaInfo () {
    return {
      title: this.article.title
    }
  },
  methods: {
    ...mapActions(['getArticle', 'clearArticle']),
    _onInfinite () {
      this.getArticle().then(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      })
      .catch(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      })
    },
    _onHide () {
      this.show = false
    },
    _openApp () {
      // 微信环境下打开浏览器
      if (this.isWeixin) {
        this.show = true
      } else {
        (this.system === 'IOS' ? window.location.href = 'ainongtian://' : window.location.href = 'ainongtian://')
      }
    }
  },
  watch: {
    // 文章ID变动更新文章
    id () {
      this.clearArticle()
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
    }
  },
  activated () {
    this.clearArticle()
    this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
  }
}
</script>
<style scoped>
.btn{
  padding: 8px 10px;
  font-size: .5rem;
}
.bottom_fixed{
  position:fixed;width:100%;bottom:0px;right:0;background:#fff;height:auto;padding: .3rem;
}
.title{
  margin-top:.35rem;
  font-size:.6rem;
}
.author{
  color: #333;
}
</style>
