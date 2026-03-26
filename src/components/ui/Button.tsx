import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-cyan/45 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        topbar:
          'relative overflow-hidden border-line/35 bg-gradient-to-br from-surface-4/86 to-surface-2/80 text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_8px_16px_rgb(4_12_20/0.18)] hover:border-signal-cyan/40 hover:bg-surface-4/92',
        topbarLight:
          'relative overflow-hidden border-line/38 bg-gradient-to-br from-surface-0/98 to-surface-1/92 text-ink-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_8px_14px_rgb(62_92_120/0.12)] hover:border-signal-cyan/40 hover:bg-surface-0/98 hover:text-ink',
        ghost:
          'border-line/20 bg-surface-4/68 text-ink-3 hover:border-signal-cyan/55 hover:bg-surface-5 hover:text-ink',
      },
      size: {
        sm: 'h-8 px-3 text-[0.72rem] font-mono uppercase tracking-[0.06em]',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'sm',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
