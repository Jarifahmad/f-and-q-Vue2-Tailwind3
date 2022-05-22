import Vue from 'vue'
import App from './App.vue'
import EnrollButton from './components/EnrollButton.vue'

Vue.config.productionTip = false

Vue.component(`EnrollButton`, EnrollButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
