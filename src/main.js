import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VDistpicker from 'v-distpicker'
import {Swipe, SwipeItem, Button, Field, MessageBox} from 'mint-ui'
import './mock/mockServer'
import '../static/css/reset.css'
import  './common/stylus/index.styl'

Vue.component('v-distpicker', VDistpicker)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

new Vue({
  el: '#app',
  render: h => h(App),
  router,  // 配置路由器
  store //配置vuex
})
