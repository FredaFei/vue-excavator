import top from 'components/top/top.vue'
import foot from 'components/foot/foot.vue'
import register from 'components/register/register.vue'

var app = new Vue({
  el: '#register-wrapper',
  components: {top, foot, register},
  data: {
  	fromType: 1
  }
})