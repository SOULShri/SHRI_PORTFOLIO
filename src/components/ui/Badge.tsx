import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const variantClasses = {
    default: 'bg-surface-elevated text-gray-300 border border-surface-border',
    accent: 'bg-accent/10 text-blue-400 border border-accent/25',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    outline: 'bg-transparent text-gray-400 border border-surface-border',
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-md transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
