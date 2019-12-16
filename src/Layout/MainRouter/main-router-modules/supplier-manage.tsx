import React, { lazy, Fragment } from 'react'
import { WrapRoute } from 'components'
const SupplierManage = lazy(() => import('@/pages/Goods/SupplierManage'))

export default [
  <WrapRoute path="/supplier-manage" key="/supplier-manage" component={SupplierManage} />
]