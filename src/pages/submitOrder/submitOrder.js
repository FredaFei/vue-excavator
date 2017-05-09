import './submitOrder.scss'

import Top from 'components/top/top.vue'
import Foot from 'components/foot/foot.vue'
import Search from 'components/search/search.vue'
import utils from 'js/utils.js'
import address from 'js/addressService.js'
import order from 'js/orderService.js'
import { Message } from 'element-ui'

let preData = JSON.parse(sessionStorage.getItem('preData'))

new Vue({
    el: '#app',
    data: {
      type: utils.getQuery("type"),
      typestr: '',
      state: '',
      add: '',
      preData: '',
      lists: '',
      mode: '2',
      head: '',
      content: ''
    },
    created() {
      this.addLists()
      this.preLists()
      this.init()
    },
    methods: {
      addLists() {
        address.addresslist().then(res=>{
          let data = res.data
          this.add = data.list[0]
        })
      },
      preLists() {
        order.preorder(preData).then(res=>{
          this.preData = res.data
          this.lists = this.preData.list
        })
      },
      init() {
        switch (this.type) {
          case '1':
            this.typestr = "申请租赁"
            this.state = "填写意向单"
            break;
          case '2':
            this.typestr = "申请购买"
            this.state = "填写意向单"
            break;
          case '3':
            this.typestr = "购买配件"
            this.state = "填写订单"
            break;
        }
      },
      submit() {
        // 非空校验
        if (this.type==3&&this.mode==1) {
          if(!this.head){
            Message({
              message: '请填写发票抬头',
              type: 'warning'
            })
          }
          if(!this.content){
            Message({
              message: '请填写发票内容',
              type: 'warning'
            })
          }
        }
        let commitData = Object.assign({},preData,{
          consigneeId: this.add.id,
          mode: this.mode,
          head: this.head,
          content: this.content,
          type: this.type
        })
        order.commit(commitData).then(res=>{
          Message(res.message)
          // 跳转到订单列表项
          if (this.type == 1 ) {
            location.href = 'personal.html#/intention?index=0'
          }
          // 买
          if (this.type == 2 ) {
            location.href = 'personal.html#/intention?index=1'
          }
          // 配
          if (this.type == 3 ) {
            location.href = 'personal.html#/order?index=0'
          }
        })
      }
    },
    components: {
      Top,
      Foot,
      Search
    }
  }

)
