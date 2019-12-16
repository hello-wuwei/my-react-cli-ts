import React, { lazy, Fragment } from 'react'
import { WrapRoute } from 'components'
const ClassifyManage = lazy(() => import('@/pages/Goods/ClassifyManage'))

export default [
  <WrapRoute path="/classify-manage" key="/classify-manage" component={ClassifyManage} />
]