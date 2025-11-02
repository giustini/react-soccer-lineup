import React from 'react';

import type { PitchViewProps } from './Pitch.types.ts';
import TeamView from './team/Team';

import * as Pitch from './Pitch.styled.ts';

const PitchView: React.FC<PitchViewProps> = ({ size, color, pattern, homeTeam, awayTeam }) => {
  return (
    <Pitch.Container size={size || 'normal'} color={color} pattern={pattern}>
      <Pitch.Teams>
        {homeTeam && <TeamView team={homeTeam} />}
        {awayTeam && <TeamView away team={awayTeam} />}
      </Pitch.Teams>
    </Pitch.Container>
  );
};

export default PitchView;
