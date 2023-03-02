import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import useGarfish from './hooks/useGarfish'
// import './styles/reset.css'
import './styles/resetPc.scss' // PC 初始化样式
import useHeadBar from './hooks/useHeadBar'
import { Routers } from './route/index'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from './store'
import EventEmitt from './utils/event'
import 'antd/dist/reset.css';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';


//设置语言
dayjs.locale('zh-cn');


const App:React.FC = () =>{
  useEffect(() => {
    const mitt = EventEmitt();
    window.mitt = mitt;
  }, [])





  // const count = useSelector((state:RootState) => state.counter.value);

  // const dispatch = useDispatch();


  // const incrementAmount = useSelector(
  //   (state:RootState) => state.counter.incrementAmount
  // )


  // function handleChange(incrementAmountValue: string) {
  //   dispatch(changeIncrementAmount(Number(incrementAmountValue)));
  // } 


  // mitt.on('foo',(e) => console.log('foo',e))

  // mitt.on('*',(type,e) =>  console.log(type,e) ) // 监听

  // mitt.emit('foo', { a: 'b' })

  // mitt.emit('trans',20);

  // mitt.off("off",) //



  // console.log('====================================');
  // console.log(import.meta.env.REACT_APP_BASE_URL);

  // console.log('====================================');
  // console.log(process.env.REACT_APP_BASE_URL);
  // console.log('====================================');
  // console.log(import.meta);
  
  // console.log('====================================');
  return (
    <div className="App">
      <Routers />
    </div>
  )
}

export default App
