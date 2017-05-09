import './pagination.scss'
export default {
  props: {
    total: {
      type: Number,
      require: true
    },
    display: {
      type: Number,
      default: 3
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      curPage: this.pageNum,
      goPage: ''
    }
  },
  computed: {
    totalPages() {
      let total = this.total
      let pageSize = this.pageSize
      if (total%pageSize===0) {
        return total/pageSize
      }else{
        return parseInt(total/pageSize) + 1
      }
    },
    curPagesList() {
      let arr = [] // 展示页列表
      let curInt = 0
      let display = this.display
      if (this.curPage > display) {
        if (this.curPage % display === 0) {
          curInt = this.curPage / display - 1
        }else{
          curInt = parseInt(this.curPage / display)
        }
      }
      let start = curInt*display+1
      let end = (curInt+1)*display
      if (end > this.total) {
        end = this.total
      }
      for (let i = start; i <= end; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    selectPage(index) {
      this.curPage = index;
    },
    prevPage() {
      this.curPage--;
    },
    nextPage() {
      this.curPage++;
    },
    goToPage() {
      if (this.goPage < 1 || this.goPage > this.total) {
        return
      } 
      this.curPage = this.goPage;
    }
  },
  watch: {
    curPage() {
      this.$emit('change',this.curPage)
    }
  }
}
