import React, { lazy } from 'react'
import { WrapRoute } from 'components'
import { Switch, Redirect } from 'react-router-dom'
const SpuManage = lazy(() => import('@/pages/Goods/SpuManage'))
const SkuManage = lazy(() => import('@/pages/Goods/SkuManage'))
const ClassifyManage = lazy(() => import('@/pages/Goods/ClassifyManage'))
const BrandManage = lazy(() => import('@/pages/Goods/BrandManage'))
const SupplierManage = lazy(() => import('@/pages/Goods/SupplierManage'))

const MainRouter = () => (
  <Switch>
    <WrapRoute path="/spu-manage" component={SpuManage} />
    <WrapRoute path="/sku-manage" component={SkuManage} />
    <WrapRoute path="/classify-manage" component={ClassifyManage} />
    <WrapRoute path="/brand-manage" component={BrandManage} />
    <WrapRoute path="/supplier-manage" component={SupplierManage} />
    <Redirect path='/' to="/spu-manage/perfecting" />
  </Switch>
)

export default MainRouter