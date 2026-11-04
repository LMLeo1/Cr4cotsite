import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { IconArrowRight } from './Icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  iconRight?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      iconRight = false,
      disabled,
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
      disabled:opacity-50 disabled:cursor-not-allowed
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

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          children
        )}
        {iconRight && !loading && <IconArrowRight size={18} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };