import React, { forwardRef } from 'react'
import { Cascader } from 'antd'
// import { CascaderProps } from 'antd/es/cascader'

const classOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

// type Option = {
//   value: string;
//   label?: React.ReactNode;
//   disabled?: boolean;
//   children?: Option[];
// }

const SpuClassifySelect = (props:any, ref:any ) => {
  return (
    <Cascader ref={ref} {...props} options={classOptions} />
  )
}

export default forwardRef(SpuClassifySelect)