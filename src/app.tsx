import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './style/common.less'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

const history = createBrowserHistory({basename: '/'})
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/index" component={Layout}/>
      </Switch>
    </Router>
  )
}

export default App;