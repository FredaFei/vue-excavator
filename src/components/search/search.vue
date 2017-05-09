<template>
  <div class="search wrapper-width">
    <div class="main-content-w">
      <div class="content-title">
        <i class="logo-red"></i>
        <p>饥人谷挖掘机叉车服务平台</p>
      </div>
      <div class="search-box">
        <div class="search-type-btn clearfix" @click="toggle" @mouseleave="show=false">
          {{curList.name}}
          <i :class="{'arrow-down':!show,'arrow-up':show}" @click="toggle"></i>
          <div class="search-ul-wrap">
            <ul v-if="show">
              <li v-for="(list,index) in lists"><a href="javascript:;" @click.stop="change(index)">{{list.name}}</a></li>
            </ul>
          </div>
        </div>
        <input type="text" v-model.trim='keyword' :placeholder="'请输入您想搜索的'+ curList.msg">
        <button @click='search'>
          <i class="icon-search"></i>
        </button>
      </div> 
    </div>
  </div>
</template>

<script>
  import vm from './search.js'
  export default vm
</script>
