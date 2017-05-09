import './top.scss'
import {fetch,rap} from 'js/fetch.js'
import user from 'js/userService.js'
import bus from 'js/bus.js'

export default {
  data() {
    return {
      mobile: '',
      isLogin: false
    }
  },
  created() {
    this.getInfo()
    bus.$on('login', (user)=>{
      this.isLogin = true
      this.mobile = user.mobile
    })
  },
  methods:{
    getInfo(){
      user.getInfo().then( res => {
        let user = res.data.user
        this.mobile = user.mobile
        this.isLogin = true
        //检查是否登录
        bus.$emit('login',user)
      })
    },
    logout() {
      user.logout().then( res => {
        this.isLogin = false
        this.mobile = ''
        bus.$emit('logout')
      })
    }
  }
}
