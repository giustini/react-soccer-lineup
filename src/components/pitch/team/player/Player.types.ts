import type { Player, TeamStyle } from '../Team.types.ts';

export interface PlayerViewProps {
  player: Player | null | undefined;
  away?: boolean;
  teamStyle?: TeamStyle;
}
