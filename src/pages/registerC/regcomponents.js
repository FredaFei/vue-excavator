import './registerC.scss'
import 'element-ui/lib/theme-default/index.css'

import {Message} from 'element-ui'

import {isLegalPhone, isLegalPassword, isLegalValidate} from 'js/validata.js'
import {rap,fetch} from 'js/fetch.js'
let url = {
  registe: '/user/register.do',
  getCode: '/user/getCode.do'
}

url = rap(url)

const MINUTE = 10;

Vue.component('register-com', {
	template: '#form-box',
	data: function(){
    return {
      code: '',
      phone: '',
      phoneMsg: '',
      validMsg: '',
      pwd1: '',
      pwd2: '',
      pwdMsg1: '',
      pwdMsg2: '',
      seconds: MINUTE,
      timer: null,
      showFlag: false
    }
  },
  props: {
    desc: {
      btnmsg: '注册',
      info: '恭喜你，注册成功!'
    }
  },
  computed: {
    changeCodeText() {
      return this.seconds == MINUTE ? `获取验证码` : `${this.seconds}s`
    }
  },
  methods: {
    checkPhone() {
      if (!this.phone) {
        this.phoneMsg = '*请输入手机号码'
        return false;
      }
      if (!isLegalPhone(this.phone)) {
        this.phoneMsg = '*请输入11位有效的手机号码'
        return false;
      }
      this.phoneMsg = ''
      return true;
    },
    getCode(){
      if (this.checkPhone()) {
        if (this.seconds !== MINUTE) {
          return false;
        }
        fetch(url.getCode, {
          mobile: this.phone
        }).then(res => {
            Message({
              message: res.message,
              type: 'success',
              duration: 2000
            })
            this.timer = setInterval(this.countDown, 1000)
        })
      }
    },
    countDown() {
      this.seconds--;
      if (this.seconds <= 0 ) {
        clearInterval(this.timer)
        this.timer = null;
        this.seconds = MINUTE
      }
    },
    checkVlidate() {
      if (!this.code) {
        this.validMsg = '*请输入验证码'
        return false;
      }
      if (!isLegalValidate(this.code)) {
        this.validMsg = '*请输入4位有效的验证码'
        return false;
      }
      this.validMsg = ''
      return true;
    },
    checkPassword() {
      if (!this.pwd1) {
        this.pwdMsg1 = '*请输入密码'
        return false;
      }
      if (!isLegalPassword(this.pwd1)) {
        this.pwdMsg1 = '*密码长度为6-20个字符，包括大小写字母、数字、下划线至少两种'
        return false;
      }
      this.pwdMsg1 = '';
      return true;
    },
    againCheckPwd() {
      if (this.checkPassword() && this.pwd1 === this.pwd2) {
        this.pwdMsg2 = '';
        return true;
      } else {
        this.pwdMsg2 = '*两次密码输入不一致'
        return false;
      }
    },
    registe() {
      // 表单校验、请求参数
      if (this.checkPhone() && this.checkVlidate() && this.checkPassword() && this.againCheckPwd()) {
        fetch(url.registe, {
          mobile: this.phone,
          pwd: this.pwd2,
          code: this.code
        }).then(res => {
          console.log(res)
          this.showFlag = true;
        })
      }
    },
    login(){
      location.href = 'login.html'
    }
  }
})