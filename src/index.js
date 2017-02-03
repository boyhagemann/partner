
import React from 'react'
import 'rxjs'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'

import App from './components/App'
import epics from './epics'
import { componentsReducer } from './reducers'

const epicMiddleware = createEpicMiddleware(epics)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    components: componentsReducer,
    routing: routerReducer
  }),
  {},
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
