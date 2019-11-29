import React, { FC, SVGProps } from 'react'

type IProps = {
  type: string,
  size?: number
} & SVGProps<SVGSVGElement>   // 获取并扩展原生元素的props类型（还有React.HTMLProps<HTMLButtonElement>）

// interface IProps extends SVGProps<SVGSVGElement> {
//   type: string,
//   size?: number
// }

const Icon = ({ type, size = 16, ...restProps }:IProps) => {
  return (
    <svg {...restProps} width={size} height={size} aria-hidden="true">
      <use xlinkHref={`#icon${type}`}></use>
    </svg>
  )
}

export default Icon