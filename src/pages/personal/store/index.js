import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from './mutations.js'
import actions from './actions.js'

export default new Vuex.Store({
    state: {
        lists: [],
        total: 0,
        edit: false
    },
    mutations,
    actions
})