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
      <Label focused={focused} shrinked={shrink} move={moveLabel}>
        {label}
      </Label>
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
  flex-flow: column;
  gap: 5px;

  @media only screen and (max-width: 520px) {
    order: 1;
    flex: 1 1 100%;
    max-width: 100%;
  }
`

const StyledInput = styled(TextInput)`
  flex: 1 1 auto;
  padding: calc((100vw * 1.1) / 100) calc((100vw * 1) / 100);
  font-size: calc((100vw * 0.8) / 100);
`

export default Input
