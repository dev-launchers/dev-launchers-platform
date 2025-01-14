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
      'I joined Dev launchers as a volunteer and it helped me to polish my skills and the experience of working as a team. I was able to showcase my volunteer works in interviews which helped me to land on a new position with a company in a short span of time. Dev launchers provides people from diverse backgrounds the skills and resources necessary to succeed in their careers. I am happy that I made a wise choice by considering volunteer at Dev launchers. You will be surprised at just how much you can gain from taking the plunge.',
    author: 'Hredhya M.',
    role: 'Previous Lead',
  },
  {
    content:
      "Dev Launchers is a great organization to volunteer with, and I would recommend it to anyone looking for an opportunity to learn new things, grow your skills and experience in Tech and work with great people all around the world. I've been volunteering for 9 months now and it has been a great experience. Members are very collaborative, kind and polite. Whoever wants to learn new stuff, join teams full of great people and work on open source projects that has real impact this is the place for that! One of the best decisions I've ever made.",
    author: 'Julie M.',
    role: 'Previous Lead',
  },
  {
    content:
      'Dev Launchers is an excellent organization, which helps the development of both participants and volunteers alike. The management is flexible, competent, open to ideas, and has plenty of knowledge to share. The culture is fantastic, and each meeting is productive and fun.',
    author: 'Mohammedi A.',
    role: 'Previous Member',
  },
  {
    content:
      'Dev Launchers is an excellent organization, which helps the development of both participants and volunteers alike. The management is flexible, competent, open to ideas, and has plenty of knowledge to share. The culture is fantastic, and each meeting is productive and fun.',
    author: 'James D.',
    role: 'Previous Member',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative w-full max-w-7xl pt-2 mx-auto rounded-lg">
      {/* Fade effect containers */}
      <div className="hidden sm:block absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black to-transparent z-10" />
      <div className="hidden sm:block absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black to-transparent z-10" />

      {/* Main carousel container */}
      <div className="bg-black px-8 pt-12 relative select-none">
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
                      ? 'bg-teal-900 border-teal-500'
                      : 'bg-orange-900 border-orange-500'
                  } rounded-3xl p-12 h-full border-4 flex align-center items-center justify-center`}
                >
                  <div className="flex flex-col items-center justify-center align-center  space-y-8">
                    <p className="align-center  text-sky-400/75 text-base text-center flex-grow font-normal leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center text-white">
                        {testimonial.author[0]}
                      </div>
                      <div className="flex flex-col items-start">
                        <h4 className="text-white text-lg font-medium my-0">
                          {testimonial.author}
                        </h4>
                        <p className="text-sky-400/75 text-sm">
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
            <CarouselPrevious className="relative flex items-center justify-center left-0 ring-2 ring-white text-white hover:bg-gray-800" />
            <CarouselNext className="relative flex items-center justify-center right-0 ring-2 ring-white text-white hover:bg-gray-800" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
