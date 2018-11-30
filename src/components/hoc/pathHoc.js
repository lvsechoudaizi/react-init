import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

const pathHoc = (WrappedComponent) => {
  class HOC extends PureComponent {
    componentDidMount() {
      // 先初始化一次
      this.handleLocationChange(this.props.location);
      this.unsubscribeFromHistory = this.props.history.listen(
        this.handleLocationChange,
      );
    }

    componentWillUnmount() {
      if (this.unsubscribeFromHistory) {
        this.unsubscribeFromHistory();
      }
    }

    handleLocationChange = (location) => {
      const { pathname } = location;
      const paths = pathname.split('/').filter(o => o !== '');
      console.log('paths:', paths);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};

export default pathHoc;
