import Pagination from 'components/pagination/pagination.vue'
import order from 'js/orderService.js'
import { MessageBox,Message } from 'element-ui'

export
default {
    data() {
        return {
            index: 0,
            lists: '',
            pageSize: 2,
            pageNum: 1,
            total: ''
        }
    },
    created() {
        this.index = this.$route.query.index
        this.getLists()
    },
    methods: {
        getLists() {
            order.getIntentionLists({
                businessType: this.index,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res=>{
                let data = res.data
                this.lists = data.list
                this.total = data.total
            })
        },
        cancel(id, index) {
            MessageBox('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                order.cancel({
                    orderId: id
                }).then(res=>{
                    Message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.lists.splice(index,1)
                })
              
            }).catch(() => {
              // Message({
              //   type: 'info',
              //   message: '已取消删除'
              // });          
            });
        },
        change(page) {
            
        }
    },
    watch: {
        '$route'(){
            this.index = this.$route.query.index
            this.getLists()
        }
    },
    components: {
        Pagination
    }
}