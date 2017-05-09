<template >
  <div class="page-turn" >
    <button class="prev-btn" @click='prevPage' :disabled="curPage<=1">
      <i class="icon-fanye"></i>
      上一页
    </button>
    <div style="display: inline-block;" class="pagination">
        <a v-for='page in curPagesList' :class="{'active': page===curPage}" @click='selectPage(page)' href="javascript:;">{{page}}</a>
    </div>
    <span >...</span>
    <button class="nextPage" @click='nextPage' :disabled="curPage>=total">
      下一页
      <i class="icon-fanye"></i>
    </button>
    <span >共{{totalPages}}页，到第<input type="text"  v-model.trim.number="goPage">页</span>
    <button class="comfirm-btn"  @click='goToPage' >确定</button>
  </div>
</template>

<script>
  import vm from './pagination.js'
  export default vm
</script>
