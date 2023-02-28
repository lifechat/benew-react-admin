import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store/index'
import '@/styles/reset.css'
// import 'antd-mobile/es/global'


// 全局数据派发

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <App />
  </Provider>
)
