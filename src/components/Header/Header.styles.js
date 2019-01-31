import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 24px;

  .header__title {
    font-family: 'proxima-nova', sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    width: 225px;
    margin: 0 auto;
    transform: rotate(-7deg);

    span {
      color: ${props => props.theme.colors.primary};
      font-family: 'cabazon', serif;
      font-size: 3.25rem;
    }

    strong {
      font-size: 2.25rem;
    }
  }

  @media (min-width: 576px) {
    .header__title {
      font-size: 3.5rem;
      width: 476px;

      span {
        font-size: 6.875rem;
      }

      strong {
        font-size: 4.5rem;
      }
    }
  }
`;
