const book = {
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
    }
}

export default book