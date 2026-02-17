import { styled } from '@linaria/react';

import pitch from '../../assets/img/pitch.png';
import lines from '../../assets/img/lines.png';
import squares from '../../assets/img/squares.png';
import circles from '../../assets/img/circles.png';

import { DEFAULT_PITCH_COLOR } from '../../constants';

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

const getContainerHeight = (vertical: boolean, size: PitchSize) => {
  const heights = {
    small: vertical ? '600px' : '350px',
    normal: vertical ? '900px' : '525px',
    big: vertical ? '1200px' : '700px',
    responsive: 'unset',
    fill: '100%',
  };

  return heights[size];
};

const getContainerWidth = (vertical: boolean, size: PitchSize) => {
  const widths = {
    small: vertical ? '350px' : '600px',
    normal: vertical ? '525px' : '900px',
    big: vertical ? '700px' : '1200px',
    responsive: '100%',
    fill: '100%',
  };

  return widths[size];
};

const getContentHeight = (vertical: boolean, size: PitchSize) => {
  if (!vertical) {
    return '100%';
  }

  const heights = {
    small: '350px',
    normal: '525px',
    big: '700px',
    responsive: 'calc(100% * 7 / 12)',
    fill: '100cqw',
  };

  return heights[size];
};

const getContentWidth = (vertical: boolean, size: PitchSize) => {
  if (!vertical) {
    return '100%';
  }

  const widths = {
    small: '600px',
    normal: '900px',
    big: '1200px',
    responsive: 'calc(100% * 12 / 7)',
    fill: '100cqh',
  };

  return widths[size];
};

const Container = styled.div<{ size: PitchSize; vertical?: boolean }>`
  position: relative;
  overflow: hidden;

  height: ${(props) => getContainerHeight(!!props.vertical, props.size)};
  width: ${(props) => getContainerWidth(!!props.vertical, props.size)};

  aspect-ratio: ${(props) => {
    if (props.size !== 'responsive') return 'unset';
    return props.vertical ? '7/12' : '12/7';
  }};
  container-type: ${(props) => (props.size === 'fill' ? 'size' : 'normal')};
`;

const Content = styled.div<{
  color?: string;
  pattern?: PitchPattern;
  size: PitchSize;
  vertical?: boolean;
}>`
  position: ${(props) => (props.vertical ? 'absolute' : 'relative')};

  background-color: ${(props) => props.color ?? DEFAULT_PITCH_COLOR};
  background-image: ${(props) => getPitchBackground(props.pattern)};
  background-size: contain;

  height: ${(props) => getContentHeight(!!props.vertical, props.size)};
  width: ${(props) => getContentWidth(!!props.vertical, props.size)};

  top: ${(props) => (props.vertical ? '50%' : 'unset')};
  left: ${(props) => (props.vertical ? '50%' : 'unset')};
  transform: ${(props) => (props.vertical ? 'translate(-50%, -50%) rotate(-90deg)' : 'none')};

  --rsl-counter-rotation: ${(props) => (props.vertical ? 'rotate(90deg)' : 'rotate(0deg)')};
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

export { Container, Content, Teams };
