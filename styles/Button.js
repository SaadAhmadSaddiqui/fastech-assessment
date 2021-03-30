import styled from 'styled-components'

const Button = styled.button`
  justify-self: start;
  margin: 20px 0 10px 0;
  background: #e60012;
  border: 0;
  padding: 10px 50px;
  color: #fff;
  transition: box-shadow 0.4s;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    outline: none;
    box-shadow: 3px 6px 14px 2px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    pointer-events: none;
    background: #dddddd;
  }

  @media only screen and (max-width: 720px) {
    justify-self: stretch;
  }
`

export default Button
