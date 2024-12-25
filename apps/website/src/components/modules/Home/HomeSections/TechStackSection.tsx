const TechStackSection = () => (
  <section className="text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          We build with the best
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          We collaborate and build using cutting-edge web development tools.
          From fancy utilities to launch our websites to the industry's best
          frameworks and cutting-edge platforms, we keep things simple and
          flexible.
        </p>
      </div>
      <div className="grid max-w-xl mx-auto grid-cols-2 md:grid-cols-3 gap-4">
        {['Tailwind', 'React', 'Github', 'TypeScript', 'Figma', 'Shadcn'].map(
          (tech) => (
            <div
              key={tech}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
            >
              <img
                src={`/${tech.toLowerCase().replace(/\s/g, '')}.svg`}
                alt={tech}
              />
              <span className="text-sm font-medium">{tech}</span>
            </div>
          )
        )}
      </div>
    </div>
  </section>
);

export default TechStackSection;
