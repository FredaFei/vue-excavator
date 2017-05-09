import './minicart.scss'
import { Message } from 'element-ui'
import cart from 'js/cartService.js'
import bus from 'js/bus.js'

export default {
  props: ['state'],
  data() {
    return {
      saleData: '',
      rentData: '',
      partsData: '',
      curIndex: 0
    }
  },
  created() {
    this.getList(1)
    this.getList(2)
    this.getList(3)
    bus.$on('add',(id)=>{
      this.addNum(id)
    })
  },
  methods: {
    addNum(id){
      let productData
      switch(this.state){
        case 1:
          productData = this.rentData
          break
        case 2:
          productData = this.saleData
          break
        case 3:
          productData = this.partsData
          break
      }
      productData.list.forEach((item)=>{
        if (item.unifiedMerchandiseId===id) {
          item.number++;
          item.sum += item.discount
          productData.sum += item.discount
        }
      })
    },
    getList(type){
      cart.list({
        pageNum: 1,
        pageSize: 4,
        type
      }).then(res=>{
        let data = res.data
        switch(type){
          case 1:
            this.rentData = data
            break
          case 2:
            this.saleData = data
            break
          case 3:
            this.partsData = data
            break
        }
      })
    },
    add(para) {
      cart.add({
        month: para.month,
        number: para.number,
        type: para.type,
        unifiedMerchandiseId: para.item.unifiedMerchandiseId
      }).then(res=>{
        if (para.month) {
          para.item.month++;
        }else{
          para.item.number++;
        }
        para.item.sum += para.item.discount
        para.data.sum += para.item.discount
      })
    },
    reduce(para) {
      if (para.month) {
        if (para.item.month<=3) {
          para.item.month = 3
          return 
        }
      }else{
        if (para.item.number<=1) {
          para.item.number = 1
          return 
        }
      }
      cart.reduce({
        month: para.month,
        number: para.number,
        type: para.type,
        unifiedMerchandiseId: para.item.unifiedMerchandiseId
      }).then(res=>{
        if (para.month) {
          para.item.month--;
        }else{
          para.item.number--;
        }
        para.item.sum -= para.item.discount
        para.data.sum -= para.item.discount
      })
    }
  }
}
