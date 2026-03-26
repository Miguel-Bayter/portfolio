import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const pillVariants = cva(
  'inline-flex items-center gap-2 rounded-full border text-[0.72rem] font-mono tracking-[0.03em] whitespace-nowrap',
  {
    variants: {
      variant: {
        statusDark:
          'relative overflow-hidden border-[rgb(var(--signal-mint)/0.38)] bg-[linear-gradient(160deg,rgb(27_44_66/0.86),rgb(20_33_51/0.8))] text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_8px_16px_rgb(4_12_20/0.18),0_0_0_1px_rgb(45_212_191/0.08)]',
        statusLight:
          'relative overflow-hidden border-[rgb(var(--signal-mint)/0.34)] bg-[linear-gradient(160deg,rgb(240_246_252/0.95),rgb(228_238_248/0.88))] text-ink-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.34),0_7px_14px_rgb(62_92_120/0.14)]',
        metaLight:
          'border-[rgb(33_92_150/0.34)] bg-[linear-gradient(180deg,rgb(231_243_254/0.9),rgb(201_226_248/0.86))] text-[rgb(20_63_103/0.96)] shadow-[0_0_0_1px_rgb(255_255_255/0.56),0_8px_14px_rgb(58_98_140/0.14)]',
        metaDark:
          'border-[rgb(var(--line)/0.36)] bg-[linear-gradient(180deg,rgb(35_57_84/0.86),rgb(46_72_103/0.8))] text-[rgb(236_244_255/0.98)] shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_9px_16px_rgb(10_22_40/0.24)]',
      },
      size: {
        sm: 'px-[0.6rem] py-[0.22rem]',
        xs: 'px-[0.58rem] py-[0.24rem] text-[0.58rem]',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'statusDark',
    },
  },
);

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof pillVariants> {}

export function Pill({ className, variant, size, ...props }: PillProps) {
  return <span className={cn(pillVariants({ variant, size }), className)} {...props} />;
}
