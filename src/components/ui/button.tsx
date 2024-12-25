import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonAfter =
  'after:content-[""] after:inline-block after:absolute after:inset-0 after:rounded-[100px] after:transition-all after:duration-300 after:ease-out after:-z-10 after:w-full after:h-full after:opacity-30';

const hoverEffect = `hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:translate-y-[-1px] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)] ${buttonAfter} hover:after:scale-x-125 hover:after:scale-y-[1.75] hover:after:opacity-0`;

const buttonVariants = cva(
  `${hoverEffect} relative w-fit inline-flex items-center justify-center whitespace-nowrap rounded-[2rem] border text-xs sm:text-base font-medium uppercase ring-offset-background transition-[colors, background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default:
          'bg-button-default after:bg-button-default text-white hover:bg-button-default20 border-[#AEAEB2]',
        dark: `bg-primary-dark after:bg-primary-dark text-white border-[#AEAEB2] hover:bg-primary-dark20`,
        yellow:
          'bg-yellow-default after:bg-yellow-default text-black hover:bg-yellow-darker border-white/40',
        transparent:
          'bg-transparent after:bg-transparent text-[#6B654B] hover:bg-white/40 hover:text-white [&:hover_svg_path]:!fill-white border-white/40',
        transparentWhite:
          'bg-transparent after:bg-transparent text-white hover:bg-white/40 hover:text-white border-white/40',
        white:
          'bg-buttonWhite-default after:bg-buttonWhite-default text-primary-dark hover:bg-buttonWhite-darker border-[#AEAEB2]',
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
