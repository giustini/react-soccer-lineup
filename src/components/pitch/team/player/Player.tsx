import React from 'react';

import type { PlayerViewProps } from './Player.types.ts';
import { buildStyle } from './utils';

import * as Player from './Player.styled';

const PlayerView: React.FC<PlayerViewProps> = ({ player, away, teamStyle }) => {
  if (!player) return <Player.Container />;

  const { name, number, style: playerStyle, offset, onClick } = player;
  const style = buildStyle(playerStyle, away, teamStyle);

  return (
    <Player.Container>
      {player && (
        <Player.Content
          color={style.color}
          colorBorder={style.borderColor}
          offset={offset}
          clickable={!!onClick}
          onClick={onClick}
        >
          {number && <Player.Number color={style.numberColor}>{number}</Player.Number>}
          {name && (
            <Player.Name color={style.nameColor} backgroundColor={style.nameBackgroundColor}>
              {name}
            </Player.Name>
          )}
        </Player.Content>
      )}
    </Player.Container>
  );
};

export default PlayerView;
