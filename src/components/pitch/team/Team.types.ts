export interface TeamViewProps {
  away?: boolean;
  team: Team;
}

export type Team = {
  squad: Squad;
  style?: TeamStyle;
};

export type Squad = {
  gk?: NullablePlayer;
  df?: NullablePlayer[];
  cdm?: NullablePlayer[];
  cm?: NullablePlayer[];
  cam?: NullablePlayer[];
  fw?: NullablePlayer[];
};

export type NullablePlayer = Player | null | undefined;

export type Player = {
  name?: string;
  number?: number;
  style?: PlayerStyle;
  offset?: PlayerOffset;

  onClick?(): void;
};

export type PlayerStyle = TeamStyle;

export type TeamStyle = {
  color?: string;
  borderColor?: string;
  numberColor?: string;
  nameColor?: string;
};

export type PlayerOffset = {
  x?: number;
  y?: number;
};
