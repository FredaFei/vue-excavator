import 'sass/variables.scss'
import './login.scss'

import {isLegalPhone,isLegalPassword} from 'js/validata.js'
import user from 'js/userService.js'

import top from 'components/top/top.vue'
import foot from 'components/foot/foot.vue'

new Vue({
  el: '#login-wrapper',
  components: { top, foot },
  data: {
    phone: '',
    pwd: '',
    phoneMsg: '',
    pwdMsg: ''
  },
  methods: {
  	checkPhone(){
  		if (!this.phone) {
  			this.phoneMsg = '*请输入手机号码'
  			return false;
  		}
  		if (!isLegalPhone(this.phone)) {
  			this.phoneMsg = '*请输入11位有效的手机号码'
  			return false;
  		}
  		this.phoneMsg = '';
  		return true;
  	},
  	checkPassword(){
  		if (!this.pwd) {
  			this.pwdMsg = '*请输入密码'
  			return false;
  		}
  		if (!isLegalPassword(this.pwd)) {
  			this.pwdMsg = '*长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种'
  			return false;
  		}
  		this.pwdMsg = '';
  		return true;
  	},
  	login(){
  		if (this.checkPhone() && this.checkPassword()) {
        user.login({
          mobile: this.phone,
          pwd: this.pwd
        }).then(res => {
          location.href = 'index.html'
        }, res => {
          console.log(res)
        })
  		}
  	}
  }
})