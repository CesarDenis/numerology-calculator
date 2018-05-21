import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p className="Footer__credits">
          Made with <span className="Footer__love">♥</span> by{' '}
          <a
            className="Footer__link Footer__link--blue"
            href="https://cesardenis.com"
            target="blank">
            Cesar Denis
          </a>{' '}
          under{' '}
          <a
            className="Footer__link Footer__link--yellow"
            href="http://cesardenis.mit-license.org/"
            target="blank">
            MIT license
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
