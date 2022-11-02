import React from 'react';
import Header from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
};

export const SignedIn = () => <Header userData={{ id: 1 }} />;

export const NotSignedIn = () => <Header userData={{ id: 0 }} />;
