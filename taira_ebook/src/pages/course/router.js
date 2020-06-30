import Vue from 'vue'
import Router from 'vue-router'
import course from './course.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'course',
            component: course
        },
    ]
})
