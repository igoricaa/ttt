import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'w-fit inline-flex items-center justify-center whitespace-nowrap rounded-[2rem] border text-xs sm:text-base font-medium uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary-default text-white hover:bg-primary/90 border-[#AEAEB2]',
        dark: 'bg-primary-dark text-white hover:bg-primary-dark/80 border-[#AEAEB2]',
        yellow: 'bg-yellow text-black hover:bg-yellow/80 border-white/40',
        transparent:
          'bg-transparent text-[#6B654B] hover:bg-white/20 border-white/40',
        white:
          'bg-buttonWhite text-primary-dark hover:bg-buttonWhite/80 border-[#AEAEB2]',
      },
      size: {
        default:
          'h-10 sm:h-14 px-4 sm:px-6 gap-2 [&_svg]:size-[14px] sm:[&_svg]:size-[18px]',
        lg: 'h-10 sm:h-16 text-base sm:!text-2xl sm:px-8 gap-2 sm:gap-4 [&_svg]:size-[16px] sm:[&_svg]:size-[22px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
