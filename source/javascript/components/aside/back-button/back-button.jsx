import React from 'react';
import Icon from '../../shared/icon';
import classNames from '../../../common/classnames';
import localization from '../../../common/localization';
import { emptyFunction } from '../../../common/misc';

export default function BackButton ({
  onClick,
  className,
  title
}) {
  const locTitle = localization(title);

  return (
    <button title={locTitle} className={className} onClick={onClick}>
      <Icon icon={'arrow-back'} size={30} />
      <span>{ title }</span>
    </button>
  );
}

BackButton.propTypes = {
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  title: React.PropTypes.string
};

BackButton.defaultProps = {
  onClick: emptyFunction,
  className: classNames('tab__close'),
  title: 'go back'
};
