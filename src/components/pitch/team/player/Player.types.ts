import type { NullablePlayer, TeamStyle } from '../Team.types.ts';

export interface PlayerViewProps {
  player: NullablePlayer;
  away?: boolean;
  teamStyle?: TeamStyle;
}
