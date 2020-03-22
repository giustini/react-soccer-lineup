import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { ColorPicker } from 'primereact/colorpicker'
import { Checkbox } from 'primereact/checkbox'

import SoccerLineUp from 'react-soccer-lineup'

import './App.scss'


export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '588f58',
            pattern: 'lines',
            showHomeTeam: false,
            showAwayTeam: false
        }
    }

    render() {

        const { color, pattern, showHomeTeam, showAwayTeam } = this.state

        return (
          <div className="app">
              <div className="container">

                  <h1>react-soccer-lineup example</h1>

                  <SoccerLineUp
                    size="responsive"
                    color={ `#${ color }` }
                    pattern={ pattern }
                    homeTeam={ showHomeTeam ? this.buildHomeTeam() : undefined }
                    awayTeam={ showAwayTeam ? this.buildAwayTeam() : undefined }
                  />

                  <div className="controls">

                      <div className="pattern">

                          <h3>Pattern</h3>

                          <Dropdown
                            placeholder="Select a pattern"
                            value={ pattern }
                            options={ this.buildPatternsDropdownOptions() }
                            onChange={ this.onChangePattern }
                          />

                      </div>

                      <div className="color">

                          <h3>Color</h3>

                          <div className="colorpicker">
                              <ColorPicker
                                value={ color }
                                onChange={ this.onChangeColor }
                              />
                              <p>{ `#${ color }` }</p>
                          </div>

                      </div>

                      <div className="teams">

                          <h3>Show teams</h3>

                          <div className="checkboxes">

                              <div className="home">

                                  <Checkbox
                                    inputId="home"
                                    checked={ showHomeTeam }
                                    onChange={ this.onChangeShowHomeTeam }
                                  />

                                  <label
                                    htmlFor="home"
                                    className="p-checkbox-label"
                                  >Home</label>

                              </div>

                              <div className="away">

                                  <Checkbox
                                    inputId="away"
                                    checked={ showAwayTeam }
                                    onChange={ this.onChangeShowAwayTeam }
                                  />

                                  <label
                                    htmlFor="away"
                                    className="p-checkbox-label"
                                  >Away</label>

                              </div>

                          </div>
                      </div>

                  </div>

              </div>
          </div>
        )
    }

    buildHomeTeam = () => {
        return {
            color: 'lightcoral',
            squad: {
                gk: {
                    number: 1
                },
                df: [ {
                    number: 2
                }, {
                    number: 4
                }, {
                    number: 5,
                }, {
                    number: 3
                } ],
                cm: [ {
                    number: 6
                }, {
                    number: 8
                } ],
                cam: [ {
                    number: 11
                }, {
                    number: 10
                }, {
                    number: 7
                } ],
                fw: [ {
                    number: 9
                } ]
            }
        }
    }

    buildAwayTeam = () => {
        return {
            color: 'lightblue',
            squad: {
                gk: {
                    number: 1
                },
                df: [ {
                    number: 2
                }, {
                    number: 4
                }, {
                    number: 5,
                }, {
                    number: 3
                } ],
                cam: [ {
                    number: 7
                }, {
                    number: 8
                }, {
                    number: 6
                }, {
                    number: 10
                } ],
                fw: [ {
                    number: 9
                }, {
                    number: 11
                } ]
            }
        }
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

    onChangeShowHomeTeam = () => {
        this.setState({ showHomeTeam: !this.state.showHomeTeam })
    }

    onChangeShowAwayTeam = () => {
        this.setState({ showAwayTeam: !this.state.showAwayTeam })
    }
}
