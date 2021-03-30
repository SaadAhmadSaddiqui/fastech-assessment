import styled from 'styled-components'
import { Field } from 'react-final-form'

const TextInput = styled(Field).attrs({
  // eslint-disable-next-line
  component: ({ input, meta: { valid, touched }, ...rest }) => (
    <input {...input} {...rest} />
  )
})`
  background-color: #efefef;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid transparent;
  padding: 20px;
  border-radius: 5px;
  transition: 0.2s;

  &:focus {
    outline: 0;
    border: 1px solid #8e27ea;
  }
`

export default TextInput
