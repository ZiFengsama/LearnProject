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
export {reqCategoryList,reqGetBannerList,reqFloorList}