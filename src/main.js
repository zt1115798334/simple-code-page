import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {createStore} from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

const store = createStore()
new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
