import {reqGetCode, reqUserRegister,reqUserLogin,reqUserInfo, reqLogout} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'
// 登录与注册的模块
const state = {
    code:'',
    token: getToken(),
    userInfo:''
};
const mutations = {
    GETCODE(state,data){
        state.code = data;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    // 清除本地数据
    CLEAR(state){
        // 把仓库中相关数据清空
        state.token='';
        state.userInfo='';
        // 本地存储清空
        removeToken();
    }
};
const actions = {
    // 获取验证码
    async getCode({commit},phone){
        // 获取验证码接口：把验证码返回，正常情况是将验证码发送给用户手机上
        let result = await reqGetCode(phone);
        if(result.code == 200){
            commit('GETCODE',result.data)
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 注册
    async userRegister({commit},data){
        let result = await reqUserRegister(data);
        console.log(result);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code==200){
            // 服务器下发的token，是用户的唯一表示
            commit('USERLOGIN',result.data.token);
            // 调用自己封装的函数将token存入localStorage
            console.log(result.data.token);
            setToken(result.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 退出登录
    async userLogout({commit}){
        let result = await reqLogout();
        if(result.code==200){
            commit('CLEAR');
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code==200){
            commit('GETUSERINFO',result.data);
            return 'ok';
        }else {
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}