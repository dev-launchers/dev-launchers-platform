import React from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, LightbulbOff, Plus, Search } from 'lucide-react';

const CONTENT = {
  deleted: {
    eyebrow: '410 • Idea Deleted',
    title: 'This Idea Has Gone Dark',
    message: (
      <>
        The idea you were trying to workshop has been{' '}
        <strong className="text-white">deleted</strong> and is no longer
        <br className="hidden md:block" /> available. Its comments and details
        are gone too, but the galaxy is full of
        <br className="hidden md:block" /> live ideas that could use your input.
      </>
    ),
  },
  notFound: {
    eyebrow: '404 • Idea Not Found',
    title: 'We Couldn’t Find That Idea',
    message: (
      <>
        This link points to an idea that{' '}
        <strong className="text-white whitespace-nowrap">doesn’t exist</strong>{' '}
        or <strong className="text-white whitespace-nowrap">was removed</strong>
        . It may be
        <br className="hidden md:block" /> an old bookmark or a mistyped
        address. Head back to browse and pick
        <br className="hidden md:block" /> up a fresh one.
      </>
    ),
  },
};

export default function IdeaUnavailable({ variant }) {
  const router = useRouter();
  const { eyebrow, title, message } = CONTENT[variant] ?? CONTENT.notFound;

  return (
    <div
      className="w-full flex flex-col items-center text-center px-4 pt-16 pb-24 min-h-[calc(100vh-80px)]"
      style={{
        // brand-alt-nebula-500 (#7339AC) at 35%, from the design. The glow is
        // translucent, so it needs the solid black layer underneath; without
        // it the page background behind shows through and turns it pale.
        background:
          'radial-gradient(ellipse 55% 50% at 50% 20%, rgba(115, 57, 172, 0.35), rgba(0, 0, 0, 0) 100%), #000',
      }}
    >
      <div
        className="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#6b46a0] bg-[#2a1550] text-[#c4a8e8]"
        style={{ boxShadow: '0 0 36px 6px rgba(70, 25, 130, 0.45)' }}
      >
        <LightbulbOff size={26} />
      </div>

      <div className="mt-8 text-sm uppercase tracking-wide text-[#8a6bb0] font-['Oswald']">
        {eyebrow}
      </div>

      {/* mb-0 p-0 border-0 override the app-wide h1 margin/padding/border */}
      <h1 className="mt-4 mb-0 p-0 border-0 text-5xl sm:text-7xl font-medium leading-tight text-white font-['Oswald']">
        {title}
      </h1>

      <p className="mt-4 max-w-[640px] text-base leading-[1.4] text-[#dad8d9] font-['Nunito Sans']">
        {message}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#c9a8ec] bg-[#a57bd0] px-5 py-2 text-sm font-medium text-[#1a0b30] hover:bg-[#b48ddb] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => router.push('/ideaspace/browse')}
        >
          <Search size={16} />
          Browse Ideas
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#dad8d9] bg-black px-5 py-2 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => router.push('/ideaspace/submit')}
        >
          <Plus size={16} />
          Post an Idea
        </button>
      </div>

      <button
        type="button"
        className="mt-6 flex items-center gap-1 text-sm text-[#a58bd0] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        onClick={() => router.push('/')}
      >
        Go to Homepage
        <ArrowRight size={14} />
      </button>
    </div>
  );
}
