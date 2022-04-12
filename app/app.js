import Vue from 'nativescript-vue'

import App from './components/App'

import BottomSheetPlugin from '@nativescript-community/ui-persistent-bottomsheet/vue';
Vue.use(BottomSheetPlugin);

// problem fixed
import { install as installGestures } from '@nativescript-community/gesturehandler';
installGestures();

Vue.config.silent = false
new Vue({
  render: (h) => h(App),
}).$start()
