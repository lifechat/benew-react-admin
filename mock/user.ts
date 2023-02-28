import { MockMethod } from "vite-plugin-mock";

interface params {
  body: any;
  query?: any;
}
export default [
  {
    url: "/api/createUser",
    method: "post",
    response: ({ body, query }: params) => {
      console.log("body>>>>>>>>", body);
      console.log("query>>>>>>>>", query);

      return {
        code: 0,
        message: "you mock data is successful",
        data: [
          {
            name: "Get Request",
            info: "暂无数据",
            show: false,
          },
          {
            name: "Get Restful",
            info: "暂无数据",
            show: false,
          },
          {
            name: "Post Request",
            info: "暂无数据",
            show: false,
          },
        ],
      };
    },
  },
] as MockMethod[];
