import * as types from './mutation-types.js'
import addressAPI from 'js/addressService.js'
import { Message } from 'element-ui'

const actions = {
    getLists({commit}){
        addressAPI.addresslist().then(res=>{
            commit(types.RECEIVE_ADDRESSES, {
                lists: res.data.list,
                total: res.data.total
            })
        })
    },
    deleteAddress({commit},{ id,index }){
        addressAPI.delete({
            consigneeId: id
        }).then(res=>{
            Message({message: res.message})
            commit(types.DELETE_ADDRESS, { index })
        })
    },
    setDefault({commit}, {address}){
        addressAPI.setDefault({
            consigneeId: address.id
        }).then(res=>{
            Message({message: res.message})
            commit(types.SET_DEFAULT,{ address })
        })
    },
    addAddress({commit}, {address}){
        addressAPI.add(address).then(res=>{
            Message({message: res.message})
            commit(types.ADD_ADDRESS,{ address })
        })
    },
    updateAddress({commit},{address}){
        addressAPI.update(address).then(res=>{
            Message({message: res.message})
            commit(types.UPDATE_ADDRESSS, { address })
        })
    }
}

export default actions