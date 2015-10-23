import React, { Component, PropTypes } from 'react';

class Logo extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'ABuilder'
  }

  shouldComponentUpdate (nextProps, nextState) {
    return false;
  }

  render () {
    return (
      <div className='ab-logo'>
        <div className='ab-logo__icon'>
          <div className='ab-logo__left'></div>
          <div className='ab-logo__right'></div>
        </div>
        <div className='ab-logo__text'>{this.props.text}</div>
      </div>
    )
  }
}

export default Logo;
