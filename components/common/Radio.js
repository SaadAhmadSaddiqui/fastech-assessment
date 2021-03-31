import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const Radio = ({ input, meta: { valid, touched }, ...rest }) => (
  <RadioContainer>
    <RadioInput
      type="radio"
      {...input}
      {...rest}
      style={{ borderColor: !valid && touched && '#F05858' }}
    />
    <Checkmark>
      <Stem />
      <Kick />
    </Checkmark>
  </RadioContainer>
)

const RadioContainer = styled.div`
  position: relative;
`

const Checkmark = styled.span`
  position: absolute;
  left: calc((100vw * 0.3) / 100);
  top: calc((100vw * 0.4) / 100);
  height: calc((100vw * 1.05) / 100);
  width: calc((100vw * 1.05) / 100);
  background-color: #efefef;
  border-radius: calc((100vw * 0.3) / 100);
  pointer-events: none;
  transition: 0.3s;
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    height: 15px;
    width: 15px;
    border-radius: 3px;
    left: 5px;
    top: 3px;
  }
`

const Stem = styled.div`
  transition: 0.3s;
  position: absolute;
  width: calc((100vw * 0.1) / 100);
  height: calc((100vw * 0.45) / 100);
  background-color: #fff;
  left: calc((100vw * 0.65) / 100);
  top: calc((100vw * 0.24) / 100);
  transform: rotate(30deg);
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    width: 2px;
    height: 9px;
    left: 9px;
    top: 3px;
  }
`

const Kick = styled.div`
  transition: 0.3s;
  position: absolute;
  width: calc((100vw * 0.3) / 100);
  height: calc((100vw * 0.1) / 100);
  background-color: #fff;
  left: calc((100vw * 0.28) / 100);
  top: calc((100vw * 0.6) / 100);
  transform: rotate(30deg);
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    width: 6px;
    height: 2px;
    left: 3px;
    top: 8px;
  }
`

const RadioInput = styled.input`
  transition: 0.3s;
  margin: calc((100vw * 0.6) / 100) calc((100vw * 0.4) / 100);
  opacity: 0;
  cursor: pointer;
  &:checked {
    & ~ ${Checkmark} {
      background: rgb(151, 51, 238);
      background: linear-gradient(
        141deg,
        rgba(151, 51, 238, 1) 0%,
        rgba(218, 34, 255, 1) 100%
      );
    }
  }
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    margin: 5px 5px;
  }
`

export default Radio
