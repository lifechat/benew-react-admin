

// interface modalParams {
//     unit: string,
//     num: number
//   }
  
//   const ModalBlock = ({ unit, num } : modalParams)=>{
//     if(num > 99) return (<p>Error, Num max is 99!</p>)
//     /* 取十位 */
//     const i:number = ~~(num/10)
//     /* 取个位 */
//     const j:number = num % 10
//     /* 然后分别进行渲染 */
//     return (
//       <div className="modal_block">
//         <div className="scroll-item">
//           <NumBlock num={i} />
//           <NumBlock num={j} />
//         </div>
//         <span className="num">{ unit }</span>
//       </div>
//     )
//   }
  
// interface timeParams {
//     day: number,
//     hours: number,
//     minutes: number,
//     seconds: number
//   }
//   const TimeModal = ({ day, hours, minutes, seconds }:timeParams) => {
//     return (<div className="flex-wrap">
//       { <ModalBlock  unit="天" num={ day }/> }
//       { <ModalBlock  unit="时" num={ hours }/> }
//       { <ModalBlock  unit="分" num={ minutes }/> }
//       { <ModalBlock  unit="秒" num={ seconds }/> }
//     </div>)
//   }
import { useState } from "react"

let timer:any
export default function () {
  /* 判断是否走完 */
  let isTurn:boolean
  const targetTime = '2022-11-01 23:59:59'
  let time = ~~((Date.parse(targetTime) - Date.now()) / 1e3)
  isTurn = time <= 0
  time = Math.abs(time)
  let day:number = ~~(time / 86400)
  let hours:number = ~~((time - (day * 86400)) / 3600)
  let minutes:number = ~~((time - (day * 86400) - (hours * 3600)) / 60)
  let seconds:number = time % 60
  const [ timeObj, setTime ] = useState({ day, hours, minutes, seconds })
  clearInterval(timer)
  console.log(day,hours,minutes,seconds);
  timer = setInterval(()=> {
    if(isTurn){
      if(++seconds > 59) {
        seconds = 0
        if(++minutes > 59){
          minutes = 0
          if(++hours > 23) {
            hours = 0
            ++day
          }
        }
      }
    }else{
      if(seconds-- < 1) {
        seconds = 59
        if(--minutes < 1){
          minutes = 59
          if(--hours < 1) {
            hours = 23
            --day
          }
        }
      }
    }
    setTime({ day, hours, minutes, seconds})
  }, 1e3)
//   <TimeModal time={timeObj} />
  return(
     <span>{day},{hours},{minutes},{seconds}</span>
  )
}
