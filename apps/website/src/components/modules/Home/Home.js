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
    <main className=" relative min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 md:px-6 py-12">
      <Hero />
      <Opportunities />
      <JoinUs />
      <TechStack />
      <Community />
      <Features />
      <Donate />
    </main>
  );
};

export default Home;
