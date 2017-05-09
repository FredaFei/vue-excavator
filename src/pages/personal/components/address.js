import Pagination from 'components/pagination/pagination.vue'
import address from 'js/addressService.js'
import EditAddress from './editAddress.vue'
import { Message } from 'element-ui'
import { mapState,mapActions,mapMutations } from 'vuex'

export default {
  data() {
    return {
      // lists: '',
      // edit: false,
      add: null, // 修改新增实例
      pageSize: 10,
      pageNum: 1,
      total: 0
    }
  },
  computed: mapState(['lists','edit']),
  created() {
    this.getLists()
  },
  methods: {
    ...mapActions(['getLists','deleteAddress','setDefault']),
    ...mapMutations(['changeEdit']),
    editAddress(add) {
      this.add = add
      this.changeEdit({edit: true})
    }
  },
  components: {
    Pagination,
    EditAddress
  }
}

