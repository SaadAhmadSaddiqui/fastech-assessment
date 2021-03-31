import styled from 'styled-components'
import { Field } from 'react-final-form'
import DatePicker from 'react-datepicker'

const DayPicker = styled(Field).attrs({
  // eslint-disable-next-line
  component: ({ input: { onChange, value }, ...rest }) => (
    <StyledWrapper>
      <DatePicker
        popperClassName="popper"
        selected={value}
        onChange={date => onChange(date)}
        {...rest}
      />
    </StyledWrapper>
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
`

const StyledWrapper = styled.div`
  flex: 1 1 100%;
  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    display: flex;
  }

  .react-datepicker__input-container {
    display: flex;
  }
`

export default DayPicker
