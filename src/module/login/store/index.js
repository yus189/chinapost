import * as actions from './action'
import mutations from './mutation'

export default {
    namespaced : true,
    state : {
        auth: null,
        logined: true
    },
    actions,
    mutations
}