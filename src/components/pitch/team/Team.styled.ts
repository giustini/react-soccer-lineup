import { styled } from '@linaria/react';

const Container = styled.div<{ away?: boolean; lineCount: number }>`
  height: 100%;
  width: 80%;
  display: inline;

  margin-left: ${(props) => (props.away ? 'auto' : 'unset')};

  container-type: size;

  --rsl-lines: ${(props) => props.lineCount};
`;

const Squad = styled.div<{ away?: boolean }>`
  height: 100%;
  width: 100%;
  float: right;
  display: flex;

  flex-direction: ${(props) => (props.away ? 'row-reverse' : 'row')};
`;

// Player columns share the squad width (100cqw) by flex basis: goalkeeper 140% + each line 100%.
// The name cap matches each column width so long names truncate instead of overlapping neighbours.
const Goalkeeper = styled.div`
  height: 100%;
  width: 140%;
  display: flex;
  justify-content: center;
  align-items: center;

  --rsl-name-max-width: calc(140cqw / (1.4 + var(--rsl-lines)));
`;

const Line = styled.div<{ away?: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.away ? 'column' : 'column-reverse')};
  justify-content: space-evenly;
  align-items: center;

  --rsl-name-max-width: calc(100cqw / (1.4 + var(--rsl-lines)));
`;

export { Container, Squad, Goalkeeper, Line };
