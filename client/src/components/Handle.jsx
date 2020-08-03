import React from 'react'
import styled from 'styled-components'

export default ({ handle }) => <SmallText>@{handle}</SmallText>

const SmallText = styled.span`
  font-size: 90%;
  margin: 0 5px;
`