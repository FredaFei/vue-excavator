 import cart from 'js/cartService.js'
 import Pagination from 'components/pagination/pagination.vue'
 import order from 'js/orderService.js'
 import { Message } from 'element-ui'


 export default {
    name: 'cart',
    props: [],
    data() {
        return {
            listsData: null,
            lists: [],
            allSelected: false,
            total: 0,
            pageNum: 1,
            pageSize: 6
        }
    },
    created() {
        this.getLists()
    },
    computed: {
        selectIndex() {
            return this.$route.query.index
        },
        sum() {
            let sum = 0
            this.lists.forEach((item) => {
                if (item.isSelected) {
                    sum += item.sum
                }
            })
            return sum
        }
    },
    methods: {
        getLists() {
            cart.list({
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                type: this.selectIndex
            }).then((res) => {
                let data = res.data
                // 对数据做增删操作，先设置后赋值
                data.list.forEach((item) => {
                    item.isSelected = false
                })
                this.listsData = data
                this.total = data.total
                this.lists = data.list
            })
        },
        add(data) {
            let item = data.item
            if (item.number >= item.stock) {
                return;
            }
            if (data.month) {
                if (data.month >= 12) {
                    return;
                }
            }
            
            cart.add({
                month: data.month,
                number: data.number,
                type: this.selectIndex,
                unifiedMerchandiseId: item.unifiedMerchandiseId
            }).then((res) => {
                if (data.month) {
                    item.month++;
                } else {
                    item.number++;
                }
                item.sum = item.number * item.discount * (this.selectIndex == 1 ? item.month : 1)
            })
        },

        reduce(data) {
            let item = data.item
            if (data.month) {
                if (item.month <= 3) {
                    return
                }
            } else if (item.number <= 1) {
                return
            }
            cart.reduce({
                month: data.month,
                number: data.number,
                type: this.selectIndex,
                unifiedMerchandiseId: item.unifiedMerchandiseId
            }).then((res) => {
                if (data.month) {
                    item.month--;
                } else {
                    item.number--;
                }
                item.sum = item.number * item.discount * (this.selectIndex == 1 ? item.month : 1)
            })
        },
        update(data) {
            let item = data.item
            if (data.month) {
                if (item.month >= 12) {
                    item.month = 12;
                } else if (item.month < 3) {
                    item.month = 3
                }
                item.sum = item.number * item.discount * (this.selectIndex == 1 ? item.month : 1)
            } else {
                if (item.number >= item.stock) {
                    item.number = item.stock;
                } else if (item.number < 1) {
                    item.number = 1
                }
                item.sum = item.number * item.discount * (this.selectIndex == 1 ? item.month : 1)
            }
            cart.update({
                month: data.month,
                number: data.number,
                type: this.selectIndex,
                unifiedMerchandiseId: item.unifiedMerchandiseId
            }).then((res) => {
                item.sum = item.number * item.discount * (this.selectIndex == 1 ? item.month : 1)
            })

        },
        toggle(item) {
            if (item.isSelected) {
                this.allSelected = this.checkAll()
            } else {
                this.allSelected = false
            }
        },
        checkAll() {
            return this.lists.every((item) => {
                return item.isSelected
            })
        },
        toggleAll() {
            this.lists.forEach((item) => {
                item.isSelected = this.allSelected
            })
        },
        calsum() {

        },
        remove() {
            let idArr = []
            this.lists.forEach((item) => {
                if (item.isSelected) {
                    idArr.push(item.unifiedMerchandiseId)
                }
            })
            cart.remove({
                longList: idArr.toString(),
                type: this.selectIndex
            }).then((res) => {
                this.lists = this.lists.filter((item) => {
                    return !item.isSelected
                })
            })
        },
        changeNum(page) {
            this.pageNum = page
        },
        goApply() {
            var lists = this.lists.filter((item) => {
                return item.isSelected
            })
            if (!lists.length) {
                Message({
                    message: '请选中商品',
                    type: 'warning'
                })
                return
            }
            order.toOrder(lists,this.selectIndex)
        }
    },
    components: {
        Pagination
    }
 }
