import { styled } from '@linaria/react';

import type { PlayerOffset, PlayerPattern } from '../Team.types.ts';

const getPlayerBackground = (
  color: string,
  pattern: PlayerPattern,
  patternColor: string
): string => {
  const patternBackgrounds = {
    lines: `
      linear-gradient(
        0deg,
        transparent 0 5%,
        ${patternColor} 5% 22%,
        transparent 22% 40%,
        ${patternColor} 40% 60%,
        transparent 60% 78%,
        ${patternColor} 78% 95%,
        transparent 95% 100%
      ), ${color}
    `,

    'thin-lines': `
      linear-gradient(
        0deg,
        transparent 0 calc(100% / 15),
        ${patternColor} calc(100% / 15) calc((100% / 15) * 2),
        transparent calc((100% / 15) * 2) calc((100% / 15) * 3),
        ${patternColor} calc((100% / 15) * 3) calc((100% / 15) * 4),
        transparent calc((100% / 15) * 4) calc((100% / 15) * 5),
        ${patternColor} calc((100% / 15) * 5) calc((100% / 15) * 6),
        transparent calc((100% / 15) * 6) calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 9),
        ${patternColor} calc((100% / 15) * 9) calc((100% / 15) * 10),
        transparent calc((100% / 15) * 10) calc((100% / 15) * 11),
        ${patternColor} calc((100% / 15) * 11) calc((100% / 15) * 12),
        transparent calc((100% / 15) * 12) calc((100% / 15) * 13),
        ${patternColor} calc((100% / 15) * 13) calc((100% / 15) * 14),
        transparent calc((100% / 15) * 14) calc((100% / 15) * 15)
      ), ${color}
    `,

    'thick-lines': `
      linear-gradient(
        0deg,
        transparent 0 5%,
        ${patternColor} 5% 29%,
        transparent 29% 36%,
        ${patternColor} 36% 64%,
        transparent 64% 71%,
        ${patternColor} 71% 95%,
        transparent 95% 100%
      ), ${color}
    `,

    stripes: `
      linear-gradient(
        90deg,
        transparent 0 5%,
        ${patternColor} 5% 22%,
        transparent 22% 40%,
        ${patternColor} 40% 60%,
        transparent 60% 78%,
        ${patternColor} 78% 95%,
        transparent 95% 100%
      ), ${color}
    `,

    'thin-stripes': `
      linear-gradient(
        90deg,
        transparent 0 calc(100% / 15),
        ${patternColor} calc(100% / 15) calc((100% / 15) * 2),
        transparent calc((100% / 15) * 2) calc((100% / 15) * 3),
        ${patternColor} calc((100% / 15) * 3) calc((100% / 15) * 4),
        transparent calc((100% / 15) * 4) calc((100% / 15) * 5),
        ${patternColor} calc((100% / 15) * 5) calc((100% / 15) * 6),
        transparent calc((100% / 15) * 6) calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 9),
        ${patternColor} calc((100% / 15) * 9) calc((100% / 15) * 10),
        transparent calc((100% / 15) * 10) calc((100% / 15) * 11),
        ${patternColor} calc((100% / 15) * 11) calc((100% / 15) * 12),
        transparent calc((100% / 15) * 12) calc((100% / 15) * 13),
        ${patternColor} calc((100% / 15) * 13) calc((100% / 15) * 14),
        transparent calc((100% / 15) * 14) calc((100% / 15) * 15)
      ), ${color}
    `,

    'thick-stripes': `
      linear-gradient(
        90deg,
        transparent 0 5%,
        ${patternColor} 5% 29%,
        transparent 29% 36%,
        ${patternColor} 36% 64%,
        transparent 64% 71%,
        ${patternColor} 71% 95%,
        transparent 95% 100%
      ), ${color}
    `,

    line: `
      linear-gradient(
        0deg,
        transparent 0 40%,
        ${patternColor} 40% 60%,
        transparent 60% 100%
      ), ${color}
    `,

    'thin-line': `
      linear-gradient(
        0deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    'thick-line': `
      linear-gradient(
        0deg,
        transparent 0 36%,
        ${patternColor} 36% 64%,
        transparent 64% 100%
      ), ${color}
    `,

    stripe: `
      linear-gradient(
        90deg,
        transparent 0 40%,
        ${patternColor} 40% 60%,
        transparent 60% 100%
      ), ${color}
    `,

    'thin-stripe': `
      linear-gradient(
        90deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    'thick-stripe': `
      linear-gradient(
        90deg,
        transparent 0 36%,
        ${patternColor} 36% 64%,
        transparent 64% 100%
      ), ${color}
    `,

    bar: `
      linear-gradient(
        90deg,
        transparent 0 32%,
        ${patternColor} 32% 68%,
        transparent 68% 100%
      ), ${color}
    `,

    'thin-bar': `
      linear-gradient(
        90deg,
        transparent 0 38%,
        ${patternColor} 38% 62%,
        transparent 62% 100%
      ), ${color}
    `,

    'thick-bar': `
      linear-gradient(
        90deg,
        transparent 0 25%,
        ${patternColor} 25% 75%,
        transparent 75% 100%
      ), ${color}
    `,

    bars: `
      linear-gradient(
        90deg,
        transparent 0 10%,
        ${patternColor} 10% 30%,
        transparent 30% 70%,
        ${patternColor} 70% 90%,
        transparent 90% 100%
      ), ${color}
    `,

    'thin-bars': `
      linear-gradient(
        90deg,
        transparent 0 12%,
        ${patternColor} 12% 20%,
        transparent 20% 80%,
        ${patternColor} 80% 88%,
        transparent 88% 100%
      ), ${color}
    `,

    'thick-bars': `
      linear-gradient(
        90deg,
        transparent 0 12%,
        ${patternColor} 12% 40%,
        transparent 40% 60%,
        ${patternColor} 60% 88%,
        transparent 88% 100%
      ), ${color}
    `,

    'left-half': `
      linear-gradient(
        90deg,
        ${patternColor} 0% 50%,
        transparent 50% 100%
      ), ${color}
    `,

    'right-half': `
      linear-gradient(
        90deg,
        transparent 0 50%,
        ${patternColor} 50% 100%
      ), ${color}
    `,

    'top-half': `
      linear-gradient(
        0deg,
        transparent 0 50%,
        ${patternColor} 50% 100%
      ), ${color}
    `,

    'bottom-half': `
      linear-gradient(
        0deg,
        ${patternColor} 0% 50%,
        transparent 50% 100%
      ), ${color}
    `,

    'left-slash': `
      linear-gradient(
        45deg,
        transparent 0 42%,
        ${patternColor} 42% 58%,
        transparent 58% 100%
      ), ${color}
    `,

    'left-thin-slash': `
      linear-gradient(
        45deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    'left-thick-slash': `
      linear-gradient(
        45deg,
        transparent 0 38%,
        ${patternColor} 38% 62%,
        transparent 62% 100%
      ), ${color}
    `,

    'right-slash': `
      linear-gradient(
        135deg,
        transparent 0 42%,
        ${patternColor} 42% 58%,
        transparent 58% 100%
      ), ${color}
    `,

    'right-thin-slash': `
      linear-gradient(
        135deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    'right-thick-slash': `
      linear-gradient(
        135deg,
        transparent 0 38%,
        ${patternColor} 38% 62%,
        transparent 62% 100%
      ), ${color}
    `,

    cross: `
      linear-gradient(
        0deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ),
      linear-gradient(
        90deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    x: `
      linear-gradient(
        45deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ),
      linear-gradient(
        135deg,
        transparent 0 calc((100% / 15) * 7),
        ${patternColor} calc((100% / 15) * 7) calc((100% / 15) * 8),
        transparent calc((100% / 15) * 8) calc((100% / 15) * 15)
      ), ${color}
    `,

    squares: `
      conic-gradient(
        ${patternColor} 90deg,
        ${color} 90deg 180deg,
        ${patternColor} 180deg 270deg,
        ${color} 270deg)
      `,

    none: color,
  };

  return patternBackgrounds[pattern];
};

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
  pattern: PlayerPattern;
  patternColor: string;
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

  background: ${(props) => getPlayerBackground(props.color, props.pattern, props.patternColor)};
  background-size: ${(props) => (props.pattern === 'squares' ? '50% 50%' : 'auto')};
  background-position: ${(props) => (props.pattern === 'squares' ? '25% 25%' : 'auto')};
  border: ${(props) => `2px solid ${props.colorBorder}`};

  --offset-x: ${(props) => (props.offset?.x ? props.offset.x + 'cqw' : 0)};
  --offset-y: ${(props) => (props.offset?.y ? props.offset.y + 'cqh' : 0)};

  transform: translateX(var(--offset-x)) translateY(var(--offset-y))
    var(--rsl-counter-rotation, rotate(0deg));

  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  }
`;

const Number = styled.div<{ color: string; backgroundColor: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  line-height: 1;
  padding: 4% 8%;

  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  border-radius: 4px;
`;

const Name = styled.div<{ color: string; backgroundColor: string }>`
  position: absolute;
  bottom: -28px;

  text-align: center;
  width: max-content;
  padding: 0 6px;

  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  border-radius: 8px;
`;

export { Container, Content, Number, Name };
