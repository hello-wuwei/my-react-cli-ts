import React, { lazy, Fragment } from 'react'
import { WrapRoute } from 'components'
const SpuManage = lazy(() => import('@/pages/Goods/SpuManage'))
const SpuAdd = lazy(() => import('@/pages/Goods/SpuManage/SpuAdd'))
const SpuPropertyAdd = lazy(() => import('@/pages/Goods/SpuManage/SpuPropertyAdd'))

export default [
  <WrapRoute path="/spu-manage" key="/spu-manage" component={SpuManage} />,
  <WrapRoute path="/spu-add" key="/spu-add" component={SpuAdd} />,
  <WrapRoute path="/spu-property-add" key="/spu-property-add" component={SpuPropertyAdd} />
]