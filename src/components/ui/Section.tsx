import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const sectionVariants = cva(
  'animate-panel-in border border-line/20 rounded-lg bg-surface-2/75 section-rhythm-light',
  {
    variants: {
      padding: {
        default: 'p-4 md:p-5',
        spacious: 'p-5 md:p-6',
      },
      gap: {
        md: 'flex flex-col gap-4',
        lg: 'flex flex-col gap-5',
      },
    },
    defaultVariants: {
      padding: 'default',
      gap: 'md',
    },
  },
);

export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

export function Section({ className, padding, gap, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ padding, gap }), className)} {...props} />;
}
