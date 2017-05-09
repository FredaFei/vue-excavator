import './detail.scss'

import Top from 'components/top/top.vue'
import Search from 'components/search/search.vue'
import Foot from 'components/foot/foot.vue'
import Logstate from 'components/logstate/logstate.vue'
import Minicart from 'components/minicart/minicart.vue'
import CountControl from 'components/countControl/countControl.vue'
import MonthControl from 'components/monthControl/monthControl.vue'

import { Message } from 'element-ui'
import collect from 'js/collectService.js'
 import order from 'js/orderService.js'
import Utils from 'js/utils.js'

import { fetch, rap } from 'js/fetch.js'
let url = {
  detail: '/product/detail.do'
}
url = rap(url)

new Vue({
  el: '#app',
  data: {
    state: parseInt(Utils.getQuery('state')),
    attrList: '',
    merchandise: '',
    id: Utils.getQuery('id'),
    number: 1,
    month: 3,
    imgs: '',
    imgIndex: 0,
    showIndex: 0,
    isCollect: false,
    liWidth: 0
  },
  computed: {
    countMoney() {
      let sum = (this.merchandise.discount || this.merchandise.price)*this.number
      if (this.state === 1) {
        sum = sum*this.month
      }
      return sum.toFixed(2)
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      collect.detail().then(res=>{
        let data = res.data
        this.attrList = data.attrList
        this.merchandise = data.merchandise
        this.imgs = data.merchandise.imageList
        this.isCollect = this.merchandise.collect
        this.$nextTick(()=>{
          var li = document.getElementsByClassName('s-pic')[0]
          let liOutwidth = li.offsetWidth
          let left = +(getComputedStyle(li).marginLeft.replace('px',''))
          let right = +(getComputedStyle(li).marginRight.replace('px',''))
          return this.liWidth = liOutwidth+left+right
        })
      })
    },
    change(number) {
      // 右移
      if (this.imgIndex >= this.imgs.length - 4 && number >0) {
        return
      }
      // 左移
      if (this.imgIndex <=0 && number < 0) {
        return
      }
      this.imgIndex += number
    },
    collect() {
      this.isCollect =! this.isCollect
    },
    addCart() {

    },
    goApply(){
      let product = {
        numbers: this.number,
        months: this.month,
        ids: this.id
      }
      order.toOrder([product],this.state)
    }
  },
  components: {
    Top,
    Foot,
    Search,
    Logstate,
    Minicart,
    CountControl,
    MonthControl
  }
})
