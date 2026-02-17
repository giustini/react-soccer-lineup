import React from 'react';

import type { PitchViewProps } from './Pitch.types.ts';
import TeamView from './team/Team';

import * as Pitch from './Pitch.styled.ts';

const PitchView: React.FC<PitchViewProps> = ({
  size = 'normal',
  color,
  pattern,
  orientation,
  homeTeam,
  awayTeam,
}) => {
  const vertical = orientation === 'vertical';

  return (
    <Pitch.Container size={size} vertical={vertical}>
      <Pitch.Content size={size} color={color} pattern={pattern} vertical={vertical}>
        <Pitch.Teams>
          {homeTeam && <TeamView team={homeTeam} />}
          {awayTeam && <TeamView away team={awayTeam} />}
        </Pitch.Teams>
      </Pitch.Content>
    </Pitch.Container>
  );
};

export default PitchView;
