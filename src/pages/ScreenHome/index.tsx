import React, { Component } from "react";
import classnames from 'classnames/bind'
import styles from './index.module.scss'
import base from "@/hooks/base";
import { Button, Space } from 'antd';
import { requestLogin, requestRegister } from "@/api/login";

const cx = classnames.bind(styles)

// @base({ title:"天天吃货-首页" })
class Home extends Component<any,any>{

  constructor(props:any){
    super(props);
  }

  componentDidMount(): void {
  }
  async getLoginInfo(){
    const params = {
      "username":"lifechat",
      "password":"lifechat",
      "confirmPassword":"lifechat"	
   }

   try {
    const res = await requestLogin(params);
    const {data} = res;

  } catch (error) {

  }
  }
  async getRegisterInfo(){
     const data = 
      {
        "username":"lifechat",
        "password":"lifechat",
        "confirmPassword":"lifechat"	
     }

     try {
       const res = await requestRegister(data);
       console.log(res);
     } catch (error) {

     }

  }

  render(){
    return (
      <div>首页
          <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default Home;

