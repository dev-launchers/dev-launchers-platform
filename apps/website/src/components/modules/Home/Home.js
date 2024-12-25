import {
  Hero,
  Opportunities,
  JoinUs,
  TechStack,
  Community,
  Features,
  Donate,
} from './Sections';

const Home = () => {
  return (
    <div className="relative min-h-screen text-white bg-black pt-16">
      <Hero />
      <Opportunities />
      <JoinUs />
      <TechStack />
      <Community />
      <Features />
      <Donate />
    </div>
  );
};

export default Home;
