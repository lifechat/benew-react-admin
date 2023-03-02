import React, { Component } from "react";
import classnames from 'classnames/bind'
import styles from './index.module.scss'
import base from "@/hooks/base";
import { Button, Space } from 'antd';
import { requestRegister } from "@/api/login";

const cx = classnames.bind(styles)

@base({ title:"天天吃货-首页" })
class Home extends Component<any,any>{

  constructor(props:any){
    super(props);
  }

  componentDidMount(): void {
      this.getRegisterInfo();
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
// export default function index(props:any) {
//   const handleClick = () => {
//     //发送事件
//     window.mitt.emit('foo',{name:'jack'})
//   }

//   const testPostFormData = () => {
    
//   }

//   useEffect(() => {
//       console.log(getUrlParams())
      
//   }, []);
   
//   // 1674662399000

  
//   testPostFormData();
  
//   return <div>
//     {/* <NttCheckBox /> */}
//     {/* <Button color='primary' fill='solid' onClick={() => handleClick()}>mitt传参数</Button> */}
//     {/* <Home />
//     <Counter />
//     <GetCounter />
//     <Checkbox value={111}/>
//     <Radio />

//     <NttcountDown  countParams="111" /> */}
//       <div>首页</div>
//   </div>;
// }

// interface initailState {
//  [key:string]:any
// }

// function Home(){
//   const [state, setstate] = useState<initailState>({})
//   window.mitt.on('foo', (obj:initailState) => setstate(obj)) // 监听参数

//   return (
//     <>
//     <div className={cx('entry')}>{state.name}</div>
//     </>
//   )
// }


export default Home;

