import {Message} from 'element-ui'
import axios from 'axios'

// 设置post请求头
// const baseUrl = "http://10.0.14.XXX:8080/XX" //
// export { baseUrl };
const request = axios.create({
    baseURL: process.env.VUE_APP_BASEURL, // 根据不同的环境 区分不同的基础url
		// baseURL:'/api', // 服务器代理模式
    timeout: 300000
})

//请求拦截
request.interceptors.request.use(function (config) {
    // config.headers.From = "项目名称"
    if(JSON.parse(localStorage.getItem("token"))){
        config.headers.Token = JSON.parse(localStorage.getItem("token"));
    }
     return config;
 }, function (error) {
    return Promise.reject(error);
 });

request.interceptors.response.use(
    response=>{
        if(response.config && response.config.url){
            if( response.config.url.indexOf('/home') == -1){
                dealStatus(response.data)
            }
        }
        return response
    },
    error =>{
        if(error && error.response){
            // errorHandle(error.response.status,error.response.dat)
        }else{
            // Message({message:"网络超时，检查网络设置"})
        }
        return Promise.reject(error)
    }
)

function dealStatus( data ){
    const code = data.code;
    switch(code){
        case -1: Message({type: "warning",message:data.dat}) ;break;
				// XXX
    }
}

// const errorHandle = (status) => {
// 	// 状态码判断
// 	switch (status) {
// 		// 401：未登录状态，跳转的登录页
// 		case 401:
// 			Message('未登录，请先登录');
// 			break;
// 		// 403 token已经过期，清除token并跳转至登录页
// 		case 403:
// 			Message('登录过期，请重新跳转');
// 			break;
// 		// 404 请求不存在
// 		case 404:
// 			Message('请求地址出错');
// 			break;
// 		case 408:
// 			Message('请求超时');
// 			break;
// 		case 440:
// 			Message('用户未登录');
// 			break;
// 		// 500 服务器内部异常
// 		case 501:
// 			Message('服务器未实现');
// 			break;
// 		case 502:
// 			Message('网关错误');
// 			break;
// 		case 503:
// 			Message('服务器不可用');
// 			break;
// 		case 504:
// 			Message('网关超时');
// 			break;
// 		default:
// 			Message('服务器发生异常');
// 	}
// }
export default request;
