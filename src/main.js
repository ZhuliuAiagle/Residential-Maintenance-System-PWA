import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import 'vue-material/dist/theme/default.css'
import './registerServiceWorker'
import router from './router'


Vue.prototype.$url = "http://10.110.18.220:8080/HouseManage/Housemanage";



Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data(){
    return{
      $role : "Tenant",
      $house_id : "",
      $house_name : "",
      $house_address : "",
      $house_owner : "",
      $house_renter : "",
      $cluster_id : "",
      $cluster_name : "",
      $cluster_classified : false
    }
  }
}).$mount('#app')
