export default {
  state:{
    snackbar: false,
    y: 'bottom',
    x: 'right',
    style: 'info',
    mode: '',
    timeout: 4000,
    notifText: '',
    extra: null
  },
  getters:{
    getSnackbar: (state) => {
      return state.snackbar
    },
    getYpos: (state) => {
      return state.y
    },
    getXpos: (state) => {
      return state.x
    },
    getStyle: (state) => {
      return state.style
    },
    getMode: (state) => {
      return state.mode
    },
    getTimeout: (state) => {
      return state.timeout
    },
    getNotifText: (state) => {
      return state.notifText
    },
    getExtra: (state) => {
      return state.extra
    }
  },
  mutations:{
    pushNotification(state,notifications){
      state.snackbar = notifications.snackbar
      state.y = notifications.y
      state.x = notifications.x
      state.style = notifications.style
      state.mode = notifications.mode
      state.timeout = notifications.timeout
      state.notifText = notifications.notifText
      state.extra = notifications.extra
    },
    closeSnackbar(state){
      state.snackbar = false
    },
    snackValue(state,value){
      state.snackbar = value
    }
  },
  actions:{
    pushNotification({commit},notifications){
      commit('closeSnackbar')// Closes a posible previously opened snackbar
      setTimeout(()=>{// Delays the new snakbar a few milliseconds
        commit('pushNotification',notifications)
      }, 140)
    },
    closeSnackbar({commit}){
      commit('closeSnackbar')
    },
    snackValue({commit},value){
      commit('snackValue',value)
    }
  }
}