import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@devlaunchers/components/components/Carousel/Carousel';

const testimonials = [
  {
    content:
      "Dev Launchers is a great organization to volunteer with, and I would recommend it to anyone looking for an opportunity to learn new things, grow your skills and experience in Tech and work with great people all around the world. I've been volunteering for 9 months now and it has been a great experience. Members are very collaborative, kind and polite. Whoever wants to learn new stuff, join teams full of great people and work on open source projects that has real impact this is the place for that! One of the best decisions I've ever made.",
    author: 'John D.',
    role: 'Team Member',
  },
  {
    content:
      "Dev Launchers is a great organization to volunteer with, and I would recommend it to anyone looking for an opportunity to learn new things, grow your skills and experience in Tech and work with great people all around the world. I've been volunteering for 9 months now and it has been a great experience. Members are very collaborative, kind and polite. Whoever wants to learn new stuff, join teams full of great people and work on open source projects that has real impact this is the place for that! One of the best decisions I've ever made.",
    author: 'Julie M.',
    role: 'Previous Lead',
  },
  {
    content:
      "Dev Launchers is a great organization to volunteer with, and I would recommend it to anyone looking for an opportunity to learn new things, grow your skills and experience in Tech and work with great people all around the world. I've been volunteering for 9 months now and it has been a great experience. Members are very collaborative, kind and polite. Whoever wants to learn new stuff, join teams full of great people and work on open source projects that has real impact this is the place for that! One of the best decisions I've ever made.",
    author: 'Sarah K.',
    role: 'Project Lead',
  },
  {
    content:
      "Dev Launchers is a great organization to volunteer with, and I would recommend it to anyone looking for an opportunity to learn new things, grow your skills and experience in Tech and work with great people all around the world. I've been volunteering for 9 months now and it has been a great experience. Members are very collaborative, kind and polite. Whoever wants to learn new stuff, join teams full of great people and work on open source projects that has real impact this is the place for that! One of the best decisions I've ever made.",
    author: 'Sarah K.',
    role: 'Project Lead',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Fade effect containers */}
      <div className="hidden sm:block absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black to-transparent z-10" />
      <div className="hidden sm:block absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black to-transparent z-10" />

      {/* Main carousel container */}
      <div className="bg-black px-8 pt-12 pb-24 relative select-none">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2"
              >
                <div
                  className={`${
                    index % 2 === 1
                      ? 'bg-[#36525A50] border-[#9ACFDF]'
                      : 'bg-[#FF573350] border-[#FFA500]'
                  } rounded-3xl p-12 h-full border-4`}
                >
                  <div className="flex flex-col h-full">
                    <p
                      className={`${
                        index % 2 === 1 ? 'text-[#9ACFDF]' : 'text-[#FFA500]'
                      } mb-8 text-sm flex-grow leading-relaxed`}
                    >
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
                        {testimonial.author[0]}
                      </div>
                      <div className="gap-2">
                        <h4 className="text-white font-medium my-0">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-12 flex gap-2 z-50 items-center justify-center">
            <CarouselPrevious className="relative flex items-center justify-center left-0 text-white border-white hover:bg-gray-800" />
            <CarouselNext className="relative flex items-center justify-center right-0 text-white border-white hover:bg-gray-800" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
