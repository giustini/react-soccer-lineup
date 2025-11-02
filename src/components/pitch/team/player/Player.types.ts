import type { Player, TeamStyle } from '../Team.types.ts';

export interface PlayerViewProps {
  player: Player;
  away?: boolean;
  teamStyle?: TeamStyle;
}
