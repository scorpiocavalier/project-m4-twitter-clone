import React from 'react'
import styled from 'styled-components'
// import Timestamp from './Timestamp'

export default ({ tweet: { status } }) => {
  return (
    <ColWrapper>
      <h1>{status}</h1>
    </ColWrapper>
  )
}

// const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `

const ColWrapper = styled.div`
  display: flex;
  flex-direction: col;
  border: 2px solid #f6f6f9;
`
