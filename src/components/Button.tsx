import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const variantStyles = {
  primary: 'bg-brand text-white hover:bg-brand-600 shadow-sm',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
  outline: 'border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-brand dark:hover:border-brand'
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  ...props
}: ButtonProps) {
  const styles = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      {...props}
    />
  );
}
