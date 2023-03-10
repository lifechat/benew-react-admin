import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import useGarfish from './hooks/useGarfish'
// import './styles/reset.css'
import './styles/resetPc.scss' // PC 初始化样式
import useHeadBar from './hooks/useHeadBar'
import { Routers } from './route/index'
import { useSelector,useDispatch } from 'react-redux'
// import { RootState } from './store'
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

  return (
    <div className="App">
      <Routers />
    </div>
  )
}

export default App
