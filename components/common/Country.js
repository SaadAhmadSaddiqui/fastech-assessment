import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import Autosuggest from 'react-autosuggest'

import countries from 'utils/countries'
import styled from 'styled-components'
import Error from 'styles/Error'
import Label from 'styles/Label'
import { ASWrapper, IconDown } from 'styles/ASWrapper'

const Country = ({ form, noPadding, name, label, moveLabel, mutatorName }) => {
  const [suggestions, setSuggestions] = useState([])

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : countries.filter(
          cont => cont.name.toLowerCase().slice(0, inputLength) === inputValue
        )
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => <span>{suggestion.name}</span>

  /**
   * Prevent form submission when Enter key is pressed.
   * If we don't do this, then the enclosing form will be submitted without
   * updating the value entered in Autosuggest.
   */
  const onKeyPress = event => {
    if (event.charCode === 13) {
      event.preventDefault()
    }
  }

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
    <CountryWrapper>
      <Field name={name}>
        {({ input }) => (
          <ASWrapper noPadding={noPadding}>
            <CustomLabel focused={focused} shrinked={shrink} move={moveLabel}>
              {label}
            </CustomLabel>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={() => setSuggestions([])}
              getSuggestionValue={suggestion => suggestion.name}
              onSuggestionSelected={(e, { suggestionValue }) =>
                form.mutators[mutatorName](suggestionValue)
              }
              renderSuggestion={renderSuggestion}
              inputProps={{
                value: input.value,
                name: input.name,
                onChange: input.onChange,
                onKeyPress,
                onFocus: () => {
                  setFocused(true)
                },
                onBlur
              }}
            />
          </ASWrapper>
        )}
      </Field>
      <IconDown />
      <Error name={name} />
    </CountryWrapper>
  )
}

Country.propTypes = {
  form: PropTypes.shape({
    mutators: PropTypes.shape({
      setCountry: PropTypes.func
    })
  }),
  label: PropTypes.string,
  moveLabel: PropTypes.string,
  mutatorName: PropTypes.string,
  name: PropTypes.string,
  noPadding: PropTypes.bool
}

const CountryWrapper = styled.div`
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

const CustomLabel = styled(Label)`
  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    ${({ focused, shrinked, move }) => {
      if (focused || shrinked) {
        return `
      transform: scale(0.8);
      color: #8e27ea;
      top: 6%;
      left: ${move ? '0.5%' : '-2.5%'};
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
      left: ${move ? '2%' : '0%'};
      `
    }
  }}
`

export default Country
