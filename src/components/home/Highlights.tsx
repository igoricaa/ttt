import { Highlight, highlights } from '@/data/data';

const Highlights = () => {
  return (
    <section className='px-side grid grid-cols-12 gap-x-4 max-w-8xl mx-auto mt-24'>
      {highlights.map((highlight: Highlight, index: number) => (
        <div
          key={index}
          className={`col-span-4 ${index === 1 ? 'translate-y-24' : ''} `}
        >
          <h3 className='text-5xl font-semibold uppercase'>
            {highlight.title.ptOne}
            <br />
            <span className='italic'>{highlight.title.ptTwo}</span>
          </h3>
          <p className='mt-8 text-lg'>{highlight.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
