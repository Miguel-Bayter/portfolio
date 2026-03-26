import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const filterChipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-mono text-[0.66rem] uppercase tracking-[0.06em] transition-all duration-150',
  {
    variants: {
      variant: {
        default:
          'border-line/24 bg-surface-4/60 text-ink-2 hover:border-line/36 hover:bg-surface-5/76 hover:text-ink',
        active:
          'border-signal-cyan/44 bg-signal-cyan/16 text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]',
        all:
          'border-signal-cyan/34 bg-signal-cyan/10 text-ink',
      },
      size: {
        sm: 'px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterChipVariants> {}

export function FilterChip({ className, variant, size, ...props }: FilterChipProps) {
  return <button type="button" className={cn(filterChipVariants({ variant, size }), className)} {...props} />;
}
