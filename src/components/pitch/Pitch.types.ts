import type { Team } from './team/Team.types.ts';

export interface PitchViewProps {
  color?: string;
  size?: PitchSize;
  pattern?: PitchPattern;

  homeTeam?: Team;
  awayTeam?: Team;
}

export type PitchSize = 'small' | 'normal' | 'big' | 'responsive' | 'fill';
export type PitchPattern = 'lines' | 'squares' | 'circles';
