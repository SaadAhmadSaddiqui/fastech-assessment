import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Main = () => (
  <Section>
    <Pebbles>
      <YellowPebble
        src="/images/background/yellowpebble.png"
        alt="yellow-pebble"
      />
    </Pebbles>
    <LeftSide />
    <RightSide />
  </Section>
)

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pebbles = styled.div`
  position: absolute;
  align-self: stretch;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const YellowPebble = styled.img`
  display: none;
  position: absolute;
  top: calc((100vw * -49) / 100);
  right: calc((100vw * -35) / 100);
  width: 100%;
  height: auto;
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    display: block;
  }
`

export default Main
