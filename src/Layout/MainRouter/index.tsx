import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import SpuManage from './main-router-modules/spu-manage'
import SkuManage from './main-router-modules/sku-manage'
import ClassifyManage from './main-router-modules/classify-manage'
import BrandManage from './main-router-modules/brand-manage'
import SupplierManage from './main-router-modules/supplier-manage'

const mainRouters = [
  ...SpuManage,
  ...SkuManage,
  ...ClassifyManage,
  ...BrandManage,
  ...SupplierManage
]

const MainRouter = () => (
  <Switch>
    {mainRouters}
    <Redirect path='/' to="/spu-manage/perfecting" />
  </Switch>
)

export default MainRouter