import React from 'react';

import Header from './components/Header';
import BarSide from './components/SideBar';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <Header />
      <BarSide />
      <GlobalStyles />
    </>
  );
}
