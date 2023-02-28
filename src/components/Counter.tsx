import React from 'react'
import { useDispatch } from 'react-redux'
import {useAppSelector,useAppDispatch} from '../store/hooks/index'
import {
    increment,
    decrement,
    changeIncrementAmount
} from '../store/reducers/counterReducer'

import {ThunkAction,ThunkActionDispatch,ThunkMiddleware} from 'redux-thunk'


export function Counter(){

    const dispatch = useDispatch()
    
    return (
        <div>
             <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(changeIncrementAmount(2))}>修改参数值</button>
             </div>
        </div>
    )
}