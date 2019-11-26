import React from 'react'
import { WrapRoute } from 'components'
import { Switch } from 'react-router-dom'
import SpuManage from '@/pages/Goods/SpuManage'
import SkuManage from '@/pages/Goods/SkuManage'
import ClassifyManage from '@/pages/Goods/ClassifyManage'
import BrandManage from '@/pages/Goods/BrandManage'
import SupplierManage from '@/pages/Goods/SupplierManage'

const MainRouter = () => (
  <Switch>
    <WrapRoute exact path={`/`} component={SpuManage} />
    <WrapRoute path={`/spu-manage`} component={SpuManage} />
    <WrapRoute path={`/sku-manage`} component={SkuManage} />
    <WrapRoute path={`/classify-manage`} component={ClassifyManage} />
    <WrapRoute path={`/brand-manage`} component={BrandManage} />
    <WrapRoute path={`/supplier-manage`} component={SupplierManage} />
  </Switch>
)

export default MainRouter