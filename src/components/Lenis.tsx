'use client';
import { PropsWithChildren } from 'react';
import { ReactLenis } from 'lenis/react';

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.5,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
