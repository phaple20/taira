const mv = {
  state: {
    v_index: 123,
    menuVisible: false,
  },
  mutations: {
    //   SET_FILENAME: (state, fileName) => {
    //     state.fileName = fileName
    //   },
    //   SET_MENUVISIBLE: (state, menuVisible) => {
    //     state.menuVisible = menuVisible
    //   }
    SET_V_INDEX: (state, v_index) => {
      state.v_index = v_index
    },
  },
  actions: {
    //   setFileName: ({ commit }, fileName) => {
    //     return commit('SET_FILENAME', fileName)
    //   },
    //   setMenuVisible: ({ commit }, menuVisible) => {
    //     return commit('SET_MENUVISIBLE', menuVisible)
    //   }
    setVIndex: ({ commit }, v_index) => {
      return commit('SET_V_INDEX', v_index)
    },
  },
  getters: {
    v_index: (state) => state.v_index,
  },
}

export default mv
