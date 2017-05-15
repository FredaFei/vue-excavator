<template>
  <div class="main-content-w clearfix">
      <!--left-->
      <section id="leftNav">
        <!--登录信息-->
        <div class="left-fault-query" v-if="user">
          <img :src="user.headImage" alt="头像">
          <p>{{user.nickname}}</p>
          <p>{{user.mobile}}</p>
        </div>
        <div class="left-fault-query" v-else>
          <img src="./imgs/face-img2.jpg" alt="头像">
        </div>
        <!--导航-->
        <ul class="left-nav">
          <li v-for="(tab,index) in tabs" :key="index" @click="changeTab(index)">
            <a href="javascript:;"><i :class="'icon-'+tab.icon"></i>{{tab.name}}</a>
              <ul class="left-subnav" v-show="index==tabIndex">
                <li v-for="(list,index) in tab.lists" :class="{'select':index==selectIndex}" @click.stop=changeSlect(index)><a href="javascript:;">{{list}}<i class="icon-fanye"></i></a></li>
              </ul>
          </li>
        </ul>
      </section>
      <!--right-->
      <div class="mt13 right-content">
        <!-- 路由切换 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import bus from 'js/bus.js'
  import tabs from './tabConfig.js'
  export default {
    data() {
      return {
        user: null,
        tabs,
        selectIndex: 0,
        tabIndex: 0
      }
    },
    created(){
      bus.$on('login',(user)=>{
        this.user = user
      });
      bus.$on('changeInfo', (userInfo)=>{
        this.user.nickname = userInfo.nickname
        this.user.headImage = userInfo.headImage
      })
      let pathString = location.href.split('#/')[1]
      if (pathString) { // 一级路由带参数
        if (pathString.indexOf('?')>-1) {
          let path = pathString.split('?')
          this.tabIndex = tabs.findIndex(item=>{
            return item.path == path[0]
          })
          this.selectIndex = path[1].split('=')[1]
        }else{ // 二级路由
          let path = pathString.split('/')
          this.tabIndex = tabs.findIndex(item=>{
            return item.path == path[0]
          })
          this.selectIndex = this.tabs[this.tabIndex].children.findIndex(item=>{
            return item.path == path[1]
          })
        }
      }
      let tab = this.tabs[this.tabIndex]
        if (tab.children) {
          this.$router.replace({
            path: '/'+tab.path + '/' + tab.children[this.selectIndex].path
          })
        }else{
          this.$router.replace({
            path: '/'+tab.path,
            query: { index: this.selectIndex }
          })
        }
    },
    methods: {
      changeTab(index){
        this.tabIndex = index;
        this.selectIndex = -1
      },
      changeSlect(index){
        this.selectIndex = index;
        window.scrollTo(0,0)
        let tab = this.tabs[this.tabIndex]
        if (tab.children) {
          this.$router.replace({
            path: '/'+tab.path + '/' + tab.children[index].path
          })
        }else{
          this.$router.replace({
            path: '/'+tab.path,
            query: { index: index }
          })
        }
        
        
      }
    }
  }
</script>
