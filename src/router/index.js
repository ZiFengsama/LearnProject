import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes'
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数：告诉原来push方法，你该往哪里跳（传递哪些参数）
// call||appy区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call和apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function(localtion,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,localtion,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(localtion,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,localtion,()=>{},()=>{})
    }
}


Vue.use(VueRouter)

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0};
    }
})
