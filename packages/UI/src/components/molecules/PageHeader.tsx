import type { ReactElement } from 'react';

interface props {
  title: string;
  subtitle?: string;
  element?: ReactElement;
}

export default function PageHeader(props: props) {
  return (
    <header
      className="w-full gap-12 px-48 py-24 text-white"
      style={{
        background:
          'linear-gradient(92.24deg, rgba(129, 195, 215, 0.2) 7%, rgba(143, 97, 189, 0.2) 51.5%, rgba(58, 124, 165, 0.2) 75.77%, rgba(57, 76, 172, 0.2) 96.6%), #000000',
      }}
    >
      <h1 className="mb-4 mt-0 text-7xl">{props.title}</h1>
      {!!props.subtitle && <p className="mb-2 text-xl">{props.subtitle}</p>}
      {!!props.element && props.element}
    </header>
  );
}
