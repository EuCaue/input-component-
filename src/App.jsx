import React from 'react';

import Header from './components/Header';
import BarSide from './components/SideBar';
import Input from './pages/Input';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <Header />
      <BarSide />
      <Input />
      <GlobalStyles />
    </>
  );
}
