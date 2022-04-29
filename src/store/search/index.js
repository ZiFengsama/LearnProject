import {reqGetSearchInfo} from "@/api"
// search 模块小仓库
const state={
    searchList:{}
}
const actions={
    // 获取search模块数据
    async getSearchList({commit},params={}){
        let result = await reqGetSearchInfo(params)
        // console.log(result);
        if(result.code == 200){
            commit("GETSEARCHLIST",result.data)
        }
    }
}
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
// 在项目中为了简化数据而生：简化仓库中的数据
const getters={
    goodsList(state){
        // 在没有网络或网络比较慢的时候 返回空数组，以免出现错误
            return state.searchList.goodsList||[];
    },
    attrsList(state){
            return state.searchList.attrsList||[];
    },
    trademarkList(state){
            return state.searchList.trademarkList||[];
    },
    
}
export default {
    state,
    actions,
    mutations,
    getters
}