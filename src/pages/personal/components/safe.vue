<template>
  <div class="personal-setting security-setting mt13">
    <dl>
      <dt>手机号：</dt>
      <dd>
        <input class="tel" type="text" v-model.trim="mobile">
        <button @click='getCode'>获取验证码</button>
      </dd>
    </dl>
    <dl>
      <dt>输入验证码：</dt>
      <dd><input type="text" v-model.trim="code"></dd>
    </dl>
    <dl>
      <dt>旧密码：</dt>
      <dd><input type="password" v-model.trim='pwd'></dd>
    </dl>
    <dl>
      <dt>新密码：</dt>
      <dd><input type="password" v-model.trim='newPwd'></dd>
    </dl>
    <dl>
      <dt>确认密码：</dt>
      <dd><input type="password" v-model.trim='pwdAgain'></dd>
    </dl>
    <button class="confirm-btn" @click='setNewPwd'>确认</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mobile: '', 
        code: '',
        pwd: '',
        newPwd: '',
        pwdAgain: '',
      }
    },
    methods: {
      getCode() {

      },
      setNewPwd() {

      }
    }
  }
</script>

<style src="./personalsetting.scss" lang="scss">
  
</style>