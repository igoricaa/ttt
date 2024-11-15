'use client';
import { PropsWithChildren } from 'react';
import { ReactLenis } from 'lenis/react';

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 0.75,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
