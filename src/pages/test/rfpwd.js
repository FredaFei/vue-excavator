import top from 'components/top/top.vue'
import foot from 'components/foot/foot.vue'
import register from 'components/register/regc.vue'

var app = new Vue({
  el: '#register-wrapper',
  components: {top, foot, register},
  data: {
    desc: {
      btnmsg: '注册',
      info: '恭喜你，注册成功!'
    },
    url: {
      registe: '/user/register.do',
      getCode: '/user/getCode.do'
    }
  }
})