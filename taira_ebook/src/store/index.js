import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test: 1,
        name: 'jjk',
        age: 18,
        num: 1
    },
    mutations: {
        SET_TEST: (state, newTest) => {
            state.test = newTest
        },
        change(state, a) {
            state.num += a
        }
    },
    actions: {
        setTest: ({ commit, state }, newTest) => {
            return commit('SET_TEST', newTest)
        }
    },
    modules: {
    }
})
