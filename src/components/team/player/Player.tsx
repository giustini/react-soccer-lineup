import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Player.scss";


export type Player = {
    name?: string;
    number?: number;
    color?: string;
    numberColor?: string;

    onClick?(): void;
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
        color: PropTypes.string,
        numberColor: PropTypes.string,
        onClick: PropTypes.func
    });

    render() {

        const { player } = this.props;

        return (
            <div className="player-view">
                <div
                    className={ classNames("player", { "clickable": player.onClick }) }
                    style={ { backgroundColor: player.color } }
                    onClick={ player.onClick }
                >

                    <div
                        className="number"
                        style={ { color: player.numberColor } }
                    >{ player.number }</div>

                </div>
            </div>
        );
    }
}

export default PlayerView;
