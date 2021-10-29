import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home/Home'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  )
}

export default Routes
