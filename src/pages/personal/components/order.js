import Pagination from 'components/pagination/pagination.vue'
import order from 'js/orderService.js'

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
            cancel(orderId) {

            },
            remove(orderId) {

            },
            sign(orderId) {

            },
            change(page) {

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
