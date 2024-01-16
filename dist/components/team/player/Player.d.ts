import { Component } from "react";
import PropTypes from "prop-types";
import "./Player.scss";
export declare type Player = {
    name?: string;
    number?: number;
    color?: string;
    numberColor?: string;
    nameColor?: string;
    onClick?(): void;
};
interface PlayerViewProps {
    player: Player;
}
interface PlayerViewState {
}
declare class PlayerView extends Component<PlayerViewProps, PlayerViewState> {
    static playerShape: PropTypes.Requireable<PropTypes.InferProps<{
        name: PropTypes.Requireable<string>;
        number: PropTypes.Requireable<number>;
        color: PropTypes.Requireable<string>;
        numberColor: PropTypes.Requireable<string>;
        nameColor: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    render(): JSX.Element;
}
export default PlayerView;
