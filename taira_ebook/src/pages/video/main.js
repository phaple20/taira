import Vue from 'vue'
import App from '../../AniuApp.vue'
import router from './router'
import store from '../../tairastore'
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

console.log('video main.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
