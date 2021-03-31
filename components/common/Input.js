import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Error from 'styles/Error'
import Label from 'styles/Label'
import TextInput from 'styles/TextInput'

const Input = ({ label, type, name, autoComplete, required, moveLabel }) => {
  const [focused, setFocused] = useState(false)
  const [shrink, setShrink] = useState(false)

  const onBlur = e => {
    if (e.target.value === '') {
      setShrink(false)
    } else {
      setShrink(true)
    }
    setFocused(false)
  }

  return (
    <InputWrapper>
      <CustomLabel focused={focused} shrinked={shrink} move={moveLabel}>
        {label}
      </CustomLabel>
      <StyledInput
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
      />
      <Error name={name} />
    </InputWrapper>
  )
}

Input.propTypes = {
  autoComplete: PropTypes.string,
  label: PropTypes.string,
  moveLabel: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
}

const InputWrapper = styled.div`
  position: relative;
  flex: 1 1 49%;
  max-width: 49%;
  display: flex;
  flex-flow: wrap;
  gap: 5px;

  @media only screen and (max-width: 538px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

const StyledInput = styled(TextInput)`
  flex: 1 1 auto;
  padding: calc((100vw * 1) / 100);
  padding-bottom: calc((100vw * 0.4) / 100);
  font-size: calc((100vw * 0.8) / 100);

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    padding: 20px 10px 5px;
    font-size: 16px;
  }
`
const CustomLabel = styled(Label)`
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    ${({ focused, shrinked }) => {
      if (focused || shrinked) {
        return `
      transform: scale(0.8);
      color: #8e27ea;
      top: 6%;
      left: 0%;
      `
      }
    }}
  }

  ${({ focused, shrinked, move }) => {
    if (focused || shrinked) {
      return `
      transform: scale(0.8);
      color: #8e27ea;
      top: 6%;
      left: ${move ? '1.5%' : '2%'};
      `
    }
  }}
`

export default Input
