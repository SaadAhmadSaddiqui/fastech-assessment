import styled from 'styled-components'
import { Field } from 'react-final-form'
import DatePicker from 'react-datepicker'

const DayPicker = styled(Field).attrs({
  // eslint-disable-next-line
  component: ({ input: { onChange, value }, ...rest }) => (
    <DatePicker
      popperClassName="popper"
      selected={value}
      onChange={date => onChange(date)}
      {...rest}
    />
  )
})`
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
`

export default DayPicker
