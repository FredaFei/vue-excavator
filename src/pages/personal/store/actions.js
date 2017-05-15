import * as types from './mutation-types.js'
import addressAPI from 'js/addressService.js'
import { Message } from 'element-ui'

const actions = {
    getLists({commit}){
        addressAPI.addresslist().then(res=>{
            commit(types.RECEIVE_ADDRESSES,{
                lists: res.data.list,
                total: res.data.total
            })
        })
    },
    deleteAddress({commit}, {id,index}){
        addressAPI.delete({
            consigneeId: id
        }).then(res=>{
            commit(types.DELETE_ADDRESS,{index})
            Message({message: res.message})
        })
    },
    setDefault({commit}, {address}){
       addressAPI.setDefault({
            consigneeId: address.id
        }).then(res=>{
            commit(types.SET_DEFAULT,{address})
            Message({message: res.message})
        }) 
    },
    addAddress({commit}, {address}){
       addressAPI.add(address).then(res=>{
            commit(types.ADD_ADDRESS,{address})
            Message({message: res.message})
       })
    },
    updateAddress({commit}, {address}){
        addressAPI.update(address).then(res=>{
            commit(types.UPDATE_ADDRESSS,{address})
            Message({message: res.message})
       })
    }
}

export default actions