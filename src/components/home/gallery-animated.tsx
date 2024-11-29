'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GalleryAnimated = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((el) => {
      if (el) {
        const bgImage = el.style.backgroundImage.match(
          /(?:\(['"]?)(.*?)(?:['"]?\))/
        )?.[1];
        if (bgImage) {
          gsap.set(el, { backgroundImage: 'none' });

          const totalInnerElems = parseInt(
            el.dataset.repetitionElems || '4',
            10
          );
          let innerHTML = '';
          for (let i = 0; i < totalInnerElems; i++) {
            innerHTML += `<div class="image__element" style="background-image:url(${bgImage})"></div>`;
          }
          el.innerHTML = innerHTML;

          const innerElems = el.querySelectorAll('.image__element');
          gsap.set([el, innerElems[0]], {
            transformOrigin: el.dataset.repetitionOrigin || '50% 50%',
          });

          const property = el.dataset.repetitionAnimate || 'scale';
          const animationProperties = {
            duration: parseFloat(el.dataset.repetitionDuration || '0.8'),
            ease: el.dataset.repetitionEase || 'power2.inOut',
            stagger: parseFloat(el.dataset.repetitionStagger || '-0.1'),
            [property]: (i: number) => (i === 0 ? 1 : 0),
          };
          const firstInnerElementProperties = {
            [property]: parseFloat(el.dataset.repetitionInitialScale || '2'),
          };

          const hoverTimeline = gsap
            .timeline({ paused: true })
            .set(innerElems[0], firstInnerElementProperties)
            .to(innerElems, animationProperties, 0);

          el.addEventListener('mouseenter', () => hoverTimeline.play());
          el.addEventListener('mouseleave', () => hoverTimeline.reverse());
        }
      }
    });
  }, []);

  return (
    <section>
      <div className='flex justify-center space-x-4 pt-20 sm:pt-36 lg:pt-56'>
        <div
          ref={(el) => {
            if (el) {
              imageRefs.current[0] = el;
            }
          }}
          className='image image--style-1 cursor-pointer'
          data-repetition
          data-repetition-elems='3'
          data-repetition-stagger='-0.12'
          data-repetition-initial-scale='1.5'
          style={{ backgroundImage: 'url(gallery/gallery-1.png)' }}
        ></div>
        <div
          ref={(el) => {
            if (el) {
              imageRefs.current[1] = el;
            }
          }}
          className='image image--style-1 cursor-pointer'
          data-repetition
          data-repetition-elems='4'
          style={{ backgroundImage: 'url(gallery/gallery-1.png)' }}
        ></div>
        <div
          ref={(el) => {
            if (el) {
              imageRefs.current[2] = el;
            }
          }}
          className='image image--style-1 cursor-pointer'
          data-repetition
          data-repetition-elems='5'
          data-repetition-stagger='-0.15'
          data-repetition-initial-scale='1.05'
          data-repetition-duration='0.5'
          data-repetition-ease='power1.inOut'
          style={{ backgroundImage: 'url(gallery/gallery-1.png)' }}
        ></div>
      </div>
    </section>
  );
};

export default GalleryAnimated;
