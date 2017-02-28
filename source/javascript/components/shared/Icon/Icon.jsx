import React from 'react';
import classNames from 'classnames';
import { assign as _assign } from 'lodash';
import renderIcon from './render-icon';
import { emptyFunction } from '../../../common/misc';

export default function Icon ({
  icon,
  onClick,
  size,
  style,
  className,
  ...others
}) {
  const cn = classNames(className);
  const styles = {
    fill: 'currentcolor',
    width: `${size}px`, // CSS instead of the width attr to support non-pixel units
    height: `${size}px` // Prevents scaling issue in IE
  };

  return (
    <svg
      onClick={onClick}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      style={_assign({}, styles, style)}
      className={cn}
      {...others}>
      { renderIcon(icon) }
    </svg>
  );
}

Icon.propTypes = {
  onClick: React.PropTypes.func,
  icon: React.PropTypes.string.isRequired,
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  style: React.PropTypes.object,
  className: React.PropTypes.string
};

Icon.defaultProps = {
  onClick: emptyFunction,
  size: 18,
  className: '',
  style: {}
};
