import { MockMethod } from 'vite-plugin-mock'


interface params{
    body:any,
    query?:any
}

export default [
  {
    url: '/api/getRoleById',
    method: 'get',
    response: ({ query }:params) => {
      console.log('id>>>>>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
  {
    url: '/api/testRestful/:id',
    method: 'get',
    response: ({ query }:params) => {
      console.log('id>>>>>>>>', query.id)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
  {
    url: '/api/testRestful/:id',
    method: 'post',
    response: ({ query, body }:params) => {
      console.log('query>>>>>>>>', query)
      console.log('body>>>>>>>>', body)
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      }
    },
  },
] as MockMethod[]