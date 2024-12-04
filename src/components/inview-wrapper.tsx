'use client';

import { useGSAP } from '@gsap/react';
import { CSSProperties, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const InViewWrapper = ({
  children,
  start = 'top 70%',
  end = 'bottom top',
  duration = 0.6,
  from = { opacity: 0, transform: 'translateY(40px)' },
  to = { opacity: 1, transform: 'translateY(0)' },
}: {
  children: React.ReactNode;
  start?: string;
  end?: string;
  duration?: number;
  from?: CSSProperties;
  to?: CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = ref.current;

    if (element) {
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: start,
        end: end,
        onEnter: () => {
          gsap.to(element, {
            ...to,
            duration: duration,
          });
        },
      });

      return () => trigger.kill();
    }
  }, []);

  return (
    <div ref={ref} style={{ ...from }}>
      {children}
    </div>
  );
};

export default InViewWrapper;
