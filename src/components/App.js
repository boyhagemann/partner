import React from 'react'
import { Router, Route } from 'react-router'
import { connect } from 'react-redux'
import { load } from '../actions'

import Layout from './Layout'
import HomePage from './HomePage'
import ComponentPage from './ComponentPage'


const App = ({history, load}) => (
  <Router history={history}>
    <Route path="/" component={Layout}>
      <Route path="home" component={HomePage}/>
      <Route
        path="components"
        component={ComponentPage}
        onEnter={ load }
      />
    </Route>
  </Router>
)

export default connect(
  null,
  { load }
)(App)
