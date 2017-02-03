import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background: #eee
`

const Heading = styled.h2`
  color: red
`

const Description = styled.h2`
  color: grey
`

const ComponentItem = ({component}) => (
  <Item>
    <Heading>{ component.label}</Heading>
    <Description>{ component.description }</Description>
  </Item>
)

export default ComponentItem
