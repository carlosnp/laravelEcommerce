import './axiosDeclared.js'

export default{
  state:{
    status: '',
    completed: false,
    pkUser: localStorage.getItem('id') || '',
    usrName: localStorage.getItem('name') || '',
    TokenUser: localStorage.getItem('token') || '',
    usrRemember: false,
    verified: 'rock'
  },
  getters:{
    isAuth2: (state) => !!state.TokenUser && state.completed,
    isAuth: (state) => !!state.TokenUser,
    authStatus: (state) => state.status,
    dataUser: (state) => {
      let user = {
        'pkUser': state.pkUser,
        'nmUser': state.usrName
      }
      return user
    },
    isVerified: (state) => state.verified
  },
  mutations:{
    loginToken: (state, token) => {
      state.TokenUser = token
      state.status = 'Success'
    },
    loginUser: (state, usr) => {
      state.pkUser = usr.id
      state.usrName = usr.name
    },
    storeUser: (state, user) => {
      state.usrRemember = user.remember
    },
    logoutTkn: (state) => {
      state.TokenUser = ''
      state.status = ''
      state.pkUser = ''
    },
    logoutUser: (state) => {
      state.usrName = ''
      state.usrRemember = false
      state.verified = null
    },
    errorToken: (state) => {
      state.status = 'error'
    },
    loadingToken: (state) => {
      state.status = 'loading'
    },
    setCompleted: (state, value) => {
      state.completed = value
    },
    setVerifiedEmail: (state, value) => {
      state.verified = value
    }
  },
  actions:{
    loginToken: ({ commit, getters }, info) => {
      return window.axios
        .post(getters.logInUrl, info.user)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem('id', response.data.success.id)
            localStorage.setItem('name', response.data.success.name)
            localStorage.setItem('token', response.data.success.token)
            window.axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            window.axios.defaults.headers['user'] = localStorage.getItem('id')
            commit('loginToken', response.data.success.token)
            commit('loginUser', response.data.success)
            commit('storeUser', info.user)
          }
          return response
        }).catch((error) => {
          commit('errorToken', error)
          localStorage.removeItem('id')
          localStorage.removeItem('name')
          localStorage.removeItem('token')
          if (error.response) {
            return error.response
          }
          return error
        })
    },
    logoutToken: ({ commit,getters }) => {
      commit('logoutTkn')
      commit('logoutUser')
      return window.axios
        .get(getters.logOutUrl)
        .then((response) => {
          return response
        }).catch((error) => {
          if (error.response) {
            return error.response
          }
          return error
        })
    },
    regisUser: ({ commit,getters }, info) => {
      return window.axios
        .post(getters.regUserUrl, info.user)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem('id', response.data.success.id)
            localStorage.setItem('name', response.data.success.name)
            localStorage.setItem('token', response.data.success.token)
            window.axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            commit('loginToken', response.data.success.token)
            commit('loginUser', response.data.success)
          }
          return response
        }).catch((error) => {
          if (error.response) {
            return error.response
          }
          return error
        })
    },
    updateUser: ({ commit, getters }, info) => {
      return window.axios
        .patch(getters.updateUserUrl, info.user)
        .then((response) => {
          if (response.data.success) {
            if (info.user.name) {
              localStorage.setItem('name', info.user.name)
              commit('loginUser', info.user)
            }
          }
          return response
        }).catch((error) => {
          if (error.response) {
            return error.response
          }
          return error
        })
    },
    resendEmailVerif: ({getters}) => {
      return window.axios
        .get(getters.resendEmailUrl(localStorage.getItem('id')))
        .then((response) => {
          return response
        }).catch((error) => {
          if (error.response) {
            return error.response
          }
          return error
        })
    },
    setCompleted: ({ commit }, value) => {
      commit('setCompleted', value)
    },
    setVerifiedEmail: ({ commit }, value) => {
      commit('setVerifiedEmail', value)
    }
  }
}