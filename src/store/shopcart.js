import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api";
const state = {
    cartList:[],
};
const actions = {
    // 获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data);
        }
    },
    // 删除购物车某一个产品
    async deleteCartListById({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 删除选中的商品
    deleteAllcheckedCart({dispatch,getters}){
        // context 小仓库，commit【提交mutation修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCartListById',item.skuId):'';
            // 将每一次返回的数组返回到数组当中
            PromiseAll.push(promise);
        });

        return Promise.all(PromiseAll);
        // 只要PromiseAll里面的都返回成功，这promise 返回成功结果
        // 若有一个不成功，这返回失败结果
    },
    // 全选或全不选上品
    updateAllCartIsChecked({dispatch,state},isChecked){
        console.log(state.cartList[0].cartInfoList);
        let PromiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked:isChecked});
            PromiseAll.push(promise);
        });
        // 最终返回的结果
        return Promise.all(PromiseAll);
    }
};
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }
};
const getters = {
    cartList(state){
        return state.cartList[0]||{};
    },
};

export default {
    state,
    actions,
    mutations,
    getters
}