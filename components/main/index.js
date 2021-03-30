import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Main = () => (
  <Section>
    <LeftSide />
    <RightSide />
  </Section>
)

const Section = styled.div`
  display: flex;
`

export default Main
