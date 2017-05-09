import './search.scss'
import { Message } from 'element-ui'

export default {
  data: function() {
    return {
      show: false,
      lists: [
        { name: '租挖掘机', state: 1, msg: '租挖掘机' },
        { name: '买挖掘机', state: 2, msg: '买挖掘机' },
        { name: '配件', state: 3, msg: '配件' },
        { name: '文章', state: 4, msg: '文章' }
      ],
      keyword: '',
      curIndex: 1
    }
  },
  computed: {
    curList() {
      return this.lists[this.curIndex]
    }
  },
  methods: {
    toggle() {
      this.show = true
    },
    change(index) {
      this.curIndex = index
      this.show = false
    },
    search() {
      if (!this.keyword) {
        Message('请输入查询的内容')
        return
      }
      location.href = `productLists.html?state=${this.curList.state}&keyword=${this.keyword}`
    }
  }
}