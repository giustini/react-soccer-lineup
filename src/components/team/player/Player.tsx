import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Player.scss";


export type Player = {
    name?: string;
    number?: number;
    color?: string;
}

interface PlayerViewProps {
    player: Player;
}

interface PlayerViewState {

}

class PlayerView extends Component<PlayerViewProps, PlayerViewState> {

    static playerShape = PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
        color: PropTypes.string
    });

    render() {

        const { player } = this.props;

        return (
            <div className="player-view">
                <div  className={player.color || "player"}>
                    <div className="number">{ player.number }</div>
                </div>
            </div>
        );
    }
}

export default PlayerView;
