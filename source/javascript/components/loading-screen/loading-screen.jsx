import React from 'react';
import { connect } from 'react-redux';
import classNames from '../../common/classnames';
import LoadingIcon from './icon';

class LoadingScreen extends React.Component {
  render () {
    const { builder } = this.props;
    const { isLoadingScreenActive, loadingScreenType } = builder;

    if (loadingScreenType === 0) {
      const loadingScreenClassName = classNames('loadingScreen', {
        'show': isLoadingScreenActive
      });

      return (
        <div id={classNames('loadingScreen')} className={loadingScreenClassName}>
          <LoadingIcon />
          <div className={classNames('loadingScreen__loading')}>Loading builder</div>
          <div className={classNames('loadingScreen__info')}>Please wait...</div>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    builder: state.builder
  };
}

export default connect(mapStateToProps)(LoadingScreen);