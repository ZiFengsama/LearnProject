import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
// 引入仓库
import store from '@/store';
Vue.component(TypeNav.name,TypeNav)

import {reqCategoryList} from '@/api';
reqCategoryList();

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  // 注册仓库，组件实例身上会多一个属性$store属性
  store
}).$mount('#app')
