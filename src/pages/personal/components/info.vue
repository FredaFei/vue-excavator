<template>
  <div class="personal-setting editor-userinfo mt13">
    <dl>
      <dt>头像：</dt>
      <dd>
        <a href="javascript:;">
          <img :src="headImage" alt="" id='headImageUrl'>
          <span @click='editHead'>编辑头像</span>
        </a>
        <input id="imgfile" ref="imgfile" type="file" name='headImage' @change="upload" />
      </dd>
    </dl>
    <dl>
      <dt>昵称：</dt>
      <dd>
        <input type="text" v-model.trim='user.nickname'>
        <i>昵称长度不能超过40个汉字</i>
      </dd>
    </dl>
    <dl>
      <dt>姓名：</dt>
      <dd><input type="text" v-model.trim='user.name'></dd>
    </dl>
    <dl>
      <dt>邮箱：</dt>
      <dd><input type="text" v-model.trim='user.email'></dd>
    </dl>
    <dl>
      <dt>性别：</dt>
      <dd class="sex-chose">
        <input type="radio" name="sex" value='男' v-model='user.sexStr'><span>男</span>
        <input type="radio" name="sex" value='女' v-model='user.sexStr'><span>女</span>
      </dd>
    </dl>
    <button class="confirm-btn" @click='saveInfo'>确认保存</button>
  </div>
</template>

<script>
  import user from 'js/userService.js'
  import {isLegalPhone,isLegalPassword} from 'js/validata.js'
  import bus from 'js/bus.js'

  export default {
    data() {
      return {
        headImage: '',
        user: {
          nickname: '',
          name: '',
          email: '',
          sexStr: ''
        }
      }
    },
    methods: {
      editHead() {
        this.$refs.imgfile.click()
      },
      upload() {
        new Promise((resolve,reject)=>{
            let file = this.$refs.imgfile.files[0]
            const isJPG = file.type === 'image/jpeg'
            const isLimit2M = file.size/1024/1024 < 2
            const reader = new FileReader
            reader.onload = (e)=>{
                let url = e.target.result
                const img = new Image()
                img.onload = ()=>{
                    // img.width img.height
                    this.headImage = url
                    resolve(url)
                }
                img.src = url
            }
            reader.readAsDataURL(file)
        }).then(res=>{
            console.log(res)
            let data = new FormData()
            data.append('headimg',this.$refs.imgfile.files[0])
            user.headImg(data).then(res=>{
                this.headImage = res.data.headImg
            })
        })
        
        
      },
      saveInfo() {
        let userInfo = {
          nickname: this.user.nickname,
          headImage: this.headImage
        }
        bus.$emit('changeInfo', userInfo)
      }
    }
  }
</script>

<style src="./personalsetting.scss" lang="scss"></style>
<style>
  #imgfile {
    display: none;
  }
</style>
