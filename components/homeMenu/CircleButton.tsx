import React, { CSSProperties, MouseEvent } from 'react';
// import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip/Tooltip';

export interface CircleButtonProps {
  size?: number,
  link?: string,
  target?: string,
  className?: string,
  style?: CSSProperties,
  onClick?: (e: MouseEvent<HTMLElement>) => void
};

export const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const ButtonTag = props.link ? 'a' : 'div';

  return (
    <ButtonTag href={props.link}
      target={props.target}
      onClick={props.onClick}
      className={'circle-button' + (props.className ? ' ' + props.className : '')}
      style={{
        width: props.size + 'em',
        height: props.size + 'em',
        ...props.style,
      }}>
      {props.children}
    </ButtonTag>
  );
};
