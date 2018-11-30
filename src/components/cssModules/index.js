import React, { Component } from 'react';
/* components/submit-button.js */
import styles from './button.less';

class CSSModules extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className={styles.inProgress}>确认</button>
      </div>
    );
  }
}

export default CSSModules;
