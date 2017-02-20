import React from 'react';
import { connect } from 'react-redux';
import Icon from '../../shared/icon';
import classNames from '../../../common/classnames';
import * as Actions from '../../../actions';

function SideTabOpener ({
  title,
  onClick,
  openTab
}) {
  const clickEvent = () => {
    return openTab(onClick);
  };

  return (
    <div className={classNames('item', 'link')} onClick={clickEvent}>
      { title && <span>{ title }</span> }
      <Icon icon={'arrow-forward'} />
    </div>
  );
}

SideTabOpener.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.string.isRequired,
  openTab: React.PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    openTab: (target) => {
      if (target === 'customcss') {
        dispatch(Actions.openCustomCSSModal());
      } else {
        dispatch(Actions.openTab(target));
      }
    }
  };
}

export default connect(null, mapDispatchToProps)(SideTabOpener);
