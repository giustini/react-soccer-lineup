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
  numberBackgroundColor?: string;
  nameColor?: string;
  nameBackgroundColor?: string;
  pattern?: PlayerPattern;
  patternColor?: string;
};

export type PlayerPattern =
  | 'lines'
  | 'thin-lines'
  | 'thick-lines'
  | 'stripes'
  | 'thin-stripes'
  | 'thick-stripes'
  | 'line'
  | 'thin-line'
  | 'thick-line'
  | 'stripe'
  | 'thin-stripe'
  | 'thick-stripe'
  | 'bar'
  | 'thin-bar'
  | 'thick-bar'
  | 'bars'
  | 'thin-bars'
  | 'thick-bars'
  | 'left-half'
  | 'right-half'
  | 'top-half'
  | 'bottom-half'
  | 'left-slash'
  | 'left-thin-slash'
  | 'left-thick-slash'
  | 'right-slash'
  | 'right-thin-slash'
  | 'right-thick-slash'
  | 'cross'
  | 'x'
  | 'squares'
  | 'none';

export type PlayerOffset = {
  x?: number;
  y?: number;
};
