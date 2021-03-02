import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        actions
    })
}
