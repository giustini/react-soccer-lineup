import { Component } from "react";
import PropTypes from "prop-types";
import { Player } from "./player/Player";
import "./Team.scss";
export declare type Squad = {
    gk?: Player;
    df?: Player[];
    cdm?: Player[];
    cm?: Player[];
    cam?: Player[];
    fw?: Player[];
};
export declare type Style = {
    color: string;
    numberColor: string;
    nameColor: string;
};
export declare type Team = {
    squad: Squad;
    style?: Style;
};
export interface TeamViewProps {
    away?: boolean;
    team: Team;
}
interface TeamViewState {
}
declare class TeamView extends Component<TeamViewProps, TeamViewState> {
    readonly DEFAULT_HOME_COLOR: string;
    readonly DEFAULT_AWAY_COLOR: string;
    readonly DEFAULT_HOME_NUMBER_COLOR: string;
    readonly DEFAULT_AWAY_NUMBER_COLOR: string;
    static teamShape: PropTypes.Requireable<PropTypes.InferProps<{
        squad: PropTypes.Validator<PropTypes.InferProps<{
            gk: PropTypes.Requireable<PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
            df: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }> | null | undefined)[]>;
            cdm: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }> | null | undefined)[]>;
            cm: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }> | null | undefined)[]>;
            cam: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }> | null | undefined)[]>;
            fw: PropTypes.Requireable<(PropTypes.InferProps<{
                name: PropTypes.Requireable<string>;
                number: PropTypes.Requireable<number>;
                color: PropTypes.Requireable<string>;
                numberColor: PropTypes.Requireable<string>;
                nameColor: PropTypes.Requireable<string>;
                onClick: PropTypes.Requireable<(...args: any[]) => any>;
            }> | null | undefined)[]>;
        }>>;
        style: PropTypes.Requireable<PropTypes.InferProps<{
            color: PropTypes.Validator<string>;
            numberColor: PropTypes.Validator<string>;
            nameColor: PropTypes.Requireable<string>;
        }>>;
    }>>;
    render(): JSX.Element;
    buildPlayer: (player: Player, away?: boolean | undefined) => Player;
    getPlayerColor: (player: Player, away?: boolean | undefined) => string;
    getTeamColor: (away?: boolean | undefined) => string;
    getPlayerNumberColor: (player: Player, away?: boolean | undefined) => string;
    getTeamNumberColor: (away?: boolean | undefined) => string;
    getPlayerNameColor: (player: Player, away?: boolean | undefined) => string;
    getTeamNameColor: (away?: boolean | undefined) => string;
}
export default TeamView;
