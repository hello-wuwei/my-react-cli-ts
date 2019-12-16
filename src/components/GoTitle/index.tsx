import React, { ReactNode, CSSProperties } from 'react'
import styles from './index.module.less'

type IProps = {
  children: ReactNode,
  action: ReactNode,
  style?: CSSProperties
}

const GoTitle = ({ children = null, action = null, style = {} }:IProps) => {
  return (
    <div className={styles['go-title']} style={style}>
      <h3>{ children }</h3>
      <div>{action}</div>
    </div>
  )
}

export default GoTitle