import Vue from 'vue';
import './assets/css/global.scss';
import App from './App.vue';

/* 
new Vue({
  el: '#app',
  components: {
    App: App
  },
  template: '<App />'
});
 */
// render 写法
new Vue({
  render: h => h(App)
}).$mount('#app');