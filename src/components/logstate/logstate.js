import './logstate.scss'
import { Message } from 'element-ui'
import { isLegalPhone } from 'js/validata.js'
import user from 'js/userService.js'
import bus from 'js/bus.js'

export default {
  data() {
    return {
      name: '',
      username: '',
      headImage: '',
      isLogin: false,
      pwd: ''
    }
  },
  created() {
    bus.$on('logout',()=>{
      this.isLogin = false
      this.username = ''
      this.name = ''
      this.headImage = ''
      this.pwd = ''
    })
    bus.$on('login',(userInfo)=>{
      this._setUserInfo(userInfo)
    })
  },
  methods: {
    _setUserInfo(userInfo){
      this.isLogin = true
      this.username = userInfo.mobile
      this.name = userInfo.name
      this.headImage = userInfo.headImage || require('./imgs/face-img2.jpg')
    },
    getUserInfo() {
      user.getInfo().then(res=>{
        let userInfo = res.data.user
        this._setUserInfo(userInfo)
        bus.$emit('login',userInfo)
      })
    },
    login() {
      if (!this.username) {
        Message('请输入手机号')
        return
      }
      if (!isLegalPhone(this.username)) {
        Message('请输入正确的手机号')
        return
      }
      if (!this.pwd) {
        Message('请输入密码')
        return
      }
      user.login({
        username: this.username,
        pwd: this.pwd
      }).then(res=>{
        this.getUserInfo()
      })
    }
  }
}


