import React, { FC, HTMLProps } from 'react'
import { Icon } from 'antd'
type Iprops = {
  collapsed: boolean,
  onSwitch: () => void
} & HTMLProps<HTMLElement>

const Header: FC<Iprops> = ({ collapsed, onSwitch }) => {
  return (
    <div>
      <div>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onSwitch}
        />
      </div>
      <div></div>
    </div>
  )
}

export default Header