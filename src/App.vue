<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{Header,Footer},
  mounted(){
    // 通知vuex发送请求，获取数据，存储于仓库当中
    // 只发起一次
        this.$store.dispatch('categoryList');
  }
}
</script>

