<template>
  <div>
    <header class="flex-center flex-middle site-box">
      <img class="site-box logo" :src="img+'?imageMogr2/auto-orient/thumbnail/690x350!/format/jpg/interlace/1/blur/1x0/quality/80|imageslim'">
    </header>
    <div v-html="article" style="padding:1rem 1rem 5rem;font-size:1.5rem;"></div>
    <a href="javascript:void(0);" class="btn btn-primary contacts" @click="show = true">电话咨询</a>
    <ant-dialog :value="show" v-on:onHide="_onHide">
      <div slot="value">
        <a :href="'tel:'+tel.contacts_phone" v-for="tel in contacts" class="dialog_tel">
          <span style="color:#333">{{tel.contacts_name}}</span><br/>
          {{tel.contacts_phone}}
        </a>
      </div>
    </ant-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Dialog from '@/components/dialog'

export default {
  name: 'credit',
  components: {'ant-dialog': Dialog},
  computed: {
    ...mapGetters(['credit', 'insurance', 'contacts', 'route'])
  },
  data () {
    return {
      article: [],
      id: '',
      img: '',
      show: false
    }
  },
  metaInfo: {
    title: ''
  },
  methods: {
    ...mapActions(['getContacts']),
    _onHide () {
      this.show = false
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let index = vm.route.params.index
      vm.article = (vm.route.params.type === 'credit' ? vm.credit.list.data[index].loan_intro : vm.insurance.list.data[index].insurance_intro)
      vm.id = (vm.route.params.type === 'credit' ? vm.credit.list.data[index].loan_id : vm.insurance.list.data[index].insurance_id)
      vm.img = (vm.route.params.type === 'credit' ? vm.credit.list.data[index].loan_image : vm.insurance.list.data[index].insurance_image)
      vm.getContacts({id: vm.id})
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style scoped>
.article{background:#fff;border-radius:3px;margin-bottom:1.5rem;}
.article h6{margin: 0;padding:.5rem .75rem}
.article p{margin: 0;padding:.5rem .75rem }
img{margin:0;}
.contacts{
  width:95%;
  margin:5rem auto 0;
  position:fixed;
  bottom:10px;
  right:2.5%;
  background:#ff520c;
  border-color:#ff520c;
}
.dialog_tel{
  font-size:1.5rem;
  color:#ff520c;
  width:100%;
  display:inline-block;
  padding:.25rem 1rem;
  border-bottom:1px solid #d9d9d9;
}
</style>
