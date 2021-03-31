import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-input-2'
import { Field } from 'react-final-form'
import styled from 'styled-components'
import Label from 'styles/Label'
import Error from 'styles/Error'

const RegisterMobile = ({ country, noPadding, phoneFont }) => (
  <InputWrapper>
    <Field name="mobile">
      {({ input }) => (
        <StyledWrapper noPadding={noPadding} phoneFont={phoneFont}>
          <Label shrinked move="0%">
            Contact Number
          </Label>
          <PhoneInput
            specialLabel=""
            country={country.code}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            preferredCountries={[
              'ae',
              'sa',
              'om',
              'bh',
              'cn',
              'eg',
              'de',
              'jo',
              'hk',
              'in',
              'iq',
              'kw',
              'lb',
              'pk',
              'qa',
              'sd',
              'tr',
              'gb',
              'us'
            ]}
            defaultMask="............"
            masks={{ ae: '.. ... ....' }}
          />
        </StyledWrapper>
      )}
    </Field>
    <Error name="mobile" />
  </InputWrapper>
)

RegisterMobile.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string
  }),
  noPadding: PropTypes.bool,
  phoneFont: PropTypes.string
}

const StyledWrapper = styled.div`
  flex: 1 1 100%;
  .react-tel-input {
    display: flex;
  }

  .form-control {
    background-color: #efefef;
    font-family: inherit;
    font-weight: 400;
    font-size: calc((100vw * 0.8) / 100);
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.2s;
    flex: 1 1 auto;
    padding: calc((100vw * 1) / 100);
    padding-bottom: calc((100vw * 0.4) / 100);

    @media only screen and (max-width: 1024px) and (orientation: portrait) {
      padding: 20px 10px 5px;
      font-size: 16px;
    }

    &:focus {
      outline: 0;
      border: 1px solid #8e27ea;
    }
  }

  .react-tel-input .flag-dropdown {
    display: none;
  }

  .react-tel-input .flag-dropdown:hover .selected-flag,
  .react-tel-input .flag-dropdown:focus .selected-flag,
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: none;
  }
`

const InputWrapper = styled.div`
  position: relative;
  flex: 1 1 49%;
  max-width: 49%;
  display: flex;
  gap: 5px;

  @media only screen and (max-width: 538px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export default RegisterMobile
