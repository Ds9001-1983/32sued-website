import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-3.5 font-[family-name:var(--font-accent)] text-sm tracking-wider uppercase transition-all duration-300 rounded-sm';

  const variants = {
    primary:
      'bg-highlight text-primary hover:bg-accent hover:shadow-lg hover:shadow-highlight/20',
    ghost:
      'border-2 border-text-light text-text-light hover:bg-text-light/10 hover:border-highlight',
    secondary:
      'bg-surface text-text-light hover:bg-primary hover:shadow-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={combinedStyles} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
