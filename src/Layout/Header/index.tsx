import React, { FC, HTMLProps } from 'react'
import { Icon, Avatar } from 'antd'
import styles from './header.module.less'
type Iprops = {
  collapsed: boolean,
  onSwitch: () => void
} & HTMLProps<HTMLElement>

const Header: FC<Iprops> = ({ collapsed, onSwitch }) => {
  return (
    <div className={styles.header}>
      <div className="left">
        <Icon style={{ fontSize: 20 }} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={onSwitch} />
      </div>
      <div className="right">
        <ul>
          <li>
            <Icon style={{ fontSize: 20 }} type="search" />
          </li>
          <li>
            <Icon style={{ fontSize: 20 }} type="bell" />
          </li>
          <li>
            <Avatar style={{ background: "#f56a00" }} />
            <span style={{ marginLeft: 10 }}>Lucy</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header