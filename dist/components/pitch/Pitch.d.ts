import { Component } from "react";
import PropTypes from 'prop-types';
import { Team } from "../team/Team";
import "./Pitch.scss";
declare type PitchSize = "small" | "normal" | "big" | "responsive" | "fill";
declare type PitchPattern = "lines" | "squares" | "circles";
interface PitchProps {
    color?: string;
    size?: PitchSize;
    pattern?: PitchPattern;
    homeTeam?: Team;
    awayTeam?: Team;
}
interface PitchState {
}
declare class Pitch extends Component<PitchProps, PitchState> {
    static propTypes: {
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        pattern: PropTypes.Requireable<string>;
        homeTeam: PropTypes.Requireable<PropTypes.InferProps<{
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
        awayTeam: PropTypes.Requireable<PropTypes.InferProps<{
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
    };
    render(): JSX.Element;
    getPitchBackground: (pattern?: "lines" | "squares" | "circles" | undefined) => string;
    getPatternImage: (pattern: PitchPattern) => any;
    renderTeams: (homeTeam?: Team | undefined, awayTeam?: Team | undefined) => JSX.Element;
}
export default Pitch;
