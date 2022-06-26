import React from 'react';
import { SideBar } from './styled';

export default function BarSide() {
  return (
    <SideBar>
      <p className="challenge">Devchallenges.io</p>
      <p className="typo">Typography</p>
      <p className="grid">Grid</p>
      <p className="btn">Buttons</p>
      <p className="input">Inputs</p>
    </SideBar>
  );
}
