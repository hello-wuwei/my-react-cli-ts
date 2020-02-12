import React, { lazy } from 'react'
import { WrapRoute } from 'components'
const SpuManage = lazy(() => import('@/pages/Goods/SpuManage'))

export default [
  <WrapRoute path="/spu-manage" key="/spu-manage" component={SpuManage} />
]