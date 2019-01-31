import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledForm = styled.form`
  justify-content: center;
  display: grid;
  grid-template-areas:
    'label label'
    'input button'
    'result result';
  grid-template-columns: 1fr 55px;

  .form__label {
    font-size: 1.375rem;
    grid-area: label;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }

  .form__text {
    background: ${props =>
      props.theme.colors.white && rgba(props.theme.colors.white, 0.8)};
    border-radius: 4px 0 0 4px;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    color: #333;
    font-size: 1rem;
    grid-area: input;
    height: 44px;
    padding: 12px 10px;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.8);
    }
  }

  .form__button {
    background-image: ${props => props.theme.gradients.red};
    border-radius: 0 4px 4px 0;
    border: none;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5),
      inset 0 1px 0 0 rgba(241, 160, 194, 0.5);
    cursor: pointer;
    height: 44px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .form__result {
    font-size: 1.375rem;
    grid-area: result;
    height: 43px;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);

    p {
      margin: 24px 0 0;
    }

    span {
      color: #ffc600;
      font-family: 'cabazon', serif;
      font-size: 2.25rem;
    }
  }

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    grid-template-columns: minmax(auto, 695px) 99px;
  }
`;
