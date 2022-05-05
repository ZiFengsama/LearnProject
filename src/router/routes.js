import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
// 路由配置信息
export default [
    {
        path:'/shopcart',
        name:'shopcart',
        component:ShopCart,
        meta:{show:true},
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true},
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        path:'/search/:keywords?',
        component:Search,
        meta:{show:true},
        name:"search"
    },
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    // 重定向 在项目跑起来时，访问 / ，立马让他定位到首页
    {
        path:'*',
        redirect:'/home'
    }
]