import InViewWrapper from '../inview-wrapper';
import { getTranslations } from 'next-intl/server';

const Highlights = async () => {
  const t = await getTranslations('home.highlights');

  return (
    <section className='px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-8 sm:gap-y-12 max-w-8xl mx-auto mt-12 sm:mt-16 lg:mt-48'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={`col-span-full sm:col-span-5 ${
            index % 2 !== 0 ? 'sm:col-start-2' : 'col-start-1'
          } lg:col-start-auto lg:col-span-4 ${
            index === 1 ? 'lg:-translate-y-28' : ''
          }`}
        >
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{
              opacity: 1,
              filter: 'blur(0px)',
              transform: 'translateY(0)',
            }}
          >
            <h3 className='text-3xl sm:text-6xl lg:text-5xl font-semibold uppercase'>
              {t(`${index}.title.ptOne`)}
              <br />
              <span className='italic'>{t(`${index}.title.ptTwo`)}</span>
            </h3>
            <p className='mt-4 sm:mt-8 text-base sm:text-xl'>
              {t(`${index}.description`)}
            </p>
          </InViewWrapper>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
