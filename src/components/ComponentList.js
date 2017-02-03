import React from 'react'
import ComponentItem from './ComponentItem'

const ComponentList = ({components = []}) => (
  <div>{ components.map( component => (
    <ComponentItem
      key={component.id}
      component={component}
    /> )
  ) }
  </div>
)

export default ComponentList
