import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

/**
 * Button component - visit `Controls` for configuration options
 */
const Button = ({
  badge,
  badgeText,
  className,
  disabled,
  iconName,
  inputGroup,
  label,
  loading,
  onClick,
  shape,
  state,
  size,
  variant,
}) => (
  <button
    type="button"
    className={cn(
      className,
      'btn',
      { [`btn-${variant}`]: variant },
      { [`btn-${size}`]: size },
      { [`btn-${state}`]: state },
      { 'input-group-btn': inputGroup },
      { 'btn-action': shape },
      { 's-circle': shape === 'circle' },
      { loading: loading },
      { badge: badge || badgeText },
    )}
    {... badgeText ? { 'data-badge': badgeText } : {}}
    disabled={disabled}
    {... disabled ? { tabIndex: -1 } : {}}
    onClick={onClick}
  >
    {label}
    {iconName && (
      <i className={cn('icon', iconName)}></i>
    )}
  </button>
)

Button.propTypes = {
  /**
   * Displays button in badge mode (dot on top right) when enabled
   */
  badge: PropTypes.bool,
  /**
   * Text or number to be displayed as badge on top right
   */
  badgeText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Passed styles to Button component.
   */
  className: PropTypes.string,
  /**
   * Renders button in disabled state, if true.
   */
  disabled: PropTypes.bool,
  /**
   * Icon to be displayed as button.
   * Refer spectre.css icons for list of supported icons.
   */
  iconName: PropTypes.string,
  /**
   * Button variants: default outline, primary and link.
   */
  variant: PropTypes.oneOf(['primary', 'link']),
  /**
   * Button shape, useful for icon buttons.
   */
  shape: PropTypes.oneOf(['square', 'circle']),
  /**
   * Button states: success and error.
   */
  state: PropTypes.oneOf(['success', 'error']),
  /**
   * Button sizes: small, medium default and large.
   */
  size: PropTypes.oneOf(['sm', 'lg', 'block']),
  /**
   * Button label content.
   */
  label: PropTypes.string,
  /**
   * Button loading state, if true.
   */
  loading: PropTypes.bool,
  /**
   * Event handler on click.
   */
  onClick: PropTypes.func,
  /**
   * Enables styling for input group, if true.
   */
  inputGroup: PropTypes.bool,
}

Button.defaultProps = {
  badge: false,
  badgeText: '',
  className: '',
  disabled: false,
  iconName: '',
  inputGroup: false,
  label: '',
  variant: null,
  shape: null,
  state: null,
  size: null,
  loading: false,
  onClick: undefined,
}

export default Button
