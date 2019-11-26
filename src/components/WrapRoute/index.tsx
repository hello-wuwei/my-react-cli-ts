import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

const WrapRoute = (props: RouteProps) => {
  return <Route {...props} />
}

export default WrapRoute