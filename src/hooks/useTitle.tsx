import React, { Component, Fragment } from "react";

interface Options {
  title?: string;
}

const useTitle =
  (options: Options = {}) =>
  (WrappedComponent: any) => {
    return class extends Component<any, any> {
      componentDidMount(): void {
        const { title } = options;
        if (title) {
          document.title = title;
        }
      }
      
      render() {
        return (
          <Fragment>
            <WrappedComponent {...this.props} />
          </Fragment>
        );
      }
    };
  };

export default useTitle;
