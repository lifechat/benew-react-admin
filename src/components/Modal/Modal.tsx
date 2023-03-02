import React from 'react'
import classNames from 'classnames'
import Dialog from 'rmc-dialog';
import {ModalPropsType} from './PropsType'
import './index.scss'
import './animate.less'


export interface ModalProps extends ModalPropsType<React.CSSProperties>{
    prefixCls?: string
    children?:any
    transitionName?: string
    maskTransitionName?: string
    className?: string
    wrapClassName?: string
    wrapProps?: Partial<React.HTMLProps<HTMLDivElement>>
    platform?: string
    style?: React.CSSProperties
    bodyStyle?: React.CSSProperties
    maskStyle?: React.CSSProperties
}

class ModalComponent<P, S> extends React.Component<P, S> {
    static show: (content: React.ReactNode, options?: ModalProps) => { close: () => void }
}

export default class Modal extends ModalComponent<ModalProps,any>{
    static defaultProps = {
        prefixCls: 'modal',
        transparent: false,
        popup: false,
        animationType: 'slide-down',
        animated: true,
        style: {},
        onShow() {},
        footer: [],
        closable: false,
        operation: false,
        platform: 'ios',
    }

    render(): React.ReactNode {
        const {
            prefixCls,
            className,
            wrapClassName,
            transitionName,
            maskTransitionName,
            style,
            platform,
            operation,
            animated,
            transparent,
            popup,
            animationType,
            ...restProps
          } = this.props


          let transName
          let maskTransName
          if (animated) {
            if (transparent) {
              transName = 'am-fade'
              maskTransName = 'am-fade'
            } else {
              transName = 'am-slide-up'
              maskTransName = 'am-slide-up'
            }
            if (popup) {
              transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down'
              maskTransName = 'am-fade'
            }
          }
      
          const wrapCls = classNames(wrapClassName, {
              [`${prefixCls}-wrap-popup`]: popup,
            })
            const cls = classNames(className, {
              [`${prefixCls}-transparent`]: transparent,
              [`${prefixCls}-popup`]: popup,
              [`${prefixCls}-popup-${animationType}`]: popup && animationType,
            })
      
          return (
              <Dialog
              {...restProps}
              prefixCls={prefixCls}
              className={cls}
              wrapClassName={wrapCls}
              transitionName={transitionName || transName}
              maskTransitionName={maskTransitionName || maskTransName}
              style={style}
              />
          )
    }
}