import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import Error from 'styles/Error'
import DayPicker from 'styles/DayPicker'
import { BsCalendar } from 'react-icons/bs'
import Label from 'styles/Label'

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
      <DayPicker
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
        showYearDropdown
        dateFormatCalendar="MMMM"
        maxDate={new Date()}
      />
      <Icon />
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
  margin: 10px 0px 0px;
  flex-flow: column;
  gap: 5px;

  @media only screen and (max-width: 538px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

const Icon = styled(BsCalendar)`
  position: absolute;
  font-size: calc((100vw * 1.2) / 100);
  color: #333030;
  right: 7%;
  top: 33%;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    font-size: 16px;
  }
`

export default Input
