import * as React from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4';
}

export function SectionHeading({ as = 'h3', className, ...props }: SectionHeadingProps) {
  const Comp = as;
  return <Comp className={cn('section-title-emphasis m-0 text-[1.15rem] font-semibold tracking-[-0.01em] text-ink', className)} {...props} />;
}
