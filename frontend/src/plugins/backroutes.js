import './axiosDeclared.js'
// # API REST URL
let apiUrl = process.env.VUE_APP_API_URL

export default {
  getters:{
    getUserUrl: (state) => {
      return apiUrl + 'user'
    },
    regUserUrl: (state) => {
      return apiUrl + 'register'
    },
  
    logInUrl: (state) => {
      return apiUrl + 'login'
    },
  
    logOutUrl: (state) => {
      return apiUrl + 'logout'
    },
  
    updateUserUrl: (state) => {
      return apiUrl + 'update'
    },
  
    delUserUrl: (state) => (id) => {
      return apiUrl + 'delete/' + id
    },
  
    // Email verification URLs
    checkEmailUrl: (state) => (id) => {
      return apiUrl + 'email/check/' + id
    },
  
    resendEmailUrl: (state) => (id) => {
      return apiUrl + 'email/resend/' + id
    },
  
    // Password Reset URLs
    passRequestUrl: (state) => {
      return apiUrl + 'password/request'
    },
  
    passFindUrl: (state) => (token) => {
      return apiUrl + 'password/find/' + token
    },
  
    passResetUrl: (state) => {
      return apiUrl + 'password/reset'
    },

    getClient: (state) => (val) => {
      return apiUrl + `client/${val['prefix']}/${val['ced']}`
    }
  }
}