import Pagination from 'components/pagination/pagination.vue'
import address from 'js/addressService.js'
import EditAddress from './editAddress.vue'
import { Message } from 'element-ui'
import { mapState,mapActions,mapMutations } from 'vuex'
export default {
  data() {
    return {
      add: null,
      pageSize: 10,
      pageNum: 1
    }
  },
  created() {
    this.getLists()
  },
  computed: mapState(['lists','edit','total']),
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

