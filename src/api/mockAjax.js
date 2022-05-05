// axios二次封装
// 为什么需要进行二次封装axios
// 请求拦截器、响应拦截器：请求拦截器：可以在发送请求之前可以处理一些业务；响应拦截器：当服务器数据返回后，可以处理一些事情

// 引入nprogress 进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
// start:进度条开始 done:进度条结束

// 在项目中的api文件夹 用来写axios
import axios from 'axios';

const requests = axios.create({
    baseURL:"/mock",
    // baseURL:"/demo",
    timeout:5000,
});
// 请求拦截器：在发请求之前，请求拦截器可以检查到，并且可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    nprogress.start();
    return config;
});


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