<template>
  <div class="feedback">
    <h4 class="mt13">欢迎您给我们提出网站使用感受和建议！</h4>
    <div class="feedback-content mt13">
      <dl>
        <dt>标题：</dt>
        <dd><input type="text" v-model.trim='title'></dd>
      </dl>
      <dl>
        <dt>内容：</dt>
        <dd>
          <textarea rows="8" cols="48" placeholder="内容为必填选项！" v-model.trim='content' ></textarea>
          <p>请上传凭证</p>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </dd>
      </dl>
      <dl>
        <dt>验证码：</dt>
        <dd>
          <input type="text" v-model.trim='code'>
          <img :src="codeUrl" alt="验证码" @click='changeCode' width="80" height="30">
          <button @click='feedSubmit'>提交</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import user from 'js/userService.js'
  import { Upload, Dialog} from 'element-ui'
  Vue.use(Upload)
  Vue.use(Dialog)

  export default {
    data() {
      return {
        title: '',
        content: '',
        code: '',
        codeUrl: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    created(){
      this.changeCode()
    },
    methods: {
      changeCode() {
        user.feedback().then(res=>{
          this.codeUrl = res.data.codeImg
        })
      },
      feedSubmit() {

      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>


<style lang="scss">
  @import "../../../modules/sass/variables.scss";
  .feedback-content {
    input{
      line-height: 28px;
    }
    img {
      margin-left: 10px;
      vertical-align: bottom;
    }
    button {
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      border-radius: 3px;
      background: #ff7200;
      display: block;
      margin-top: 20px;
      padding: 0 18px;
    }
   
    dd textarea,dd input{
      border: 1px solid #bcbcbc;
    }
  }
</style>
