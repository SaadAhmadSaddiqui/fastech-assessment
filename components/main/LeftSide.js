import React from 'react'
import styled from 'styled-components'

const LeftSide = () => (
  <Container>
    <LeftContent>
      <YellowPebble>
        <Pebble src="/images/background/yellowpebble.png" alt="yellow-pebble" />
      </YellowPebble>
      <RedPebble>
        <Pebble src="/images/background/redpebble.png" alt="yellow-pebble" />
      </RedPebble>
      <Title>digg</Title>
      <WhitePebbleWrapper>
        <WhitePebble
          src="/images/background/whitepebble.png"
          alt="white-pebble"
        />
        <ManImg src="/images/background/man.png" alt="man" />
        <ManMore src="/images/background/man-more.png" alt="man-more" />
      </WhitePebbleWrapper>
      <Text>
        &apos;Coming to Dubai with One Step Dubai has been the best decision of
        my life. I am now living in Dubai with a good job and I will be getting
        married next year!&apos;
      </Text>
      <Person>
        Mohammed, One Step Dubai student
        <br />
        Pakistan
      </Person>
    </LeftContent>
  </Container>
)

const Container = styled.div`
  position: relative;
  height: calc(100vh);
  background-image: url('/images/background/bluebg.png');
  background-size: 100% calc(100vh);
  background-repeat: no-repeat;
  flex: 1 1 50%;
  max-width: 50%;
  display: flex;
  align-items: flex-start;
  overflow: hidden;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    display: none;
  }
  /* background-color: red; */
`

const LeftContent = styled.div`
  padding: calc((100vw * 3.5) / 100);
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  /* background-color: pink; */
`

const Title = styled.h1`
  margin-bottom: calc((100vw * 5) / 100);
  font-family: IBMPlexSans;
  font-weight: 700;
  font-size: calc((100vw * 3) / 100);
  color: #fff;
`

const Text = styled.p`
  margin-top: calc((100vw * 2) / 100);
  width: 90%;
  line-height: calc((100vw * 1.8) / 100);
  font-size: calc((100vw * 1) / 100);
  font-weight: 400;
  color: #fff;
`

const Person = styled.p`
  margin-top: calc((100vw * 2) / 100);
  width: 90%;
  line-height: calc((100vw * 1.8) / 100);
  font-size: calc((100vw * 1.2) / 100);
  font-weight: 600;
  color: #fff;
`

const WhitePebbleWrapper = styled.div`
  position: relative;
`

const YellowPebble = styled.div`
  position: absolute;
  top: calc((100vw * -16) / 100);
  right: calc((100vw * -4.5) / 100);
`

const RedPebble = styled.div`
  position: absolute;
  bottom: calc((100vw * -20) / 100);
  right: calc((100vw * -4.5) / 100);
`

const Pebble = styled.img`
  width: calc((100vw * 28) / 100);
  height: auto;
`

const WhitePebble = styled.img`
  width: 55%;
  height: auto;
`

const ManImg = styled.img`
  position: absolute;
  width: 55%;
  left: 0;
`

const ManMore = styled.img`
  position: absolute;
  width: 39.8%;
  left: 9.5%;
  top: -10.6%;
`

export default LeftSide
