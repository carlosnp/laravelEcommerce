import axios from 'axios'
window.axios = axios;

if(localStorage.getItem("token") != "" && localStorage.getItem("token") != null){
  window.axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    window.axios.defaults.headers["user"] = localStorage.getItem("id");
}