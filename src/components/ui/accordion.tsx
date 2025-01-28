import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import ArrowIconAccordion from './icons/arrow-accordion';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    buttonText: string;
  }
>(({ className, children, buttonText, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-col sm:flex-row flex-1 gap-4 sm:gap-0 sm:items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>button]:bg-primary-dark [&[data-state=open]>button]:text-white [&[data-state=open]>button]:hover:bg-transparent [&[data-state=open]>button]:hover:text-primary-dark [&[data-state=open]>button>svg]:fill-white [&[data-state=open]>button>svg>path]:hover:fill-primary-dark',
          className
        )}
        {...props}
      >
        {children}
        <div className='group h-[40px] sm:h-[50px] lg:h-[60px] flex items-center justify-center gap-2 px-4 sm:px-6 text-primary-dark whitespace-nowrap text-base sm:text-xl lg:text-2xl font-medium uppercase border border-primary-dark bg-transparent rounded-full hover:bg-primary-dark hover:text-white transition-all duration-300'>
          {buttonText}
          <ArrowIconAccordion className='relative z-10 w-4 h-3 sm:w-5 sm:h-4 rotate-90 group-hover:rotate-[270deg] transition-all duration-200 fill-primary-dark group-hover:fill-white' />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-8 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
