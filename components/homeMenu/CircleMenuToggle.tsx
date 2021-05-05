import React from 'react';
import { CircleButton } from './CircleButton';
import Image from 'next/image'


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
      <div className='circle-menu-main'>
        <Image
          src="/images/logo.png"
          alt="The Chance Project Logo"
          width={250}
          height={125}
        />
      </div>
    </CircleButton>
  );
};

