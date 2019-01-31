import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const love = keyframes`
  to {
    transform: scale(1.2);
  }
`;

export const StyledFooter = styled.footer`
  font-size: 1rem;
  grid-area: footer;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  .footer__credits {
    margin: 1rem auto;
    width: 190px;
  }

  .footer__love {
    display: inline-block;
    position: relative;
    top: 0.1em;
    font-size: 1.6em;
    color: ${props => props.theme.colors.red};
    transform: scale(0.9);
    animation: ${love} 0.6s infinite linear alternate-reverse;
  }

  .footer__link {
    text-decoration: none;
    transition: color 0.3s linear;

    &--blue {
      color: ${props => props.theme.colors.blue};

      &:hover {
        color: ${props =>
          props.theme.colors.blue && rgba(props.theme.colors.blue, 0.7)};
      }
    }

    &--yellow {
      color: ${props => props.theme.colors.primary};

      &:hover {
        color: ${props =>
          props.theme.colors.blue && rgba(props.theme.colors.primary, 0.7)};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    .footer__credits {
      width: auto;
    }
  }
`;
