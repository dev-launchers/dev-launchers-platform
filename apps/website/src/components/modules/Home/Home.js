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
    <main className=" relative min-h-screen mx-auto items-center bg-black text-white flex flex-col justify-center gap-8 ">
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
