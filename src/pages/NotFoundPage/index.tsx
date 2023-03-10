import React, { Component } from "react";
import classNames from "classnames/bind";
import notfoundImg from '@/assets/404_images/404.png'
import cloudImg from '@/assets/404_images/404_cloud.png'
import styles from "./index.module.scss";
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles);
class NotFound extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "找不到页面",
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div className={cx("notfound-container")}>
        <div className={cx("notfound-404")}>
          <div className={cx("pic-404")}>
            <img
              className={cx("pic-404__parent")}
              src={notfoundImg}
              alt="404"
            />
            <img
              className={cx("pic-404__child","pic-404__child__left")}
              src={cloudImg}
              alt="404"
            />
            <img
              className={cx("pic-404__child","pic-404__child__mid")}
              src={cloudImg}
              alt="404"
            />
            <img
              className={cx("pic-404__child","pic-404__child__right")}
              src={cloudImg}
              alt="404"
            />
          </div>
          <div className={cx("bullshit")}>
            <div className={cx("bullshit__oops")}>OOPS!</div>
            <div className={cx("bullshit__info")}>
              版权所有
              <a className={cx("link-type")} target="_blank">
                @CodeSharing
              </a>
            </div>
            <div className={cx("bullshit__headline")}>{ message  }</div>
            <div className={cx("bullshit__info")}>
              请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告
            </div>
            <Link  to="/"  className="bullshit__return-home">返回首页</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
