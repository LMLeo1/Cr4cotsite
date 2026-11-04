import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'outline' | 'success' | 'warning';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full';

    const variantStyles = {
      default: 'bg-bg-elevated text-text-muted border border-border',
      primary: 'bg-primary/20 text-primary border border-primary/30',
      outline: 'bg-transparent text-text-muted border border-border',
      success: 'bg-green-500/20 text-green-400 border border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';