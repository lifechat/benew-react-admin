import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { useDispatch,useSelector,TypedUseSelectorHook } from 'react-redux'

import login from './modules/login'

export const store = configureStore({
    reducer:{
        login,
    },
    //中间件
    middleware:()=>
     getDefaultMiddleware({serializableCheck:false}).concat(logger),
     devTools:import.meta.env.MODE !== 'production' // 不是正式环境展示log
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

