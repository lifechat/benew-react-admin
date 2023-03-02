import axios,{AxiosRequestConfig} from 'axios'
import appConfig from '@/appconfig'



interface LoadingOption{
    show?:boolean
    message?:string
}


interface RequestConfig extends AxiosRequestConfig{
    loadingOption?:LoadingOption
    doNotLogin?:boolean
    skipHandleResult?:boolean
}

interface RequestResponse{
    code:number,
    data:any
}



const Axios = axios.create({
    baseURL:appConfig.apiUrl,
    withCredentials:true,
    timeout:15000,
    headers:{
        'Content-Type': 'application/json',
    }
})


export function request({loadingOption = {},...options}:RequestConfig):Promise<RequestResponse>{

    if(loadingOption.show){

    }

    return new Promise((resolve,reject)=>{
        Axios(options)
        .then((res)=>{
            // if(LoadingOption.show)
            console.log(res)
            resolve(res.data)
        }).catch((err)=>{
            reject(err);
        })
    })
}

export const  HTTP_STATUS = {
    SUCCESS: 200,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOTFOUND:404
}

// 请求拦截器
Axios.interceptors.request.use(
    (config) => {
        // const 
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

// 响应拦截器
Axios.interceptors.response.use(
    (response) => {
        const {data = {},config} = response;


        return config;
    },
    (error) => {
        const {response = {},config} = error;
        const {status,data={}} = response;
        // 未登录或者登录失效

        //统一报错信息字段为message
        error.message = data.message || data.msg || data.detail || '请求出错，请稍后再试'
        return Promise.reject(error)
    }
)


// 创建多个请求
export function anotherRequest(options:RequestConfig){
    return request({ baseURL: appConfig.baseUrl, skipHandleResult: true, ...options })
}