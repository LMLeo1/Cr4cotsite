import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { IconArrowRight, IconArrowUpRight } from './Icons';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconRight?: boolean;
  icon?: 'arrowRight' | 'arrowUpRight';
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconRight = false,
      icon = 'arrowRight',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium transition-all duration-250
      rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
    `;

    const variantStyles = {
      primary: 'bg-gradient-to-br from-primary to-primary-dark text-bg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0',
      secondary: 'bg-bg-elevated text-text border border-border hover:bg-bg-card hover:border-border-light hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0',
      ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-bg-elevated',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const IconComponent = icon === 'arrowUpRight' ? IconArrowUpRight : IconArrowRight;

    return (
      <a
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
        {iconRight && <IconComponent size={18} />}
      </a>
    );
  }
);

Link.displayName = 'Link';

export { Link };
export type { LinkProps };