export default {
  state:{
    mini:false,
    dialogin:false,
    diarecov:false,
    dark:false
  },
  getters:{
    getMiniTooltip: (state) => {
      return state.mini
    },
    getDialogin: (state) => {
      return state.dialogin
    },
    getDiarecov: (state) => {
      return state.diarecov
    },
    getDarkTheme: (state) => {
      return state.dark
    }
  },
  mutations:{
    miniTooltips(state,minitool){
      state.mini = minitool
    },
    diaLogin(state,login){
      state.dialogin = login
    },
    diaRecov(state,login){
      state.diarecov = login
    },
    toggleDark(state,darked){
      state.dark = darked
    }
  },
  actions:{
    miniTooltips({commit},minitool){
      commit('miniTooltips',minitool)
    },
    diaLogin({commit},login){
      commit('diaLogin',login)
    },
    diaRecov({commit},login){
      commit('diaRecov',login)
    },
    closediarecov({commit}){
      commit('diaRecov',false)
    },
    closedialogin({commit}){
      commit('diaLogin',false)
    },
    toggleDark({commit},darked){
      commit('toggleDark',darked)
    }
  }
}