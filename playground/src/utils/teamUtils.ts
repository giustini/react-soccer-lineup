import type { Team, Player } from 'react-soccer-lineup';

export const createTeamWithCallbacks = (team: Team, prefix: string): Team => {
  const createPlayerWithCallback = (player: Player, position: string): Player => {
    return (
      !!player && {
        ...player,
        onClick: () => {
          alert(`Player selected: #${player.number} - ${prefix} ${position}`);
        },
      }
    );
  };
  return {
    ...team,
    squad: {
      ...team.squad,
      gk: team.squad.gk ? createPlayerWithCallback(team.squad.gk, 'GK') : undefined,
      df: team.squad.df?.map((p: Player, i: number) => createPlayerWithCallback(p, `DF${i + 1}`)),
      cdm: team.squad.cdm?.map((p: Player, i: number) =>
        createPlayerWithCallback(p, `CDM${i + 1}`)
      ),
      cm: team.squad.cm?.map((p: Player, i: number) => createPlayerWithCallback(p, `CM${i + 1}`)),
      cam: team.squad.cam?.map((p: Player, i: number) =>
        createPlayerWithCallback(p, `CAM${i + 1}`)
      ),
      fw: team.squad.fw?.map((p: Player, i: number) => createPlayerWithCallback(p, `FW${i + 1}`)),
    },
  };
};

export const applyTeamColors = (baseTeam: Team, colors: any): Team => {
  return {
    ...baseTeam,
    squad: {
      ...baseTeam.squad,
      gk: { ...baseTeam.squad.gk, style: { color: colors.goalkeeperColor } },
    },
    style: {
      ...baseTeam.style,
      ...colors,
    },
  };
};
