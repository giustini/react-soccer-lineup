import type { PlayerStyle, TeamStyle } from '../../Team.types.ts';

import * as Constants from '../../../../../constants';

export const buildStyle = (
  playerStyle?: PlayerStyle,
  away?: boolean,
  teamStyle?: TeamStyle
): Required<PlayerStyle> => {
  return {
    color: getPlayerColor(playerStyle, away, teamStyle),
    borderColor: getPlayerBorderColor(playerStyle, away, teamStyle),
    numberColor: getPlayerNumberColor(playerStyle, away, teamStyle),
    numberBackgroundColor: getPlayerNumberBackgroundColor(playerStyle, teamStyle),
    nameColor: getPlayerNameColor(playerStyle, away, teamStyle),
    nameBackgroundColor: getPlayerNameBackgroundColor(playerStyle, teamStyle),
    pattern: getPlayerPattern(playerStyle, teamStyle),
    patternColor: getPlayerPatternColor(playerStyle, teamStyle),
  };
};

const getPlayerColor = (playerStyle?: PlayerStyle, away?: boolean, style?: TeamStyle) => {
  return playerStyle?.color || getTeamColor(away, style);
};

const getTeamColor = (away?: boolean, style?: TeamStyle) => {
  return (
    (style && style.color) || (away ? Constants.DEFAULT_AWAY_COLOR : Constants.DEFAULT_HOME_COLOR)
  );
};

const getPlayerBorderColor = (playerStyle?: PlayerStyle, away?: boolean, style?: TeamStyle) => {
  return playerStyle?.borderColor || getTeamBorderColor(away, style);
};

const getTeamBorderColor = (away?: boolean, style?: TeamStyle) => {
  return (style && style.borderColor) || getTeamColor(away, style);
};

const getPlayerNumberColor = (playerStyle?: PlayerStyle, away?: boolean, style?: TeamStyle) => {
  return playerStyle?.numberColor || getTeamNumberColor(away, style);
};

const getTeamNumberColor = (away?: boolean, style?: TeamStyle) => {
  return (
    (style && style.numberColor) ||
    (away ? Constants.DEFAULT_AWAY_NUMBER_COLOR : Constants.DEFAULT_HOME_NUMBER_COLOR)
  );
};

const getPlayerNumberBackgroundColor = (playerStyle?: PlayerStyle, style?: TeamStyle) => {
  return playerStyle?.numberBackgroundColor || style?.numberBackgroundColor || 'transparent';
};

const getPlayerNameColor = (playerStyle?: PlayerStyle, away?: boolean, style?: TeamStyle) => {
  return playerStyle?.nameColor || getTeamNameColor(away, style);
};

const getTeamNameColor = (away?: boolean, style?: TeamStyle) => {
  return (
    (style && style.nameColor) ||
    (away ? Constants.DEFAULT_AWAY_NUMBER_COLOR : Constants.DEFAULT_HOME_NUMBER_COLOR)
  );
};

const getPlayerNameBackgroundColor = (playerStyle?: PlayerStyle, style?: TeamStyle) => {
  return playerStyle?.nameBackgroundColor || style?.nameBackgroundColor || 'transparent';
};

const getPlayerPattern = (playerStyle?: PlayerStyle, style?: TeamStyle) => {
  return playerStyle?.pattern || style?.pattern || 'none';
};

const getPlayerPatternColor = (playerStyle?: PlayerStyle, style?: TeamStyle) => {
  return playerStyle?.patternColor || style?.patternColor || 'transparent';
};
