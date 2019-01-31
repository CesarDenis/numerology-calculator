import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ReactComponent as IconReset } from '../../images/icon-reset.svg';

import { StyledForm } from './Form.styles';

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = { inputName: '' };

  handleOnClickClear = () => {
    this.setState({ inputName: '' });
  };

  handleOnChangeName = event => {
    this.setState({ inputName: event.target.value });
  };

  isCoreValue = n => {
    return (n >= 1 && n <= 9) || n === 11 || n === 22;
  };

  sumCharacters = value => {
    return Array.prototype.map
      .call((value || '').toLowerCase(), character => {
        if (character >= 'a' && character <= 'z') {
          return Number(character.charCodeAt(0) - 'a'.charCodeAt(0)) + 1;
        }
        return character >= '0' && character <= '9' ? Number(character) : 0;
      })
      .reduce((sum, current) => sum + current, 0);
  };

  calculateString = value => {
    const sum = this.sumCharacters(value);

    if (sum === 0) {
      return 0;
    }

    return this.isCoreValue(sum) ? sum : this.calculateString(String(sum));
  };

  render() {
    const { className, ...rest } = this.props;
    const { inputName } = this.state;
    const cn = cx(`header`, className);
    const number = this.calculateString(inputName);

    return (
      <StyledForm {...rest} className={cn}>
        <label htmlFor="words" className="form__label">
          Type the word you want to calculate (a-z, 0-9 only)
        </label>
        <input
          id="words"
          className="form__text"
          type="text"
          placeholder="Enter word"
          autoComplete="off"
          value={inputName}
          onChange={this.handleOnChangeName}
        />
        <button
          className="form__button"
          type="button"
          aria-label="Clear the input text"
          onClick={this.handleOnClickClear}
        >
          <IconReset className="form__button__icon" alt="Icon of reset" />
        </button>
        <div className="form__result">
          {number > 0 && (
            <p>
              The number is <span>{number}</span>
            </p>
          )}
        </div>
      </StyledForm>
    );
  }
}

export default Form;
