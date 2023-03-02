import {request} from '@/utils/request'

/** 用户注册 */
export function requestRegister(data:any){
    return request({
        url:'/passport/regist',
        data,
    })
}

/** 用户名是否存在 */
export function requestPassport(){
    return request({
        url:'/passport/usernameIsExist',
        method:'get'
    })
}