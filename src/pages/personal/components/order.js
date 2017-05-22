import Pagination from 'components/pagination/pagination.vue'
import order from 'js/orderService.js'
import { MessageBox,Message } from 'element-ui'

export default {
    data() {
            return {
                index: 0,
                pageNum: 1,
                pageSize: 2,
                total: '',
                lists: ''
            }
        },
        created() {
            this.index = this.$route.query.index
            this.getLists()
        },
        methods: {
            getLists() {
                order.orderlist({
                    state: this.index,
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then(res => {
                    let data = res.data
                    this.lists = data.list
                    this.total = data.total
                })
            },
            cancel(orderId,index) {
                order.cancel({
                    orderId: orderId
                }).then(res=>{
                    Message(res.message)
                    this.lists.splice(index,1)
                })
            },
            remove(orderId,index) {
                order.delete({
                    orderId: orderId
                }).then(res=>{
                    Message(res.message)
                    this.lists.splice(index,1)
                })
            },
            sign(orderId) {
                order.sign({
                    orderId: orderId
                }).then(res=>{
                    Message(res.message)
                })
            },
            change(page) {
                this.pageNum = page
            }
        },
        watch: {
            '$route' () {
                this.index = this.$route.query.index
                this.getLists()
            }
        },
        components: {
            Pagination
        }
}
