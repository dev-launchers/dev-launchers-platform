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
    <main className=" relative min-h-screen bg-black text-white flex flex-col ">
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
