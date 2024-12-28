'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gallery1 from '@/../public/gallery/thunder-top-team-gallery-1.png';
import gallery2 from '@/../public/gallery/thunder-top-team-gallery-2.png';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const image1 = imageRef1.current;
    const image2 = imageRef2.current;

    if (image1 && image2) {
      const trigger = ScrollTrigger.create({
        trigger: image1,
        start: 'top 70%',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(image1, {
            opacity: 1,
            x: 0,
            duration: 0.6,
          });
          gsap.to(image2, {
            opacity: 1,
            x: 0,
            duration: 0.6,
          });
        },
      });

      return () => trigger.kill();
    }
  }, []);

  return (
    <section className='grid lg:grid-cols-2 mt-12 sm:mt-16 lg:mt-20 2xl:mt-24 overflow-hidden'>
      <div
        ref={imageRef1}
        className='relative aspect-[1300/1154] lg:col-span-1 w-full h-full opacity-0 -translate-x-1/3'
      >
        <Image
          src={gallery1}
          alt='Thunder Top Team'
          fill
          className='object-cover'
          sizes='(max-width: 1024px) 50vw, 100vw'
        />
      </div>
      <div
        ref={imageRef2}
        className='relative aspect-[1300/1154] lg:col-span-1 w-full h-full opacity-0 translate-x-1/3'
      >
        <Image
          src={gallery2}
          alt='Thunder Top Team'
          fill
          className='object-cover'
          sizes='(max-width: 1024px) 50vw, 100vw'
        />
      </div>
    </section>
  );
};

export default Gallery;
