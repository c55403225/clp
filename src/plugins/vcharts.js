import Vue from 'vue';
import VELine from 'v-charts/lib/line.common';
import VCharts from 'v-charts';
import 'v-charts/lib/style.css'

Vue.component('ve-line',VELine);
Vue.use(VCharts)