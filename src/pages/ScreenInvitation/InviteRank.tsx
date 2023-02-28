import React, { Component } from "react";
import classnames from "classnames/bind";
import styles from "./styles/InviteRank.module.scss";
import Axios from "axios";
import { MockUrl } from '../../../mock/mockConstant'
import { Datecountdown,shortenName } from "../../utils/common";
import place1Img from '../../assets/invite/place1.png'
import place2Img from '../../assets/invite/place2.png'
import place3Img from '../../assets/invite/place3.png'
import flag4Img from '../../assets/invite/flag4.png'
import flag5Img from '../../assets/invite/flag5.png'
import avatarImg from '../../assets/ntt-avatar.png'
import dayjs from "dayjs";
import CountDown from "@/components/countDown";


const axios = Axios;

const cx = classnames.bind(styles);

class InviteRank extends Component<any, any> {
  public  duration:any = 1674662399000
  public interval:any;
  constructor(props: any) {
    super(props);

    let d = parseInt((this.duration / (1000 * 60 * 60 * 24)) as any);//天
    let h = parseInt((this.duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) as any);//时
    let m = parseInt((this.duration %  (1000 * 60 * 60) / (1000 * 60) ) as any);//分
    let s = parseInt(((this.duration % (1000 * 60))/1000) as any);//秒


    this.state = {
      attrs: {},
      top3Rank: [],
      restRank: [],
      day: d,
      hour: h,
      minute: m,
      second: s,
      showTime: this.duration ? true : false  // 显示倒计时
    };
  }

  componentDidMount() {
  const formatDuring =   this.formatDuring(this.duration)
    // console.log(dayjs('2022-10-31 23:59').diff('2022-9-16 23:59', 'minutes'), '两个日期之间相差的分钟')
    // console.log(dayjs('2022-10-31 23:59').diff('2022-9-16 23:59', 'second'), '两个日期之间相差的秒')
  console.log(formatDuring)
    console.log(this.state.day)
    console.log(this.state.hour)
    console.log(this.state.minute)
    console.log(this.state.second)
    this.getInviteContent();
    this.getInviteDeviceRank();

    this._startCountDownTimer();
    // const now: any = Math.round(new Date().getTime() / 1000).toString();  //获取当前时间
    // const StartDate = new Date('59-23-9-16-2022')
    // console.log(StartDate)
    // const str = Datecountdown('','2022 10 31 23 59')
    // console.log(str);'hour','minutes','second'
   
  
  }

   formatDuring = (timestamp:any) =>  {
    let timeStamp
    let timeStampLen = timestamp.toString().length
    if (timeStampLen === 10) {
      timeStamp = timestamp * 1000
    } else if (timeStampLen === 13) {
      timeStamp = timestamp
    } else {
      timeStamp = timestamp
    }
    let date = new Date(timeStamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = (date.getFullYear() + '-')
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ')
    let h = (date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':')
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':')
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())

    return Y + M + D + h + m + s
    }

  _startCountDownTimer = () => {
      const { day, hour, minute, second } = this.state;
      // console.log('剩余 ' + day + '天' + hour + '时' + minute + '分' + second + '秒');
      this.interval = setInterval(() => {
        if (day !== 0 || hour !== 0 || minute !== 0 || second !== 0) {
          if (this.state.second == 0) {
            if (this.state.minute == 0) {
              if (this.state.hour == 0) {
                if (this.state.day == 0) {
                  this._endCountDownTimer();
                } else { //天数不为0
                  this.setState({
                    day: this.state.day - 1,
                    hour: 23,
                    minute: 59,
                    second: 59
                  })
                }
              } else { //小时不为0
                this.setState({
                  hour: this.state.hour - 1,
                  minute: 59,
                  second: 59
                })
              }
            } else {    //分不为0
              this.setState({
                minute: this.state.minute - 1,
                second: 59
              })
            }
          } else {    //秒不为0
            this.setState({
              second: this.state.second - 1
            });
          }
        } else {
          this._endCountDownTimer();
        }
      }, 1000);
    }
    _stopCountDownTimer = () => {
      this.interval && clearInterval(this.interval);
    }
    
    _endCountDownTimer = () => {
      this.setState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        showTime: false
      })
      this._stopCountDownTimer();
    }

    _addNumber(data:any) {
      if (data != 0 && data != undefined) {
        if (data < 10) {
          return '0' + data;
        }
        return data;
      } else {
        return '00';
      }
    }
  getInviteContent = () => {
    axios.get(MockUrl.getActivity).then(({ data }) => {
      const attrs = data["data"]["attr"];

      this.setState({
        attrs: attrs,
      });
    });
  };

  getInviteDeviceRank = () => {
    axios.get(MockUrl.getRankData).then(({ data }) => {
      const { top20SuccessInviteRank = [] } = data["data"];
      const [first, second, third, ...rest] = top20SuccessInviteRank;

      this.setState({ top3Rank: [first, second, third], restRank: rest });
    });
  };

  numberBlurred = (number:number) => {
    if (number < 10) {
      return '小于10'
    } else {
      return `大于${Math.floor(number / 10) * 10}`
    }
  }

  render() {
    const { top3Rank, restRank, attrs,day } = this.state;

    return (
      <div className={cx("inviterank")}>
        <CountDown />
        {this._addNumber(this.state.day) == '00' ? '' : `${this._addNumber(this.state.day)}天`}{this._addNumber(this.state.hour)}:{this._addNumber(this.state.minute)}:{this._addNumber(this.state.second)}

        <img
          src={attrs.rankHeadTradeImg}
          className={cx("header-img")}
          alt="头图"
        />
        <div className={cx("activity-time")}>
          活动时间:2022.9.16-2022.10.31 23:59
        </div>

        <div className={cx("device-rank")}>
          <img
            src={attrs.rankDeviceTitleTradeImg}
            className={cx("title-img")}
            alt=""
          />

          <div className={cx("device-rank-content")}>
            <div className={cx("top3-rank-wrap")}>
              {top3Rank?.map((item:any, index:any) => (
                <div
                  className={cx("top3-rank-item", `top3-rank-item--${index}`)}
                  key={index}
                >
                  <div className={cx("avatar-wrap")}>
                    <img
                      src={item?.avatar || avatarImg}
                      className={cx("avatar-img")}
                      alt=""
                    />
                    <img
                      src={
                        index === 0
                          ? place1Img
                          : index === 1
                          ? place2Img
                          : place3Img
                      }
                      className={cx("avatar-frame")}
                      alt=""
                    />
                  </div>

                  <div className={cx("user-name-wrap")}>
                    <div className={cx("user-name")}>
                      {shortenName(item?.userName)}
                    </div>
                  </div>
                  <div className={cx("rank-score")}>
                    {item?.count > 0
                      ? `邀请${this.numberBlurred(item?.count)}人`
                      : "暂无数据"}
                  </div>
                </div>
              ))}
            </div>

            {restRank?.map((item:any, index:any) => (
              <div className={cx("rank-item")} key={index}>
                <div className={cx("rank-order")}>
                  {index < 2 ? (
                    <img
                      src={index === 0 ? flag4Img : flag5Img}
                      className={cx("flag-img")}
                      alt=""
                    />
                  ) : (
                    index + 4
                  )}
                </div>
                <div className={cx("avatar-wrap")}>
                  <img
                    src={item?.avatar || avatarImg}
                    className={cx("avatar-img", {
                      "avatar-img--border3": index === 0,
                      "avatar-img--border4": index === 1,
                    })}
                    alt=""
                  />
                </div>
                <div className={cx("user-name")}>
                  {shortenName(item?.userName)}
                </div>
                <div className={cx("rank-score")}>
                  {item?.count > 0
                    ? `推荐${this.numberBlurred(item?.count)}人`
                    : "暂无数据"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cx("rank-bottom")}>
          <div className={cx("activity-introduction")}>
            <span className={cx("introduction-title")}>活动说明：</span>
            <br />
            ①2022年9月16日-2022年10月31日23:59,成功邀请好友参与旧机焕新，累计排名前10的用户可获得排名奖励。
            <br />
            ②非APP【旧机焕新】渠道购买的超记牛、超记牛OLED、读书牛2，不计入成功推荐范围。
            <br />
            ③非使用其他品牌旧机焕新的超记牛、超记牛OLED、读书牛2，不计入成功推荐范围。
            <br />
            ④旧机焕新14天内有退换货记录的超记牛、超记牛OLED、读书牛2，不计入成功推荐范围。
            <br />
            ⑤本次排行榜将在2022年11月17日公布。
            <br />
            ⑥此次活动严禁刷榜、作弊，一经发现，立即取消领奖资格。
            <br />
            ⑦更多规则可在「推荐焕新」页面查看，如有其他疑问，可咨询牛听听在线客服。
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default InviteRank;
