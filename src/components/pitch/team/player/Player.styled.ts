import { styled } from '@linaria/react';

import type { PlayerOffset } from '../Team.types.ts';

const Container = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div<{
  color: string;
  colorBorder: string;
  offset?: PlayerOffset;
  clickable?: boolean;
}>`
  display: flex;
  justify-content: center;

  position: absolute;
  border-radius: 50%;
  padding-top: 4.5%;
  width: 4.5%;

  font-size: 16px;
  font-weight: 600;

  background-color: ${(props) => props.color};
  border: ${(props) => `2px solid ${props.colorBorder}`};

  --offset-x: ${(props) => (props.offset?.x ? props.offset.x + 'px' : 0)};
  --offset-y: ${(props) => (props.offset?.y ? props.offset.y + 'px' : 0)};

  transform: translateX(var(--offset-x)) translateY(var(--offset-y));

  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  }
`;

const Number = styled.div<{ color: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.color};
`;

const Name = styled.div<{ color: string }>`
  position: absolute;
  bottom: -25px;
  text-align: center;
  width: max-content;
  color: ${(props) => props.color};
`;

export { Container, Content, Number, Name };
