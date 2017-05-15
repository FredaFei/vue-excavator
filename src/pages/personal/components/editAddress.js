import { Message } from 'element-ui'
import address from 'js/addressService.js'
import { mapActions,mapMutations } from 'vuex'
import {isLegalPhone, isLegalPassword, isLegalValidate,isLegalName} from 'js/validata.js'

export default {
  props: ['add'], // 修改地址
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
      address.city({
        province: this.addr.provinceList
      }).then(res=>{
        this.cityLists = res.data.cityList
      })
    },
    getDistrict() {
      address.district({
        city: this.addr.districtList
      }).then(res=>{
        this.districtLists = res.data.districtList
      })
    },
    saveAddress() {
      // 验证
      if (!this.addr.name) {
        Message('请输入姓名')
        return;
      }
      if (!isLegalName(this.addr.name)) {
        Message('请输入2-8位字符的名字')
        return;
      }
      if (!this.addr.mobile) {
        Message('请输入手机号')
        return;
      }
      if (!isLegalPhone(this.addr.mobile)) {
        Message('请输入正确的手机号')
        return;
      }
      let data = { address: this.addr }
      this.add === null ? this.addAddress(data) : this.updateAddress(data)
    },
    cancel(){
      this.changeEdit({edit: false})
    },
    ...mapActions(['updateAddress','addAddress']),
    ...mapMutations(['changeEdit'])
  }
}
