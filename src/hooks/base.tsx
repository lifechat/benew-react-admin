import React, { Component } from 'react'
import storage from '../utils/storage'

interface Options {
  title?: string
  preLogin?: boolean
  showShareBtn?: boolean
}

const baseHoc =
  (options: Options = {}) =>
  (WrappedComponent:any) => {
    class BaseHoc extends Component<any, any> {

      constructor(props:any) {
        super(props)
        this.state = {
          loading: options.preLogin,
          authInfo: null,
        }
      }

      componentDidMount() {
        const { title, showShareBtn, preLogin } = options
        if (title) {
          document.title = title
        }

      }

      componentWillUnmount() {}

      render() {
        const { loading, ...rest } = this.state

        return <WrappedComponent {...this.props} {...rest} />
      }
    }

    return BaseHoc as any
  }

export default baseHoc
