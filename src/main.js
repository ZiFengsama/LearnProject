import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 定义全局组件：在入口文档注册一次后，在任何组件中都能使用
import TypeNav from '@/components/TypeNav'
import CarouselPage from '@/components/Carousel'
import PaginationModule from '@/components/Pagination' 
// 引入仓库
import store from '@/store';
Vue.component(TypeNav.name,TypeNav)
Vue.component(CarouselPage.name,CarouselPage)
Vue.component(PaginationModule.name,PaginationModule)

// import {reqCategoryList} from '@/api';
// reqCategoryList();

import '@/mock/mockServe';
// 引入swiper样式
import "swiper/css/swiper.css"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  // 注册仓库，组件实例身上会多一个属性$store属性
  store
}).$mount('#app')
