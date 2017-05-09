import { Message } from 'element-ui'
import address from 'js/addressService.js'
import { mapActions,mapMutations } from 'vuex'

export default {
  props: ['add'],
  data() {
    return {
      provinceLists: '',
      cityLists: '',
      districtLists: '',
      addr: this.add ? this.add : {
        name: '',
        mobile: '',
        province: '',
        district: '',
        city: '',
        address: '',
        acquiesce: 1
      }
    }
  },
  created(){
    this.getProvince()
    if (this.add) {
      this.getCity()
      this.getDistrict()
    }
    
  },
  methods: {
    getProvince() {
      address.province().then(res=>{
        this.provinceLists = res.data.provinceList
      })
    },
    getCity() {
      address.city({province: this.addr.province}).then(res=>{
        this.cityLists = res.data.cityList
      })
    },
    getDistrict() {
      address.district({city: this.addr.city}).then(res=>{
        this.districtLists = res.data.districtList
      })
    },
    saveAddress() {
      // 验证信息
      let data = {address: this.addr}
      this.add == null ? this.addAddress(data) : this.updateAddress(data)
    },
    cancel() {
      this.changeEdit({edit: false})
    },
    ...mapActions(['addAddress','updateAddress']),
    ...mapMutations(['changeEdit'])
  }
}
