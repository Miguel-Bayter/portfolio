import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const cardVariants = cva(
  'relative overflow-hidden rounded-lg border transition-all duration-150',
  {
    variants: {
      variant: {
        project:
          'border-line/20 bg-surface-3 shadow-[inset_0_1px_0_rgb(255_255_255/0.06),0_14px_28px_rgb(5_12_22/0.22)] hover:border-line/40 hover:bg-surface-4',
        projectSelected:
          'border-signal-cyan/50 bg-surface-4 shadow-[inset_0_0_0_1px_rgba(59,176,242,0.16),0_14px_30px_rgba(10,19,30,0.18)]',
        projectLight:
          'border-line/20 bg-[linear-gradient(180deg,rgb(var(--surface-0)/0.97),rgb(var(--surface-2)/0.96))] shadow-[0_8px_18px_rgba(62,92,120,0.10),inset_0_1px_0_rgba(255,255,255,0.32)] hover:border-line/34',
      },
    },
    defaultVariants: {
      variant: 'project',
    },
  },
);

export interface CardProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof cardVariants> {
  as?: 'article' | 'div' | 'section' | 'button' | 'a';
}

export function Card({ as = 'article', className, variant, ...props }: CardProps) {
  const Comp = as;
  return <Comp className={cn(cardVariants({ variant }), className)} {...props} />;
}
