import React, { lazy, Fragment } from 'react'
import { WrapRoute } from 'components'
const SkuManage = lazy(() => import('@/pages/Goods/SkuManage'))

export default [
  <WrapRoute path="/sku-manage" key="/sku-manage" component={SkuManage} />
]