import Vue from 'vue'
import App from './App.vue'
import enrollButton from './components/enrollButton.vue'

Vue.config.productionTip = false

Vue.component(`enrollButton`, enrollButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
