import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback: string;
}

export default function Avatar({ 
  className, 
  src, 
  alt,
  size = 'md',
  fallback,
  ...props 
}: AvatarProps) {
  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden inline-block bg-brand-100',
        {
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-12 h-12': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-brand-600 font-medium">
          {fallback.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
} 