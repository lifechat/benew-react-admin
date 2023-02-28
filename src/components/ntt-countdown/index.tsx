import React,{useState,useEffect,useRef} from 'react'
import classnames from 'classnames'
import styles from './index.less'
/**
 * @params props
 * @returns 
 * @description 活动倒计时组件
 */

 const cx = classnames.bind(styles)

 interface Iprops{
    countParams:any
 }

export const NttcountDown = (props:Iprops) => {
    // const { countParams } = props;

    // const { day, hour, minute, seconds, leftTime } = countParams

    // //时间初始化
    // const [timeObj,setTimeObj] = useState({
    //     d: day, 
    //     h: hour,
    //     m: minute,
    //     s: seconds,
    // })

    // const latestCount = useRef(timeObj);

    // const [over,setOver] = useState<boolean>(false); // 倒计时是否结束

    return (
        <div className={cx('ntt-countdown')}>
            倒计时{props.countParams}
        </div>
    )
}

