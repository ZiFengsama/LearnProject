import { reqCategoryList } from "@/api"
// home模块小仓库
const state={
    // state中数据默认初始值别乱写，根据服务器返回的数据进行书写
    categoryList:[],
}
const actions={
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
    //   
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    }
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const getters={}

export default {
    state,
    actions,
    mutations,
    getters
}