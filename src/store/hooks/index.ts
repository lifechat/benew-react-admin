import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import type {AppDispatch, RootState } from '../index'

export const useAppDispatch: () => AppDispatch = useDispatch // 异步触发action 返回state

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector