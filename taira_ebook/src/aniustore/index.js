import Vue from 'vue'
import Vuex from 'vuex'
import CourseData from './modules/Module_CourseData'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CourseData: CourseData
    }
})