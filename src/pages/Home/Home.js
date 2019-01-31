import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Footer, Form, Header } from '../../components';

import { StyledHome } from './Home.styles';

const Home = ({ className, ...rest }) => {
  const cn = cx(`page`, className);

  return (
    <StyledHome {...rest} className={cn}>
      <main className="page__content">
        <Header />
        <Form />
      </main>
      <Footer />
    </StyledHome>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
