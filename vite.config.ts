import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import postcsspxtoviewport from "postcss-px-to-viewport-8-plugin";
import vitePluginMomentToDayjs from "vite-plugin-moment-to-dayjs";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import vitePluginImp from 'vite-plugin-imp'
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    // 本地服务搭建
    server: {
      host: "0.0.0.0",
      open:true
    },
    css: {
      // 移动端适配方案
      // postcss: {
      //   plugins: [
      //     postcsspxtoviewport({
      //       unitToConvert: "px", // 要转化的单位
      //       viewportWidth: 375, // UI设计稿的宽度 750
      //       unitPrecision: 6, // 转换后的精度，即小数点位数
      //       propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      //       viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
      //       fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
      //       selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
      //       minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      //       mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      //       replace: true, // 是否转换后直接更换属性值
      //       // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配,设置忽略node_modules会导致测试时
      //       exclude: [],
      //       landscape: false, // 是否处理横屏情况
      //       landscapeUnit: "vw",
      //       landscapeWidth: 568,
      //     }),
      //   ],
      // },
    },
    
    //拆分
    // build: {
    //   rollupOptions: {
    //     output: {
    //       // 最小化拆分包
    //       manualChunks: (id) => {
    //         if (id.includes("node_modules")) {
    //           return id
    //             .toString()
    //             .split("node_modules/")[1]
    //             .split("/")[0]
    //             .toString();
    //         }
    //       }, // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
    //       entryFileNames: "js/[name].[hash].js", // 用于命名代码拆分时创建的共享块的输出命名
    //       chunkFileNames: "js/[name].[hash].js", // 用于输出静态资源的命名，[ext]表示文件扩展名
    //       assetFileNames: "[ext]/[name].[hash].[ext]", // 拆分js到模块文件夹 // chunkFileNames: (chunkInfo) => { //     const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []; //     const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'; //     return `js/${fileName}/[name].[hash].js`; // },
    //     },
    //   },
    // },
    plugins: [
      react(),
      vitePluginMomentToDayjs(), // dayjs
      vitePluginImp({
        libList: [
          // {
          //   libName: "antd-mobile",
          //   style(name){ 
          //     return `antd-mobile/es/components/${name}/${name}.css`
          //   },
          //   libDirectory: "es/components",
          //   replaceOldImport: true,
          // },
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      }),
      // Mock
      viteMockServe({
        //mock 数据
        mockPath: "mock",
        localEnabled: command === "serve",
        // prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mock/mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
      // 拆包策略
      chunkSplitPlugin({
        strategy: "default",
        // 当所有文件打包成一个chunk,首屏加载过程会很缓慢,可以精细化配置地控制拆包来加快加载chunk的速度
        customSplitting: {
          // 将不同模块拆分打包不同的chunk中
          "react-vendor": ["react", "react-dom"],
        },
      }),
    ],
  };
};
