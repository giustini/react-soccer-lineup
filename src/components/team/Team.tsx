import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PlayerView, { Player } from "./player/Player";

import "./Team.scss";


export type Squad = {
    gk?: Player;
    df?: Player[];
    cdm?: Player[];
    cm?: Player[];
    cam?: Player[];
    fw?: Player[];
};

export type Style = {
    color: string;
    numberColor: string;
    nameColor: string;
}

export type Team = {
    squad: Squad;
    style?: Style;
};

export interface TeamViewProps {
    away?: boolean;
    team: Team;
}

interface TeamViewState {

}

class TeamView extends Component<TeamViewProps, TeamViewState> {

    readonly DEFAULT_HOME_COLOR = "lightcoral";
    readonly DEFAULT_AWAY_COLOR = "lightblue";

    readonly DEFAULT_HOME_NUMBER_COLOR = "#ffffff";
    readonly DEFAULT_AWAY_NUMBER_COLOR = "#333333";

    static teamShape = PropTypes.shape({
        squad: PropTypes.shape({
            gk: PlayerView.playerShape,
            df: PropTypes.arrayOf(PlayerView.playerShape),
            cdm: PropTypes.arrayOf(PlayerView.playerShape),
            cm: PropTypes.arrayOf(PlayerView.playerShape),
            cam: PropTypes.arrayOf(PlayerView.playerShape),
            fw: PropTypes.arrayOf(PlayerView.playerShape)
        }).isRequired,
        style: PropTypes.shape({
            color: PropTypes.string.isRequired,
            numberColor: PropTypes.string.isRequired,
            nameColor: PropTypes.string
        })
    });

    render() {

        const { away } = this.props;
        const { gk, df, cdm, cm, cam, fw } = this.props.team.squad;

        return (
            <div className={ classNames("team", { "away": away }) }>

                { gk && <div className="goalkeeper">

                    <PlayerView player={ this.buildPlayer(gk, away) } />

                </div> }

                <div className="lines">

                    { df && <div className="line">

                        { df.map((df, i) => <PlayerView player={ this.buildPlayer(df, away) } key={ i } />) }

                    </div> }

                    { cdm && <div className="line">

                        { cdm.map((cdm, i) => <PlayerView player={ this.buildPlayer(cdm, away) } key={ i } />) }

                    </div> }

                    { cm && <div className="line">

                        { cm.map((cm, i) => <PlayerView player={ this.buildPlayer(cm, away) } key={ i } />) }

                    </div> }

                    { cam && <div className="line">

                        { cam.map((cam, i) => <PlayerView player={ this.buildPlayer(cam, away) } key={ i } />) }

                    </div> }

                    { fw && <div className="line">

                        { fw.map((fw, i) => <PlayerView player={ this.buildPlayer(fw, away) } key={ i } />) }

                    </div> }

                </div>

            </div>
        );
    }

    buildPlayer = (player: Player, away?: boolean): Player => {
        return {
            ...player,
            color: this.getPlayerColor(player, away),
            numberColor: this.getPlayerNumberColor(player, away),
            nameColor: this.getPlayerNameColor(player, away)
        };
    };

    getPlayerColor = (player: Player, away?: boolean) => {
        return player.color || this.getTeamColor(away);
    };

    getTeamColor = (away?: boolean) => {

        const { style } = this.props.team;

        return style && style.color || (away ? this.DEFAULT_AWAY_COLOR : this.DEFAULT_HOME_COLOR);
    };

    getPlayerNumberColor = (player: Player, away?: boolean) => {
        return player.numberColor || this.getTeamNumberColor(away);
    };

    getTeamNumberColor = (away?: boolean) => {

        const { style } = this.props.team;

        return style && style.numberColor || (away ? this.DEFAULT_AWAY_NUMBER_COLOR : this.DEFAULT_HOME_NUMBER_COLOR);
    };

    getPlayerNameColor = (player: Player, away?: boolean) => {
        return player.nameColor || this.getTeamNameColor(away);
    };

    getTeamNameColor = (away?: boolean) => {

        const { style } = this.props.team;

        return style && style.nameColor || (away ? this.DEFAULT_AWAY_NUMBER_COLOR : this.DEFAULT_HOME_NUMBER_COLOR);
    };
}

export default TeamView;
