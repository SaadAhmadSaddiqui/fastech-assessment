import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'

export const ASWrapper = styled.div`
  .react-autosuggest__container {
    display: flex;
  }

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    flex: 1 1 100%;
    background-color: #efefef;
    font-family: inherit;
    font-weight: 400;
    font-size: calc((100vw * 0.8) / 100);
    border: 1px solid transparent;
    padding: calc((100vw * 1) / 100);
    border-radius: 5px;
    transition: 0.2s;

    &:focus {
      outline: 0;
      border: 1px solid #8e27ea;
    }
  }

  .react-autosuggest__input--focused {
    outline: none;
    border-bottom: 1px solid black;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: calc((100vw * 3) / 100);
    width: calc((100vw * 15) / 100);
    background-color: #fff;
    font-weight: 400;
    font-size: calc((100vw * 0.8) / 100);
    z-index: 2;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.35);
    border-radius: 0 0 3px 3px;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: calc((100vw * 0.5) / 100) calc((100vw * 1) / 100);
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`

export const IconDown = styled(FaCaretDown)`
  position: absolute;
  font-size: calc((100vw * 1.2) / 100);
  color: #333030;
  right: 7%;
  top: 33%;
`
