import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const tagVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border font-mono tracking-[0.05em]',
  {
    variants: {
      variant: {
        projectMetaLight:
          'border-[rgb(33_92_150/0.34)] bg-[linear-gradient(180deg,rgb(231_243_254/0.9),rgb(201_226_248/0.86))] text-[rgb(20_63_103/0.96)] shadow-[0_0_0_1px_rgb(255_255_255/0.56),0_8px_14px_rgb(58_98_140/0.14)]',
        projectMetaDark:
          'border-line/[0.36] bg-[linear-gradient(180deg,rgb(35_57_84/0.86),rgb(46_72_103/0.8))] text-[rgb(236_244_255/0.98)] shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_9px_16px_rgb(10_22_40/0.24)]',
      },
      size: {
        xs: 'px-[0.58rem] py-[0.24rem] text-[0.58rem]',
        sm: 'px-[0.7rem] py-[0.3rem] text-[0.64rem]',
      },
    },
    defaultVariants: {
      variant: 'projectMetaDark',
      size: 'xs',
    },
  },
);

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

export function Tag({ className, variant, size, ...props }: TagProps) {
  return <span className={cn(tagVariants({ variant, size }), className)} {...props} />;
}
