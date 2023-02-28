import NttCheckBox from "../../components/ntt-checkbox";
import React, { useState } from "react";
/** redux **/
import { Provider } from 'react-redux'
import { Radio,Button,Checkbox} from 'antd-mobile'
import {NttcountDown} from '../../components/ntt-countdown'
import classnames from 'classnames/bind'
import styles from './index.module.scss'

const cx = classnames.bind(styles)

import useHeadBar from "../../hooks/useHeadBar";
import { Counter } from "../../components/Counter";

import {GetCounter} from '../../components/GetCounter'

export default function index() {
  const handleClick = () => {
    //发送事件
    window.mitt.emit('foo',{name:'jack'})
  }

  const testPostFormData = () => {
    
  }

  // 1674662399000

  
  testPostFormData();
  
  return <div>
    {/* <NttCheckBox /> */}
    {/* <Button color='primary' fill='solid' onClick={() => handleClick()}>mitt传参数</Button> */}
    <Home />
    <Counter />
    <GetCounter />
    <Checkbox value={111}/>
    <Radio />

    <NttcountDown  countParams="111" />
    
  </div>;
}

interface initailState {
 [key:string]:any
}

function Home(){
  const [state, setstate] = useState<initailState>({})
  window.mitt.on('foo', (obj:initailState) => setstate(obj)) // 监听参数

  return (
    <>
    <div className={cx('entry')}>{state.name}</div>
    </>
  )
}

