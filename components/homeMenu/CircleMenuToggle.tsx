import React from 'react';
import { CircleButton } from './CircleButton';

interface Props {
  size: number,
  toggleMenu: () => void
}

export const CircleMenuToggle: React.FC<Props> = ({ size = 3, ...props }) => {
  return (
    <CircleButton
      onClick={props.toggleMenu}
      size={size}
      className='circle-menu-toggle'
    >
      <div className='circle-menu-burger'>
        <span >Click To Start</span>
        {/* <span className='circle-menu-burger-bar'></span>
        <span className='circle-menu-burger-bar'></span>
        <span className='circle-menu-burger-bar'></span> */}
      </div>
    </CircleButton>
  );
};