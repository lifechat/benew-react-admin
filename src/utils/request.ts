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
Axios.interceptors.request.use();

// 响应拦截器
Axios.interceptors.response.use()


// 创建多个请求
export function anotherRequest(options:RequestConfig){
    return request({ baseURL: appConfig.baseUrl, skipHandleResult: true, ...options })
}