// api接口统一管理
import requests from './request';
import mockRequests from './mockAjax';

// 三级联动接口
// api/product/getBaseCategoryList  get 无参数

const reqCategoryList =()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get',
    });
}

// 获取banner （Home首页轮播图接口）
const reqGetBannerList = ()=>{
    return mockRequests.get('/banner');
}
// 获取floor数据
const reqFloorList = ()=>{
    return mockRequests.get('/floor')
}
// 获取搜索模块数据 地址：/api/list 请求方式：post
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }
// 当前函数需要需要接受外部传递参数
// 当前这个接口（获取搜索模块数据），给服务器传递一个默认参数【至少是一个空对象】
const reqGetSearchInfo = (params)=>{
    return requests({
        url:"/list",
        method:'POST',
        data:params
    })
}

// 获取产品详情信息的接口 URL: /api/item/{ skuId } 请求方式GET

const reqGoodsInfo = (skuId)=>{
    return requests({
        url:`/item/${skuId}`,
        method:'GET',
    });
}

// 将产品添加到购物车当中（获取更新某一个产品的个数）
const reqAddOrUpdateShopCart = (skuId,skuNum)=>{
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'POST'
    })
}

// 获取购物车数据的接口
// url:/api/cart/cartList 请求方式 GET
const reqCartList = ()=>{
    return requests({
        url:'/cart/cartList',
        method:'GET'
    })
}

// 删除购物车产品的接口
// url:/api/cart/deleteCart/{skuId} method:DELETE
const reqDeleteCartById = (skuId)=>{
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:'DELETE'
    })
}

// 修改商品的选中状态
// url:/api/cart/checkeCart/{skuId}/{isChecked} method:GET
const reqUpdateCheckedById = (skuId,isChecked)=>{
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'GET'
    })
}

// 获取验证码
// url:/api/user/passport/sendCode/phone method:GET
const reqGetCode = (phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'GET'
    })
}

// 注册
// url:/api/user/passport/register method:POST 参数data
const reqUserRegister = (data)=>{
    return requests({
        url:'/user/passport/register',
        data,
        method:'POST'
    })
}

// 登录
// url:/api/user/passport/login method:POST
const reqUserLogin = (data)=>{
    return requests({
        url:'/user/passport/login',
        data,
        method:'POST'
    })
}
// 已经登录，通过token找服务器获取用户信息
// url:/api/user/passport/auth/getUserInfo method:GET
const reqUserInfo = ()=>{
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'GET'
    })
}

//退出登录
// url:/api/user/passport/logout method: get
const reqLogout = ()=>{
    return requests({
        url:'/user/passport/logout',
        method:'GET'
    })
}
export {
    reqCategoryList,
    reqGetBannerList,
    reqFloorList,
    reqGetSearchInfo,
    reqGoodsInfo,
    reqAddOrUpdateShopCart,
    reqCartList,
    reqDeleteCartById,
    reqUpdateCheckedById,
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqLogout}