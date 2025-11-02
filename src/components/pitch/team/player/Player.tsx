import React from 'react';

import type { PlayerViewProps } from './Player.types.ts';
import { buildStyle } from './utils';

import * as Player from './Player.styled';

const PlayerView: React.FC<PlayerViewProps> = ({ player, away, teamStyle }) => {
  const { name, number, style: playerStyle, onClick } = player;
  const style = buildStyle(playerStyle, away, teamStyle);

  return (
    <Player.Container>
      <Player.Content
        color={style.color}
        colorBorder={style.borderColor}
        clickable={!!onClick}
        onClick={onClick}
      >
        {number && <Player.Number color={style.numberColor}>{number}</Player.Number>}
        {name && <Player.Name color={style.nameColor}>{name}</Player.Name>}
      </Player.Content>
    </Player.Container>
  );
};

export default PlayerView;
