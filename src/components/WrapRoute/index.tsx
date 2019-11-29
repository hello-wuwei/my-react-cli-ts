import React, { Suspense } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { Spin } from 'antd'

const Spinner = () => {
  const style = { display: 'flex', justifyContent: 'center', marginTop: '20%' }
  return (
    <div style={style}>
      <Spin tip="加载中..." size="large" />
    </div>
  )
}

const WrapRoute = (props: RouteProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Route {...props} />
    </Suspense>
  )
}

export default WrapRoute