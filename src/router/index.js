import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'
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

// 对外暴露VueRouter类的实例
let router =  new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0};
    }
})

// 全局守卫
router.beforeEach(async(to,from,next)=>{
    // to:可以获取到要跳转到那个路由信息
    // from:可以获取到从哪个路由组件而来的信息
    // next:放行； next()放行，next(path)放行到指定的路由，        next(false)中断当前的导航
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 判断用户是否登录
    if(token){
        console.log(token);
        // 用户已经登录
        if(to.path=='/login'){
            // 用户登录了还想去首页，跳转到首页
            next('/');
        }else{
            // 如果已经有用户名(说明有数据)
            if(name){
                next();
            }else{
                // 如果没有用户名，派发action 获取数据
                // 获取用户信息在首页
                try {
                    await store.dispatch('getUserInfo')
                    next();
                } catch (error) {
                    // token失效了,重新登录
                    // 清除token
                    store.dispatch('userLogout');
                    next('/login');
                }
            }
            
        }
    }else{
        // 未登录暂时没有处理完毕，先就这样，后期处理
        next();
    }
    next();
})

export default router;
