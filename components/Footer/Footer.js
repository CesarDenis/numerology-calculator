import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { StyledFooter } from './Footer.styles';

const Footer = ({ className, ...rest }) => {
  const cn = cx('footer', className);

  return (
    <StyledFooter {...rest} className={cn}>
      <p className="footer__credits">
        Made with <span className="footer__love">♥</span> by{' '}
        <a className="footer__link footer__link--blue" href="https://cesardenis.com" target="blank">
          Cesar Denis
        </a>{' '}
        under{' '}
        <a
          className="footer__link footer__link--yellow"
          href="http://cesardenis.mit-license.org/"
          target="blank"
        >
          MIT license
        </a>
      </p>
    </StyledFooter>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
