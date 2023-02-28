/// <reference types="vite/client" />

//#region 

/**
 *  声明基础模块
 */

declare module '*.less'

declare module '*.scss'

declare module '*.png'

declare module '*.jpeg'

declare module '*.jpg'

declare module '*.svg'

declare module "*.json";


declare module 'mockjs'

//#endregion

interface Window{
    mitt:any // 事件派发总线

}


declare module 'cesium-react'

