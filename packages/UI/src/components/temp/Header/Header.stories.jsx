import Header from './Header';

export default {
  title: 'Common Components/Header',
  component: Header,
};

export const SignedIn = () => <Header userData={{ id: 1 }} />;

export const NotSignedIn = () => <Header userData={{ id: 0 }} />;
