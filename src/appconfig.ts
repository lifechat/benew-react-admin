
interface AppConfig {
    appName: string
    appVersion: string
    appEnv: 'test' | 'prod'
    basePath: string
    baseUrl: string
    siteUrl: string
    apiUrl: string
    nttApiUrl: string
    trackApiUrl: string
    operateApiUrl: string
    trackEnabled: boolean
  }


  const appConfig = {
    appName: process.env.REACT_APP_NAME,
    appVersion: process.env.REACT_APP_VERSION,
    appEnv: process.env.REACT_APP_ENV,
    basePath: process.env.PUBLIC_URL,
    baseUrl: process.env.REACT_APP_BASE_URL,
    siteUrl: `${process.env.REACT_APP_BASE_URL}${process.env.PUBLIC_URL}`,
    apiUrl: process.env.REACT_APP_API_URL,
    nttApiUrl: process.env.REACT_APP_NTT_API_URL,
    trackApiUrl: process.env.REACT_APP_TRACK_API_URL,
    operateApiUrl: process.env.REACT_APP_OPERATE_API_URL,
  }

  export default appConfig as AppConfig;