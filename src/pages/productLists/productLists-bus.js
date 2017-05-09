import './productLists.scss'
require('normalize.css')

import { Message } from 'element-ui'

import Top from 'components/top/top.vue'
import Search from 'components/search/search.vue'
import Foot from 'components/foot/foot.vue'
import Logstate from 'components/logstate/logstate.vue'
import Minicart from 'components/minicart/minicart.vue'
import cart from 'js/cartService.js'
import bus from 'js/bus.js'

import utils from 'js/utils.js'
import { fetch, rap } from 'js/fetch.js'
let url = {
  classify: '/lists/classify.do',
  lists: '/lists/lists.do',
  articles: '/article/articles.do'
}

url = rap(url)

new Vue({
  el: '#app',
  components: {
    Top,
    Foot,
    Search,
    Logstate,
    Minicart
  },
  data: {
    state: parseInt(utils.getQuery('state')) || 1,
    positionMsg: '',
    keyword: utils.getQuery('keyword'),
    classifyList: '',
    typeList: '',
    brandIndex: 0,
    typeIndex: 0,
    brandId: -1,
    typeId: -1,
    lists: '',
    merchandiseIdArr: []
  },
  created() {
    this.getPositionMsg()
    if (!this.keyword) {
      this.getClassify()
    }
    this.query()
  },
  methods: {
    getClassify() {
      fetch(url.classify).then(res => {
        this.classifyList = res.data.classifyList
        this.typeList = this.classifyList[this.brandIndex].childrenList
      })
    },
    getPositionMsg() {
      if (this.keyword) {
        this.positionMsg = "搜索"
      } else {
        switch (this.state) {
        case 1:
          this.positionMsg = '挖掘机租赁'
          break;
        case 2:
          this.positionMsg = '挖掘机销售'
          break;
        case 3:
          this.positionMsg = '配件商城'
          break;
        }
      }
    },
    selectBrand(index) {
      this.brandIndex = index
      this.typeList = this.classifyList[index].childrenList
      this.brandId = this.classifyList[index].id
      this.query()
    },
    selectType(index, item) {
      this.typeIndex = index
      this.typeId = item.id
      this.query()
    },
    query() {
      let reqUrl = ''
      if (this.state === 4) {
        reqUrl = url.articles
      } else {
        reqUrl = url.lists
      }

      fetch(reqUrl, {
        brandId: this.brandId,
        keywords: this.keyword,
        typeId: this.typeId,
        type: this.state
      }).then(res => {
        this.lists = res.data.list
      })
    },
    add(item) {
      cart.add({
        month: this.state == 1 ? 1 : undefined,
        number: 1,
        type: this.state,
        unifiedMerchandiseId: item.unifiedMerchandiseId
      }).then((res) => {
        Message(res.message)
        bus.$emit('add', item.unifiedMerchandiseId)
        // bus.$emit('add', '1010017000010403')
        
      })
    }
  }
})
