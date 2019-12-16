import React, { lazy } from 'react'
import { WrapRoute } from 'components'
const BrandManage = lazy(() => import('@/pages/Goods/BrandManage'))

export default [
  <WrapRoute path="/brand-manage" key="/brand-manage" component={BrandManage} />
]