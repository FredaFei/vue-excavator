import './productLists.scss'
require('normalize.css')

import { Message } from 'element-ui'

import Top from 'components/top/top.vue'
import Search from 'components/search/search.vue'
import Foot from 'components/foot/foot.vue'
import Logstate from 'components/logstate/logstate.vue'
import Minicart from 'components/minicart/minicart.vue'
import Pagination from 'components/pagination/pagination.vue'

import cart from 'js/cartService.js'
import product from 'js/productService.js'
import bus from 'js/bus.js'

import utils from 'js/utils.js'

new Vue({
    el: '#app',
    components: {
        Top,
        Foot,
        Search,
        Logstate,
        Minicart,
        Pagination
    },
    data: {
        state: parseInt(utils.getQuery('state')) || 1,
        positionMsg: '',
        keyword: utils.getQuery('keyword'),
        classifyList: '',
        typeList: '',
        brandIndex: 0,
        typeIndex: 0,
        brandId: -1,
        typeId: -1,
        lists: '',
        total: 0,
        pageSize: 8,
        pageNum: 1
    },
    created() {
        this.getPositionMsg()
        if (!this.keyword) {
            this.getClassify()
        }
        this.query()
    },
    methods: {
        getClassify() {
            product.classify().then(res => {
                this.classifyList = res.data.classifyList
                this.typeList = this.classifyList[this.brandIndex].childrenList
            })
        },
        getPositionMsg() {
            if (this.keyword) {
                this.positionMsg = "搜索"
            } else {
                switch (this.state) {
                    case 1:
                        this.positionMsg = '挖掘机租赁'
                        break;
                    case 2:
                        this.positionMsg = '挖掘机销售'
                        break;
                    case 3:
                        this.positionMsg = '配件商城'
                        break;
                }
            }
        },
        selectBrand(index) {
            this.brandIndex = index
            this.typeList = this.classifyList[index].childrenList
            this.brandId = this.classifyList[index].id
            this.query()
        },
        selectType(index, item) {
            this.typeIndex = index
            this.typeId = item.id
            this.query()
        },
        query(callBack) {
            let reqUrl = ''
            let data = {
                brandId: this.brandId,
                keywords: this.keyword,
                typeId: this.typeId,
                type: this.state,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            if (this.state === 4) {
                reqUrl = product.articles(data)
            } else {
                reqUrl = product.lists(data)
            }
            reqUrl.then(res => {
                this.lists = res.data.list
                this.total = res.data.total
                if (callBack) {
                    callBack()
                }
            })
        },
        add(item) {
            cart.add({
                month: this.state == 1 ? 1 : undefined, // 租
                number: 1,
                type: this.state,
                unifiedMerchandiseId: item.unifiedMerchandiseId
            }).then((res) => {
                Message(res.message)
                bus.$emit('add', item.unifiedMerchandiseId)
            })
        },
        changePage(page) {
            this.pageNum = page
            this.query(() => {
                window.scrollTo(0, 0)
            })
        }
    }
})
