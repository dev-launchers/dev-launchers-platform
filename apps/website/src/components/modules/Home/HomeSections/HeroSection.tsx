import kraftiesImage from '../../../../images/home-page/krafties.png?webp';
import googleImage from '../../../../images/home-page/google.png?webp';
import microsoftImage from '../../../../images/home-page/microsoft.png?webp';

const HeroSection = () => (
  <div
    className="relative text-white bg-black"
    style={{
      background: `linear-gradient(to top, 
          rgba(0, 0, 0, 0.3) 0%, 
          rgba(82, 40, 122, 0.3) 30%, 
          rgba(153, 111, 195, 0.3) 40%, 
          rgba(82, 40, 122, 0.3) 50%, 
          rgba(0, 0, 0, 0.3) 70%)`,
      backgroundSize: '100% 100%',
      backgroundPosition: 'center 10%',
    }}
  >
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
      <div className="text-center">
        <h1 className="mx-auto text-5xl md:text-6xl mb-4 font-bold border-0">
          Collaborate, Build, and Thrive in Tech
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-10">
          Join our global community of 200+ developers, where innovation and
          collaboration come together. Connect, learn, and grow with the best in
          tech.
        </p>
        <button className="bg-[#52287A] border-2 text-base border-[#996FC3] text-white py-3 px-6 rounded-lg transition-colors duration-200">
          Explore Opportunities
        </button>
      </div>
      <div className="mt-16">
        <p className="text-sm text-gray-400 text-center mb-6">
          PARTNERS AND SPONSORS
        </p>
        <div className="flex justify-between items-center max-w-xl mx-auto mix-blend-luminosity">
          <img
            src={kraftiesImage}
            alt="Krafties"
            className="h-12 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={googleImage}
            alt="Google"
            className="h-8 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={microsoftImage}
            alt="Microsoft"
            className="h-16 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
