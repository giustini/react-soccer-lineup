export interface TeamViewProps {
  away?: boolean;
  team: Team;
}

export type Team = {
  squad: Squad;
  style?: TeamStyle;
};

export type Squad = {
  gk?: Player | null | undefined;
  df?: (Player | null | undefined)[];
  cdm?: (Player | null | undefined)[];
  cm?: (Player | null | undefined)[];
  cam?: (Player | null | undefined)[];
  fw?: (Player | null | undefined)[];
};

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
