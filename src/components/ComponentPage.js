import React from 'react'
import { connect } from 'react-redux'
import { reload } from '../actions'

import ComponentList from './ComponentList'


const ComponentPage = ({components, reload}) => {

  return (
    <div>
      Components
      <div>{ components.status }</div>
      <button onClick={ reload }>Reload</button>
      <ComponentList components={components.data} />
    </div>

  )
}

export default connect(
  ({ components }) => ({ components }),
  { reload }
)(ComponentPage)
