import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home/Home'
import Blog from '../containers/Blog/Blog'
import Gallery from '../containers/Gallery/Gallery'
import About from '../containers/About/About'
import Landscape from '../containers/Landscape/Landscape'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/gallery' component={Gallery} exact />
      <Route path='/blog' component={Blog} exact />
      <Route path='/about' component={About} exact />
      <Route path='/landscape' component={Landscape} exact />
    </Switch>
  )
}

export default Routes
