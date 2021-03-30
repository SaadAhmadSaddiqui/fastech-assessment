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
          <Label shrinked move="1.5%">
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
  .react-tel-input .form-control {
    background-color: #efefef;
    font-family: inherit;
    font-weight: 400;
    font-size: calc((100vw * 0.8) / 100);
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 0.2s;
    flex: 1 1 auto;
    padding: calc((100vw * 1.1) / 100) calc((100vw * 1) / 100);
    width: 91%;

    &:focus {
      outline: 0;
      border: 1px solid #8e27ea;
    }
  }

  .react-tel-input .selected-flag {
    width: 48px;
    padding: 0 0 0 13px;
  }

  .react-tel-input .flag-dropdown {
    background-color: transparent;
    border: none;
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
  flex-flow: column;
  gap: 5px;

  @media only screen and (max-width: 520px) {
    order: 1;
    flex: 1 1 100%;
    max-width: 100%;
  }
`

export default RegisterMobile
