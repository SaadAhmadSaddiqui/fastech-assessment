import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import styled from 'styled-components'

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ error: true, submitError: true, touched: true }}
  >
    {({ meta: { touched, error, submitError } }) =>
      touched && (error || submitError) ? (
        <Message>{error || submitError}</Message>
      ) : null
    }
  </Field>
)

Error.propTypes = {
  name: PropTypes.string.isRequired
}

const Message = styled.div`
  color: #f05858;
  font-size: calc((100vw * 0.8) / 100);
  font-weight: 300;
  text-align: left;
  grid-column: 1 / -1;
`

export default Error
