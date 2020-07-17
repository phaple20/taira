import Vue from 'vue'
import Router from 'vue-router'
import video from './video.vue'

Vue.use(Router)
console.log('video router')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'video',
      component: video,
    },
  ],
})
