import 'sass/variables.scss'
import './index.scss'
import { fetch, rap } from 'js/fetch.js'
let url = {
  list: '/merchandiseHot/list.do',
  slideList: '/slide/listSlides.do'
}
url = rap(url)

import slide from 'components/slide/slide.vue'
import top from 'components/top/top.vue'
import foot from 'components/foot/foot.vue'
import search from 'components/search/search.vue'

new Vue({
  el: '#root',
  components: { slide, top, foot, search },
  data: {
    excavatorList: '', // 挖掘机
    partsList: '', // 配件
    slideList: ''
  },
  created() {
    this.getList();
    this.getList(3);
    this.getSlide();
  },
  methods: {
    getList(type=undefined){
      fetch(url.list, {
        businessType: type
      }).then(res=>{
        if (type) {
          this.partsList = res.data.merchandiseHotVOList;
        }else{
          this.excavatorList = res.data.merchandiseHotVOList
        }
      });
    },
    getSlide(){
      fetch(url.slideList).then(res=>{
        this.slideList = res.data.slideList
      });
    },
    reduceNum(item){
      if (item.num<=1) {
        return false;
      }
      item.num--;
    },
    addNum(item){
      item.num++;
    },
    reduceMonth(item){
      if (item.month<=3) {
        return false;
      }
      item.month--;
    },
    addMonth(item){
      item.month++;
    }
  }
})
