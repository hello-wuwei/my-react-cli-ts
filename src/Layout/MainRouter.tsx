import React from 'react'
import { WrapRoute } from 'components'
import { Switch } from 'react-router-dom'
import SpuManage from '@/pages/Goods/SpuManage'
import SkuManage from '@/pages/Goods/SkuManage'

const MainRouter = () => (
  <Switch>
    <WrapRoute path={`/spu-manage`} component={SpuManage} />
    <WrapRoute path={`/sku-manage`} component={SkuManage} />
  </Switch>
)

export default MainRouter