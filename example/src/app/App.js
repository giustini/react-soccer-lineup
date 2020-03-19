import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { ColorPicker } from 'primereact/colorpicker'

import SoccerLineUp from 'react-soccer-lineup'

import './App.scss'


export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '588f58',
            pattern: 'lines'
        }
    }

    render() {

        return (
            <div className="app">
                <div className="container">

                    <h1>react-soccer-lineup example</h1>

                    <SoccerLineUp
                        size="responsive"
                        color={ `#${ this.state.color }` }
                        pattern={ this.state.pattern }
                    />

                    <div className="controls">

                        <div className="pattern">
                            <h3>Pattern</h3>
                            <Dropdown
                                placeholder="Select a pattern"
                                value={ this.state.pattern }
                                options={ this.buildPatternsDropdownOptions() }
                                onChange={ this.onChangePattern }
                            />
                        </div>

                        <div className="color">
                            <h3>Color</h3>
                            <div className="colorpicker">
                                <ColorPicker
                                    value={ this.state.color }
                                    onChange={ this.onChangeColor }
                                />
                                <p>{ `#${ this.state.color }` }</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

    buildPatternsDropdownOptions = () => {
        return [
            {
                label: 'None',
                value: undefined,
            }, {
                label: 'Lines',
                value: 'lines',
            },
            {
                label: 'Squares',
                value: 'squares',
            },
            {
                label: 'Circles',
                value: 'circles',
            }
        ]
    }

    onChangePattern = (e) => {
        this.setState({ pattern: e.value })
    }

    onChangeColor = (e) => {
        this.setState({ color: e.value })
    }
}
