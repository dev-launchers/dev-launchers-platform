import { Donate } from '../../../website/src/components/modules/Home/Sections';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="min-h-screen bg-black text-white">
        <section className="relative py-24 px-4 md:px-8">
          <div className="min-h-screen bg-black text-white">
            <section className="py-16 px-4 md:px-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Our Mission
              </h1>
              <p className="text-gray-400">
                At Dev Launchers we empower individuals to excel in their tech
                careers at every stage of their journey.
              </p>
            </section>

            <section className="py-16 px-4 md:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-400">
                At Dev Launchers we empower individuals to excel in their tech
                careers at every stage of their journey.
              </p>
            </section>

            <section className="py-16 px-4 md:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-gray-400">
                At Dev Launchers we empower individuals to excel in their tech
                careers at every stage of their journey.
              </p>
            </section>

            <section className="py-16 px-4 md:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Partners
              </h2>
              <p className="text-gray-400">
                At Dev Launchers we empower individuals to excel in their tech
                careers at every stage of their journey.
              </p>
            </section>

            <section className="py-16 px-4 md:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Teams</h2>
              <p className="text-gray-400">
                At Dev Launchers we empower individuals to excel in their tech
                careers at every stage of their journey.
              </p>
            </section>

            <section className="relative py-24 px-4 md:px-8">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
              from-purple-600/20 via-purple-900/10 to-transparent transform scale-y-150"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>

              <Donate />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
