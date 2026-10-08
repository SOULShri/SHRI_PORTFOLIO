import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-5 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent hover:bg-accent-hover text-white shadow-subtle-glow hover:shadow-blue-glow border border-accent/40 active:translate-y-0.5',
    secondary:
      'bg-surface hover:bg-surface-hover text-gray-200 hover:text-white border border-surface-border hover:border-gray-700 shadow-sm active:translate-y-0.5',
    outline:
      'bg-transparent hover:bg-surface/50 text-gray-300 hover:text-white border border-surface-border hover:border-accent/50 active:translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-surface/60 text-muted hover:text-white border border-transparent hover:border-surface-border active:translate-y-0.5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform group-hover:scale-105 shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform group-hover:translate-x-0.5 shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
