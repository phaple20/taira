import Vue from 'vue'
import App from '../../AniuApp.vue'
import router from './router'
import store from '../../aniustore'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
