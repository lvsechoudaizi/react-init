/* eslint-disable react/prop-types */
/**
 * 下拉组件；组件分离为粒度最小的原子
 * 分析下拉组件的形态:
 * 1.显示用户的下拉所选项 ：SelectedItem
 * 2.当前下拉的状态：isActive
 * 3.反馈下拉的状态: onClickHeader
 * 4.下拉框提示:placeholder
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class SelectInput extends Component {
  static displayName = 'SelectInput';

  static propTypes = {
    SelectedItem: PropTypes.string,
    isActive: PropTypes.string,
    onClickHeader: PropTypes.func,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    SelectedItem: '',
    isActive: '',
    placeholder: '',
    onClickHeader: () => {},
  }

  render() {
    const {
      SelectedItem, isActive, onClickHeader, placeholder,
    } = this.props;
    const { text } = SelectedItem;
    return (
      <div onClick={onClickHeader}>
        <input
          type="text"
          disabled
          value={text}
          placeholder={placeholder}
        />
        <Icon className={isActive} name="angle-down" />
      </div>
    );
  }
}
