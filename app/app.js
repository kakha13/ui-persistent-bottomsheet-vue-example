import Vue from 'nativescript-vue'

import App from './components/App'

import BottomSheetPlugin from '@nativescript-community/ui-persistent-bottomsheet/vue';
Vue.use(BottomSheetPlugin);

new Vue({
  render: (h) => h(App),
}).$start()
