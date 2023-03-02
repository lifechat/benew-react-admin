import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Modal,{ModalProps} from './Modal'
import {closest} from './util'

export default function show(content:any,options:ModalProps = {}){
    if(!content){
        return {
            close:()=> {}
        }
    }

    const div:any = document.createElement('div');
    document.body.appendChild(div);

    function close(){
        ReactDOM.unmountComponentAtNode(div);
        if(div?.parentNode){
            div.parentNode.removeChild(div);
        }
    }

    const prefixCls = 'modal'

    function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return
        }
        const pNode = closest(e.target as Element, `.${prefixCls}-content`)
        if (!pNode) {
          e.preventDefault()
        }
      }
    

      ReactDOM.render(
        <Modal
          visible
          transparent
          transitionName="am-zoom"
          closable={false}
          maskClosable
          onClose={close}
          maskTransitionName="am-fade"
          wrapProps={{ onTouchStart: onWrapTouchStart }}
          {...options}
        >
          {content}
        </Modal>,
        div
      )
    
      return {
        close,
      }
}