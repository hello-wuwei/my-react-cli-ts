import React, { FC } from 'react'
import Menu from './Menu'
import styles from './index.module.less'

type Iprops = {
  collapsed: boolean
}

console.log(styles)
const SiderBar:FC<Iprops> = ({ collapsed }) => {
  return (
    <div className={styles.siderbar}>
      <div className="logo">
        {!collapsed && '闪逛商城管理系统'}
      </div>
      <Menu />
    </div>
  )
}

export default SiderBar