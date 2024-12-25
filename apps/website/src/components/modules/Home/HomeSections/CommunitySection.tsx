import TestimonialCarousel from './Carousel';

const stats = [
  {
    number: '200+',
    description: "Alumni and members who've been part of our journey",
  },
  { number: '8+', description: 'Countries represented in our community' },
  { number: '5', description: 'Continents united through technology' },
];

const CommunitySection = () => (
  <section className="relative container mx-auto py-16 bg-cover bg-top bg-no-repeat">
    <h2 className="text-5xl font-bold text-center mb-8">Our Community</h2>
    <p className="text-base text-gray-500 text-center max-w-3xl mx-auto">
      From career-launching success stories to global collaborations, our
      tight-knit community drives innovation in tech. Our alumni work at
      industry leaders like Amazon, Microsoft, Meta, and J.P. Morgan, while our
      active members collaborate across five continents to build impactful
      solutions.
    </p>
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 relative rounded-xl p-[2px] bg-gradient-to-r from-blue-300 to-purple-300"
        >
          <div className="h-full w-full bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4">
              {stat.number}
            </span>
            <p className="text-gray-500 text-base">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
    <TestimonialCarousel />
  </section>
);

export default CommunitySection;
