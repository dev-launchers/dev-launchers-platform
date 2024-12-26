import Head from 'next/head';

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources</title>
      </Head>
      <div className="min-h-screen bg-black text-white">
        <section className="py-16 px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Resources by Category
          </h1>
          <p className="text-gray-400">Resources to fuel your journey.</p>
        </section>

        <section className="py-16 px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Templates and Tools
          </h2>
          <p className="text-gray-400">
            At Dev Launchers we empower individuals to excel in their tech
            careers at every stage of their journey.
          </p>
        </section>

        <section className="py-16 px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning and Games
          </h2>
          <p className="text-gray-400">
            At Dev Launchers we empower individuals to excel in their tech
            careers at every stage of their journey.
          </p>
        </section>
      </div>
    </>
  );
}
