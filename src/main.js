import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import elementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/css/global.css"
/* 注意echarts  5的版本会报错 用4.1.0的版本 */
import * as echarts from 'echarts'
/* chart-gl 安装1.1.1 */
import "echarts-gl"

Vue.prototype.$echarts=echarts

axios.defaults.baseURL="http://127.0.0.1:3000/"
Vue.prototype.$http = axios

Vue.use(elementUi)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
