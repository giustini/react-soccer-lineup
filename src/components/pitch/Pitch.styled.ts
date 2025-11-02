import { styled } from '@linaria/react';

import pitch from '../../assets/img/pitch.png';
import lines from '../../assets/img/lines.png';
import squares from '../../assets/img/squares.png';
import circles from '../../assets/img/circles.png';

import type { PitchPattern, PitchSize } from './Pitch.types';

const getPitchBackground = (pattern?: PitchPattern): string => {
  const images = [`url(${pitch})`];

  if (pattern) {
    images.push(`url(${getPatternImage(pattern)})`);
  }

  return images.join(', ');
};

const getPatternImage = (pattern: PitchPattern) => {
  return { lines, squares, circles }[pattern];
};

const getPitchHeight = (size: PitchSize) => {
  const heights = {
    small: '350px',
    normal: '525px',
    big: '700px',
    responsive: 'unset',
    fill: '100%',
  };
  return heights[size];
};

const getPitchWidth = (size: PitchSize) => {
  const widths = {
    small: '600px',
    normal: '900px',
    big: '1200px',
    responsive: '100%',
    fill: '100%',
  };
  return widths[size];
};

const Container = styled.div<{
  color?: string;
  pattern?: PitchPattern;
  size: PitchSize;
}>`
  position: relative;
  background-repeat: round;

  background-color: ${(props) => props.color ?? '#588f58'};
  background-image: ${(props) => getPitchBackground(props.pattern)};

  height: ${(props) => getPitchHeight(props.size)};
  width: ${(props) => getPitchWidth(props.size)};

  aspect-ratio: ${(props) => (props.size === 'responsive' ? '12/7' : 'unset')};
`;

const Teams = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  box-sizing: border-box;

  padding: 20px;

  * > * {
    box-sizing: content-box;
  }
`;

export { Container, Teams };
