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

}

// 请求拦截器
Axios.interceptors.request.use();

// 响应拦截器
Axios.interceptors.response.use()
