// axios二次封装
// 为什么需要进行二次封装axios
// 请求拦截器、响应拦截器：请求拦截器：可以在发送请求之前可以处理一些业务；响应拦截器：当服务器数据返回后，可以处理一些事情

// 引入nprogress 进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css"
// start:进度条开始 done:进度条结束

// 在项目中的api文件夹 用来写axios
import axios from 'axios';
// 在当前模块中引入store仓库
import store from '@/store';

const requests = axios.create({
    baseURL:"/api",
    // baseURL:"/demo",
    timeout:5000,
});
// 请求拦截器：在发请求之前，请求拦截器可以检查到，并且可以在请求发出去之前做一些事情
// requests.interceptors.request.use((config)=>{
//     // config：配置对象，对象里面有一个属性很重要，headers请求头
//     nprogress.start();
//     return config;
// })
requests.interceptors.request.use((config)=>{
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    let token = store.state.detail.uuid_token;
    if(store.state.detail.uuid_token){
        // 请求头添加一个字段(userTempId)，和后台商量好了
        config.headers.userTempId = token;
    }
    // 需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，并做一些事情
    nprogress.done();
    return res.data;
},(error)=>{
    // 响应失败的回调函数
    // return Promise.reject(new Error('faile'));
    // return error.message;
    console.log(error);
    return Promise.reject(new Error('faile'))
})

// 暴露requests
export default requests