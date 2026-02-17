import type { Team, Player } from 'react-soccer-lineup';

type NullablePlayer = Player | null | undefined;

export const createTeamWithCallbacks = (team: Team, prefix: string): Team => {
  const createPlayerWithCallback = (player: NullablePlayer, position: string): NullablePlayer => {
    return !!player
      ? {
          ...player,
          onClick: () => {
            alert(`Player selected: #${player.number} - ${prefix} ${position}`);
          },
        }
      : null;
  };

  return {
    ...team,
    squad: {
      ...team.squad,
      gk: team.squad.gk ? createPlayerWithCallback(team.squad.gk, 'GK') : undefined,
      df: team.squad.df?.map((p: NullablePlayer, i: number) =>
        createPlayerWithCallback(p, `DF${i + 1}`)
      ),
      cdm: team.squad.cdm?.map((p: NullablePlayer, i: number) =>
        createPlayerWithCallback(p, `CDM${i + 1}`)
      ),
      cm: team.squad.cm?.map((p: NullablePlayer, i: number) =>
        createPlayerWithCallback(p, `CM${i + 1}`)
      ),
      cam: team.squad.cam?.map((p: NullablePlayer, i: number) =>
        createPlayerWithCallback(p, `CAM${i + 1}`)
      ),
      fw: team.squad.fw?.map((p: NullablePlayer, i: number) =>
        createPlayerWithCallback(p, `FW${i + 1}`)
      ),
    },
  };
};

export const stripNumbers = (team: Team): Team => {
  const strip = (player: NullablePlayer): NullablePlayer =>
    player ? { ...player, number: undefined } : player;

  return {
    ...team,
    squad: {
      gk: strip(team.squad.gk),
      df: team.squad.df?.map(strip),
      cdm: team.squad.cdm?.map(strip),
      cm: team.squad.cm?.map(strip),
      cam: team.squad.cam?.map(strip),
      fw: team.squad.fw?.map(strip),
    },
  };
};

export const applyTeamColors = (baseTeam: Team, colors: any): Team => {
  return {
    ...baseTeam,
    squad: baseTeam.squad,
    style: {
      ...baseTeam.style,
      ...colors,
    },
  };
};
