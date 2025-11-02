import { styled } from '@linaria/react';

const Container = styled.div<{ away?: boolean }>`
  height: 100%;
  width: 80%;
  display: inline;

  margin-left: ${(props) => (props.away ? 'auto' : 'unset')};
`;

const Squad = styled.div<{ away?: boolean }>`
  height: 100%;
  width: 100%;
  float: right;
  display: flex;

  flex-direction: ${(props) => (props.away ? 'row-reverse' : 'row')};
`;

const Goalkeeper = styled.div`
  height: 100%;
  width: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div<{ away?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.away ? 'column' : 'column-reverse')};
  justify-content: space-evenly;
  align-items: center;
`;

export { Container, Squad, Goalkeeper, Line };
