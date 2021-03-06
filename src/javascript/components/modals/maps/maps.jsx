import React from 'react';
import PropTypes from 'prop-types';
import QueryString from 'querystring';
import { isNull as _isNull, isElement as _isElement } from 'lodash';
import { connect } from 'react-redux';
import URL from 'url';
import classNames from '../../../common/classnames';
import ModalWrapper from '../common/wrapper';
import BottomNavigation from '../common/bottom-navigation';
import Modal from './modal';

import { closeModal, addNotification } from '../../../actions';

class Maps extends React.Component {
  static propTypes = {
    editTarget: PropTypes.any.isRequired,
    addNotification: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  };

  state = {
    url: 'https://www.youtube.com/watch?v=XNdNLNFZBmk'
  };

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.url !== this.state.url) {
      return true;
    }

    return false;
  }

  closeDialog () {
    return this.refs['modalWrapper'].closeDialog();
  }

  saveVideo () {
    const { url } = this.state;
    const { editTarget } = this.props;

    if (!_isElement(editTarget)) {
      return;
    }

    const videoHolderElement = editTarget.querySelector('.block-video-holder');

    if (_isElement(videoHolderElement)) {
      const parsedURL = URL.parse(url);
      const query = QueryString.parse(parsedURL.query);
      const host = parsedURL.host.toLowerCase();
      let videoID = null;

      if (host.indexOf('youtube.com') >= 0) {
        videoID = query.v;
      } else if (host.indexOf('youtu.be') >= 0) {
        videoID = parsedURL.path.substring(1);
      }

      if (!_isNull(videoID)) {
        videoHolderElement.setAttribute('data-videoid', videoID);

        this.props.addNotification({
          message: 'Video changed!',
          title: 'Video Change',
          level: 'info',
          autoDismiss: 3
        });
      }
    }

    this.closeDialog();
  }

  handleInputChange (value) {
    this.setState({
      url: value
    });
  }

  componentWillMount () {
    const { editTarget } = this.props;

    if (_isElement(editTarget)) {
      const videoHolderElement = editTarget.querySelector('.block-video-holder');

      if (_isElement(videoHolderElement)) {
        const videoID = videoHolderElement.getAttribute('data-videoid');
        const url = `https://www.youtube.com/watch?v=${videoID}`;

        this.setState({
          url: url
        });
      }
    }
  }

  render () {
    const { closeModal } = this.props;
    const className = classNames('modal');
    const actions = [
      { label: 'Cancel', onClick: ::this.closeDialog },
      { label: 'Save', onClick: ::this.saveVideo }
    ];

    return (
      <ModalWrapper ref='modalWrapper' onClose={closeModal} className={className}>
        <Modal />
        <BottomNavigation actions={actions} />
      </ModalWrapper>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    closeModal: () => {
      dispatch(closeModal());
    },

    addNotification: (notification) => {
      dispatch(addNotification(notification));
    }
  };
}

export default connect(null, mapDispatchToProps)(Maps);
