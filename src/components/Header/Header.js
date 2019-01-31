import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { StyledHeader } from './Header.styles';

const Header = ({ className, ...rest }) => {
  const cn = cx(`header`, className);
  return (
    <StyledHeader {...rest} className={cn}>
      <h1 className="header__title">
        Welcome to the <span>Numerology</span> <strong>Calculator</strong>
      </h1>
    </StyledHeader>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
