/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';


export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textareaValue: '',
      radioValue: '',
      isSubmit: true,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleTextareaChange = (e) => {
    this.setState({
      textareaValue: e.target.value,
    });
  }

  handleRadioChange = (e) => {
    this.setState({
      radioValue: e.target.value,
    });
  }

  render() {
    const btnClass = classnames({
      btn: true,
      'btn-orange': this.state.isSubmit,
    });
    return (
      <div>
        <p className={btnClass}>
          单行文本框：
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        </p>
        <p>
          多行文本框：
          <textarea type="text" value={this.state.textareaValue} onChange={this.handleTextareaChange} />
        </p>
        <p>单选款：性别：</p>
        <label>
          女：
          <input type="text" value="female" checked={this.state.radioValue === 'female'} onChange={this.handleRadioChange} />
        </label>
        <label>
          男：
          <input type="text" value="male" checked={this.state.radioValue === 'male'} onChange={this.handleRadioChange} />
        </label>
      </div>
    );
  }
}
