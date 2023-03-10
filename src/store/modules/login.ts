import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { requestRegister } from '@/api/login'

interface loginProps{
    mobile?:string
    code?:string
}

interface initType{
    token?:string
    refresh_token?: string;
}

// 初始化状态
const initialState = {
   token:'',
   refresh_token:''
} as initType;


// 登陆 
const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        // 退出登陆
        logoutAction(state:any){
            //removeToken();
            state.token = "";
            state.refresh_token = "";
        },
        // 登陆
        loginAction(state:any){
            state.token = "1";
            state.refresh_token = "2";
        }
    }
})

export const {logoutAction} = LoginSlice.actions;

export default LoginSlice.reducer;