import React from 'react'
import { Table } from 'antd'
import { TableProps } from 'antd/es/table'

const GoTable = ({ columns = [], ...restProps }:TableProps<any>) => {
  columns.forEach((column:any) => column.align = 'center')
  return <Table columns={columns} {...restProps} />
}

export default GoTable