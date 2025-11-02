import React from 'react';

import type { TeamViewProps } from './Team.types.ts';
import PlayerView from './player/Player.tsx';

import * as Team from './Team.styled.ts';

const TeamView: React.FC<TeamViewProps> = ({ team, away }) => {
  const {
    squad: { gk, df, cdm, cm, cam, fw },
    style,
  } = team;

  return (
    <Team.Container away={away}>
      <Team.Squad away={away}>
        <Team.Goalkeeper>
          {gk && <PlayerView player={gk} away={away} teamStyle={style} />}
        </Team.Goalkeeper>

        {df && (
          <Team.Line away={away}>
            {df.map((df, i) => (
              <PlayerView player={df} away={away} teamStyle={style} key={i} />
            ))}
          </Team.Line>
        )}

        {cdm && (
          <Team.Line away={away}>
            {cdm.map((cdm, i) => (
              <PlayerView player={cdm} away={away} teamStyle={style} key={i} />
            ))}
          </Team.Line>
        )}

        {cm && (
          <Team.Line away={away}>
            {cm.map((cm, i) => (
              <PlayerView player={cm} away={away} teamStyle={style} key={i} />
            ))}
          </Team.Line>
        )}

        {cam && (
          <Team.Line away={away}>
            {cam.map((cam, i) => (
              <PlayerView player={cam} away={away} teamStyle={style} key={i} />
            ))}
          </Team.Line>
        )}

        {fw && (
          <Team.Line away={away}>
            {fw.map((fw, i) => (
              <PlayerView player={fw} away={away} teamStyle={style} key={i} />
            ))}
          </Team.Line>
        )}
      </Team.Squad>
    </Team.Container>
  );
};

export default TeamView;
