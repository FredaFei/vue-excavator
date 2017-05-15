import * as types from './mutation-types.js'

const mutations = {
    [types.RECEIVE_ADDRESSES](state, { lists,total }) {
        state.lists = lists
        state.total = total
    },
    [types.DELETE_ADDRESS](state, { index }) {
        state.lists.splice(index,1)
        state.total --
    },
    [types.SET_DEFAULT](state, { address }) {
        state.lists.forEach(list=>{ list.acquiesce = 2 })
        address.acquiesce = 1
    },
    [types.ADD_ADDRESS](state, { address }) {
        if (address.acquiesce===1) {
            state.lists.forEach(list=>{ list.acquiesce = 2 })
            address.acquiesce = 1
        }
        state.lists.unshift(address)
        state.total ++
        state.edit = false
    },
    [types.UPDATE_ADDRESSS](state, { address }) {
        if (address.acquiesce===1) {
            state.lists.forEach(list=>{ list.acquiesce = 2 })
            address.acquiesce = 1
            state.edit = false
        }
    },
    changeEdit(state, {edit}){
        state.edit = edit
    }

}

export default mutations