import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
  useLayoutEffect,
  ComponentElement,
  ReactNode,
  MutableRefObject,
  RefObject
} from "react";

import classnames from 'classnames'
import style from './index.module.scss'


const cx  = classnames.bind(style)


interface studentInfo {
  name?: string;
  age?: number;
}
interface Dref {
  initSetvalue:(value:any) => void;
}
type colorContext = {
  color: string;
};

type userContext = {
  name?: string;
  age?: number;
};

const UserContext = createContext({} as userContext);
const InfoContext = createContext({});
const ColorContext = createContext({} as colorContext);

const useGetContext = () => {
  const user: studentInfo = useContext(UserContext);
  const info = useContext(InfoContext);

  return [user, info];
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      return { ...state, num: state.num + 1 };
    case "SUB":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
};

function Home() {

  const user = useContext(UserContext);
  const color = useContext(ColorContext);

  const [state, dispatch] = useReducer(reducer, { num: 0 });
  return (
    <div>
      
      <p>{state.num}</p>
      <button
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: "SUB" });
        }}
      >
        减少
      </button>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{color.color}</p>
    </div>
  );
}

export default function index() {
  const arr = useState<number>(666);
  const [nameState, setNameState] = useState<string>("jack");
  const [ageState, setAgeState] = useState<number>(18);
  const [studentInfo, setStudentInfo] = useState<studentInfo>({
    name: "zs",
    age: 23,
  });
  const [heroState, setHeroState] = useState([
    { id: 1, name: "鲁班" },
    { id: 2, name: "虞姬" },
    { id: 3, name: "黄忠" },
  ]);

  const [count, setCount] = arr;

  const pRef = useRef<HTMLParagraphElement | any>(null);
  const homeRef = useRef<HTMLParagraphElement | any>(null);


  const btnClick = () => {
      console.log(pRef.current);
      console.log(homeRef.current)
  }


  useLayoutEffect(()=>{
    pRef.current.style.left = '0px'; 
    pRef.current.style.left = '100px';
  })

  useEffect(() => {
    // 组件被挂载
    // pRef.current.style.left = '0px';
    // pRef.current.style.left = '100px';
    console.log("修改DOM");
  });
  useEffect(() => {
    // 组件被挂载
    console.log("注册监听");
    return () => {
      console.log("移出监听");
    };
  });
  useEffect(() => {
    console.log("发送网络请求");
  });
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        减少
      </button>
      <hr />
      <p>{ageState}</p>
      <button
        onClick={() => {
          setAgeState(ageState + 1);
        }}
      >
        age增加
      </button>
      <button
        onClick={() => {
          setAgeState(ageState - 1);
        }}
      >
        age减少
      </button>
      <hr />
      <p>{nameState}</p>
      <button
        onClick={() => {
          setNameState("it666");
        }}
      >
        修改
      </button>
      <hr />
      <p>{studentInfo.name}</p>
      <p>{studentInfo.age}</p>
      <hr />
      <ul>
        {heroState.map((hero) => {
          return <li key={hero.id}>{hero.name}</li>;
        })}
      </ul>
      <br />
      useContext:
      <UserContext.Provider value={{ name: "lnj", age: 18 }}>
        <ColorContext.Provider value={{ color: "red" }}>
          <Home  />
        </ColorContext.Provider>
      </UserContext.Provider>

      <br/>
      useLayoutEffect:
      <div>
         <p ref={pRef} style={{
          width:"100px",
          height:"100px",
          position:'relative',
          left:0,
          top:0,
          background:'red'
         }}></p>
      </div>

      <button onClick={()=>{btnClick()}}>获取</button>
    </div>
  );
}
