import Vue from 'vue'
import App from './App.vue'

// leaflet css
// eslint-disable-next-line
import leafCss from 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
