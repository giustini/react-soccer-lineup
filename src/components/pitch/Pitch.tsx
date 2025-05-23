import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import pitch from "./img/pitch.png";
import lines from "./img/lines.png";
import squares from "./img/squares.png";
import circles from "./img/circles.png";

import TeamView, { Team } from "../team/Team";

import "./Pitch.scss";


type PitchSize = "small" | "normal" | "big" | "responsive" | "fill";
type PitchPattern = "lines" | "squares" | "circles";

interface PitchProps {
    color?: string;
    size?: PitchSize;
    pattern?: PitchPattern;

    homeTeam?: Team;
    awayTeam?: Team;
}

interface PitchState {

}

class Pitch extends Component<PitchProps, PitchState> {

    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOf([ "small", "normal", "big", "responsive", "fill" ]),
        pattern: PropTypes.oneOf([ "lines", "squares", "circles" ]),
        homeTeam: TeamView.teamShape,
        awayTeam: TeamView.teamShape
    };

    render() {

        const { color, size, pattern, homeTeam, awayTeam } = this.props;

        return (
            <div className="pitch-wrapper">
                <div
                    className={classNames("pitch", size || "normal")}
                    style={{
                        backgroundColor: color || "#588f58",
                        backgroundImage: this.getPitchBackground(pattern),
                    }}
                >
                    {this.renderTeams(homeTeam, awayTeam)}
                </div>
            </div>
        );
          
    }

    getPitchBackground = (pattern?: PitchPattern): string => {

        const images = [
            `url(${ pitch })`
        ];

        if (pattern) {
            images.push(`url(${ this.getPatternImage(pattern) })`);
        }

        return images.join(", ");
    };

    getPatternImage = (pattern: PitchPattern) => {
        switch (pattern) {
            case "lines":
                return lines;
            case "squares":
                return squares;
            case "circles":
                return circles;
        }
    };

    renderTeams = (homeTeam?: Team, awayTeam?: Team) => {
        return (
            <div className="teams">

                { homeTeam && <TeamView team={ homeTeam } /> }

                { awayTeam && <TeamView away team={ awayTeam } /> }

            </div>
        );
    };

}

export default Pitch;
