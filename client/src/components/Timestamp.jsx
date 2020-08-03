import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

export default ({ timestamp }) => (
  <Span>{moment(timestamp).format('MMMM YYYY')}</Span>
)

const Span = styled.span`
  margin: 0 5px;
`