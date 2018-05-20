import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = { inputName: '' };
  }

  _onChangeName(event) {
    this.setState({ inputName: event.target.value });
  }

  _isCoreValue(n) {
    return (n >= 1 && n <= 9) || n === 11 || n === 22;
  }

  _sumCharacters(value) {
    return Array.prototype.map
      .call((value || '').toLowerCase(), character => {
        if (character >= 'a' && character <= 'z') {
          return Number(character.charCodeAt(0) - 'a'.charCodeAt(0)) + 1;
        }
        return character >= '0' && character <= '9' ? Number(character) : 0;
      })
      .reduce((sum, current) => sum + current, 0);
  }

  _calculateString(value) {
    const sum = this._sumCharacters(value);

    if (sum === 0) {
      return;
    }

    return this._isCoreValue(sum) ? sum : this._calculateString(String(sum));
  }

  render() {
    return (
      <div className="Form">
        <label for="words" className="Form__label">
          Type the word you want to calculate (a-z, 0-9 only)
        </label>
        <input
          id="words"
          class="Form__text"
          type="text"
          placeholder="Enter word"
          value={this.state.inputName}
          onChange={this._onChangeName.bind(this)}
        />
        <div className="Form__result">
          <p>
            The number is:{' '}
            <span>{this._calculateString(this.state.inputName)}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
