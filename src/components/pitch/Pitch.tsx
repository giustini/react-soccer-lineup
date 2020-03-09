import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import pitch from "./img/pitch.png";
import lines from "./img/lines.png";
import squares from "./img/squares.png";
import circles from "./img/circles.png";

import "./Pitch.scss";


type PitchSize = "small" | "normal" | "big" | "responsive";
type PitchPattern = "lines" | "squares" | "circles";

interface PitchProps {
    color?: string;
    size?: PitchSize;
    pattern?: PitchPattern;
}

interface PitchState {

}

class Pitch extends Component<PitchProps, PitchState> {

    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOf([ "small", "normal", "big", "responsive" ]),
        pattern: PropTypes.oneOf([ "lines", "squares", "circles" ])
    };

    render() {

        const { color, size, pattern } = this.props;

        return (
            <div
                className={ classNames("pitch", size || "normal") }
                style={ {
                    backgroundColor: color || "#588f58",
                    backgroundImage: this.getPitchBackground(pattern)
                } }
            />
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

}

export default Pitch;
