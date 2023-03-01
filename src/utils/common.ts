import { isArguments } from "lodash";

export const ce = () => {}


// 日期倒计时
export const Datecountdown = (nowDate:any,targetDate:any)  => {

    // 2022年9月16日-2022年10月31日23:59

    const ms = targetDate - nowDate;

    let day  = Math.floor(ms/1000/3600/24);

    let hours = Math.floor(ms%(3600*24*1000)/1000/3600)

    let minutes =Math.floor(ms%(3600*24*1000)/1000%3600/60);

    var seconds =Math.floor(ms%(3600*24*1000)/1000%3600%60);

    return `距离活动结束还有${day}天,${hours}小时,${minutes}分钟,${seconds}秒`;
}



// function formattingTime(count) {
// 	var time = '';
// 	var second = count % 60;
// 	var minute = parseInt(parseInt(count) / 60) % 60;
// 	time = second + "秒";
// 	if (minute >= 1 ) {
// 		time = minute + "分" +second + "秒";
// 	}
// 	var hour = parseInt( parseInt(count / 60) / 60 ) % 24;
// 	if ( hour >= 1 ) {
// 		time = hour + "小时" + minute + "分" + second + "秒";
// 	}
// 	var day = parseInt( parseInt( parseInt(count / 60) / 60 ) / 24 );
// 	if ( day >= 1 ) {
// 		time = day + "天" + hour + "小时" + minute + "分" + second + "秒";
// 	}
// 	return time;
// }



// 转换昵称
export const shortenName = (str = '', start = 1, end = 1) => {
    if (!str) return '**'
    str = str.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '*')
    if (str.length === 2) {
      return str.replace(/^(^.{1})(.+)/g, '$1**')
    }
    const reg = new RegExp(`^(^.{${start}})(.+)(.{${end}}$)$`, 'g')
    return str.replace(reg, '$1**$3')
}


// 防抖
//防抖——触发高频事件后 n 秒后函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间；
export const debounce = (fn:any,wait=0) => {
    let timeout:any;
    return (...args:any) => {
      try {
        clearTimeout(timeout)
      } catch (error) {
        
      }
      if(timeout) clearTimeout(timeout)
      timeout = setTimeout(() => fn.apply(this,args),wait);
    }
}

// 节流   
// 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率 商品的搜索栏
export const throttle = (fn:any,wait=0) => {
    let lastTime = 0;
    return (...args:any) => {
      const currentTime = new Date().getTime();
      if(currentTime - lastTime > wait){
        fn.apply(this,args);
        lastTime = new Date().getTime();
      }
    }
}

/**
 *  获取url参数
 */
export const getUrlParams = (url?:string):any => {
  if(!url){
    url = window.location.href;
  }

  return (url.match(/([^?=&]+)(=([^&]*))/g) || [] as any).reduce(
    (a:any,v:any) => ((a[v.slice(0,v.indexOf('='))] = v.slice(v.indexOf('=')+1)),a),
    {}
  )
}

/**
 *  获取包裹组件的名称
 */
export const getDisplayName = (Component:any) => {
  return Component.displayName ||  Component.name || 'Unknown';
}