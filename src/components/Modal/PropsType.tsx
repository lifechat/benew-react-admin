import React from 'react'
export interface ModalPropsType<T> {
  title?: React.ReactNode
  visible?: boolean
  maskClosable?: boolean
  closable?: boolean
  footer?: React.ReactNode[]
  onClose?: () => void
  transparent?: boolean
  popup?: boolean
  animated?: boolean
  animationType?: any
  onAnimationEnd?: (visible: boolean) => void
  animateAppear?: boolean
  operation?: boolean
}
