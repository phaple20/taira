import Vue from 'vue'
import Vuex from 'vuex'
import App from '../../AniuApp.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.use(Vuex);

console.log('index')

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
