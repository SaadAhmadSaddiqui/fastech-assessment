import styled from 'styled-components'

const Label = styled.p`
  transition: 0.2s;
  position: absolute;
  z-index: 1;
  font-weight: 300;
  font-size: calc((100vw * 0.9) / 100);
  color: #141212;
  top: 32%;
  left: 5%;
  pointer-events: none;

  @media only screen and (max-width: 1024px) and (orientation: portrait) {
    top: 34%;
    left: 2%;
    font-size: 16px;
    ${({ focused, shrinked, move }) => {
      if (focused || shrinked) {
        return `
      transform: scale(0.8);
      color: #8e27ea;
      top: 6%;
      left: ${move || '0.5%'};
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
      left: ${move || '2.5%'};
      `
    }
  }}
`

export default Label
