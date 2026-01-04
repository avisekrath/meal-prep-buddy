import './Button.css';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  icon,
  iconPosition = 'left',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    pill && 'btn-pill',
    icon && !children && 'btn-icon-only',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick} {...props}>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
