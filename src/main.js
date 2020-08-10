import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import Echarts from "echarts";
import VueEcharts from 'vue-echarts';
import './plugins/vcharts';
import './style/index.css'
Vue.config.productionTip = false;
// Echarts引入

Vue.prototype.$echarts = Echarts;
//引入Vue-Echarts
Vue.component( 'v-chart',VueEcharts);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
