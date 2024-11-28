export const JoinUsSlider = () => {
  return (
    <section className='bg-[#D8D8D8] w-full overflow-hidden'>
      <div className='flex justify-center items-center gap-x-4 sm:gap-x-6 h-12 sm:h-16 w-fit animate-slide'>
        {Array.from({ length: 40 }).map((_, index) => (
          <p
            key={index}
            className='font-semibold text-[#080808] sm:text-2xl uppercase text-nowrap'
          >
            Join Now
          </p>
        ))}
      </div>
    </section>
  );
};
