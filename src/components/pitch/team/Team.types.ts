export interface TeamViewProps {
  away?: boolean;
  team: Team;
}

export type Team = {
  squad: Squad;
  style?: TeamStyle;
};

export type Squad = {
  gk?: Player;
  df?: Player[];
  cdm?: Player[];
  cm?: Player[];
  cam?: Player[];
  fw?: Player[];
};

export type Player = {
  name?: string;
  number?: number;
  style?: PlayerStyle;

  onClick?(): void;
};

export type PlayerStyle = TeamStyle;

export type TeamStyle = {
  color?: string;
  borderColor?: string;
  numberColor?: string;
  nameColor?: string;
};
