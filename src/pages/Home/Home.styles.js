import styled from 'styled-components';

export const StyledHome = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-areas:
    'content'
    'footer';
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
  min-height: 100%;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;

  .page__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: content;
  }

  @media (min-width: ${props => props.theme.breakpoint.sm}) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
