import Vue from './vue/platforms/web/entry-runtime-with-compiler';

Vue.config.productionTip = false;

debugger;
new Vue({
  data() {
    return {
      text: 'Hello World'
    };
  },
  template: `<p>{{ text }}</p>`
}).$mount('#app');
