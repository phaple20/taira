import Vue from 'vue'
import Vuex from 'vuex'
import mv from './modules/modules_video'
//import getters from './getters'
import createVueAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mv,
  },
  plugins: [
    createVueAlong({
      name: 'taira_vuex_along',
      local: {
        list: ['ma'],
        isFilter: true,
      },
      session: {
        list: ['ma.al'],
      },
    }),
  ],
})
