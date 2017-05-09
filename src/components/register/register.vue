<template>
  <div id="registe-box">
    <div class="registe-box" v-show="!showFlag">
      <div class="registe-msg-com registe-phone">
        <label id="reg-phone">注册手机号：</label>
        <input type="tel" placeholder="请输入手机号" id="reg-phone" v-model.trim="phone" @blur="checkPhone($event)"><button class="verifily-code" @click="getCode($event)">{{changeCodeText}}</button>
        <p class="validate-msg">{{phoneMsg}}</p>
      </div>
      <div class="registe-msg-com registe-pwd">
        <label id="reg-code">输入验证码：</label>
        <input type="text" placeholder="请输入验证码" id="reg-code" v-model.trim="code" @blur="checkVlidate($event)">
        <p class="validate-msg">{{validMsg}}</p>
      </div>
      <div class="registe-msg-com registe-pwd">
        <label id="reg-pwd">登录密码：</label>
        <input type="password" placeholder="请输入密码" id="reg-pwd" v-model.trim="pwd1" @blur="checkPassword($event)">
        <p class="validate-msg">{{pwdMsg1}}</p>
      </div>
      <div class="registe-msg-com registe-pwd">
        <label id="reg-phone2">确认密码：</label>
        <input type="password" placeholder="请再一次输入密码" id="reg-phone2" v-model.trim="pwd2" @blur="againCheckPwd($event)">
        <p class="validate-msg">{{pwdMsg2}}</p>
      </div>
      <div class="registe-footer">
        <a href="" class="registe-submit" @click.stop.prevent="registe($event)">{{desc.btnmsg}}</a>
      </div>
    </div>
    <div class="registe-success" v-show="showFlag">
      <p>{{desc.info}}</p>
      <a href="" class="login-submit" @click.stop.prevent="login($event)">登录</a>
    </div>
  </div> 
</template>
<script>
  import {Message} from 'element-ui'
  import {isLegalPhone, isLegalPassword, isLegalValidate} from 'js/validata.js'
  import user from 'js/userService.js'

  const MINUTE = 10;
  export default {
    props: {
      desc: {
        type: Object,
        default() {
          return {
            btnmsg: '注册',
            info: '恭喜你，注册成功!'
          };
        }
      },
      fromType: {
        type: Number
      }
    },
    data() {
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
      };
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
          if (this.fromType === 1) {
            user.getCode({
              mobile: this.phone
            }).then(res => {
                Message({
                  message: res.message,
                  type: 'success',
                  duration: 2000
                })
                this.timer = setInterval(this.countDown, 1000)
            })
          }else if (this.fromType === 2) {}{
           user.getCodeForForget({
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
          user.registe({
            mobile: this.phone,
            pwd: this.pwd2,
            code: this.code
          }).then(res => {
            this.showFlag = true;
          })
        }
      },
      login(){
        location.href = 'login.html'
      }
    }
  };

</script>
<style lang="scss">
  @import "../../modules/sass/variables.scss";

  .registe-box{
    width: 410px;
    margin: auto;
    .registe-msg-com{
      padding: 5px;
      label{
        display: inline-block;
        width: 100px;
        text-align: right;
      }
      input{
        width: 200px;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
        font-size: 14px;
        border-radius: 2px;
        border: 1px solid #d2cdc9;
        &:focus{
          border: 1px solid #9999ff;
        }
      }
      .verifily-code{
        height: 30px;
        line-height: 30px;
        width: 80px;
        margin-left: 8px;
        color: #fff;
        font-size: 13px;
        border-radius: 2px;
        background: #ccc;
        cursor: pointer;
        &:hover{
          background: #aaa;
        }
      }
      .validate-msg{
        color: red;
        font-size: 12px;
        line-height: 27px;
        padding-top: 5px;
      }
    }
    .registe-footer{
      margin-top: 20px;
      text-align: center;
      .registe-submit{
        display: inline-block;
        padding: 8px 20px;
        color: #fff;
        font-size: 14px;
        border-radius: 2px;
        background-color: #7a924a;
        border-radius: 2px;
      }
    }
  }
  .registe-success{
    margin-top: 50px;
    text-align: center;
    p{
      color: #333;
      font-size: 36px;
    }
    .login-submit{
      display: inline-block;
      padding: 8px 20px;
      margin: 15px 0;
      font-size: 14px;
      color: #fff;
      border: 1px solid #6d7756;
      border-top-color: #7c8762;
      background-color: #7a924a;
      border-radius: 2px;
      background-image: linear-gradient(to bottom, #99ae69, #667c3a);
      box-shadow: 0px 1px 0px rgba(170,170,170,1), inset 0px 1px 1px rgba(255,255,255,0.7);
      cursor: pointer;
    }
  }
</style>