import { reqCategoryList, reqGetBannerList, reqFloorList} from "@/api"
// home模块小仓库
const state={
    // state中数据默认初始值别乱写，根据服务器返回的数据进行书写
    categoryList:[],
    // 轮播图数据
    bannerList:[],
    floorList:[]
}
const actions={
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
    //   
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    },
    async getBanner({commit}){
        let result = await reqGetBannerList();
        // console.log(result);
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    // 获取floor数据
    async getFloor({commit}){
        let result = await reqFloorList();
        if(result.code==200){
            commit("GETFLOORLIST",result.data)
        }
    }

}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const getters={}

export default {
    state,
    actions,
    mutations,
    getters
}