import { useAppSelector } from '../store/hooks';
import React from 'react'

export function GetCounter() {

  const count = useAppSelector((state:any) => state.counter.value)

  return (
    <div>{count}</div>
  )
}
