import {request} from '@/utils/request'


/** 用户登录 */
export function requestLogin(data:any){
    return request({
        url:'/passport/login',
        data,
        method:'post'
    })
}
/** 用户注册 */
export function requestRegister(data:any){
    return request({
        url:'/passport/regist',
        data,
        method:'post'
    })
}

/** 用户名是否存在 */
export function requestPassport(){
    return request({
        url:'/passport/usernameIsExist',
        method:'get'
    })
}