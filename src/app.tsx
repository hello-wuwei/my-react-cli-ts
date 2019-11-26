import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './style/common.less'
import Login from '@/Login'
import Layout from '@/Layout'

const history = createBrowserHistory({basename: '/'})
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </Router>
  )
}

export default App;