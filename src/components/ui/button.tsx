import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const hoverEffect =
  '[&:hover::before]:w-[200%] [&:hover::before]:h-[200%] before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:transition-all before:duration-300 before:ease-out before:z-10';

const buttonVariants = cva(
  `${hoverEffect} relative overflow-hidden w-fit inline-flex items-center justify-center whitespace-nowrap rounded-[2rem] border text-xs sm:text-base font-medium uppercase ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default:
          'bg-primary-default text-white before:bg-primary-defaultDarker border-[#AEAEB2]',
        dark: `bg-primary-dark text-white border-[#AEAEB2] before:bg-primary-dark20`,
        yellow:
          'bg-yellow-default text-black before:bg-yellow-darker border-white/40',
        transparent:
          'bg-transparent text-[#6B654B] before:bg-white/40 hover:text-white [&:hover_svg_path]:!fill-white border-white/40',
        transparentWhite:
          'bg-transparent text-white before:bg-white/40 border-white/40',
        white:
          'bg-buttonWhite-default text-primary-dark before:bg-buttonWhite-darker border-[#AEAEB2]',
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
