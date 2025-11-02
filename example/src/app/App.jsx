import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ColorPicker } from 'primereact/colorpicker';
import { Checkbox } from 'primereact/checkbox';

import SoccerLineUp from 'react-soccer-lineup';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '588f58',
      pattern: 'lines',
      showHomeTeam: false,
      showAwayTeam: false,

      homeTeamColor: 'ffffff',
      homeTeamNumberColor: '333333',
      homeGoalkeeperColor: 'd6cb65',
      homeGoalkeeperNumberColor: '333333',
      homeTeamClickable: false,

      awayTeamColor: '333333',
      awayTeamNumberColor: 'ffffff',
      awayGoalkeeperColor: '4f6c75',
      awayGoalkeeperNumberColor: 'ffffff',
      awayTeamClickable: false,
    };
  }

  render() {
    const { color, pattern, showHomeTeam, showAwayTeam } = this.state;

    const {
      homeTeamColor,
      homeTeamNumberColor,
      homeGoalkeeperColor,
      homeGoalkeeperNumberColor,
      homeTeamClickable,
    } = this.state;

    const {
      awayTeamColor,
      awayTeamNumberColor,
      awayGoalkeeperColor,
      awayGoalkeeperNumberColor,
      awayTeamClickable,
    } = this.state;

    return (
      <div className='example'>
        <div className='container'>
          <h1>react-soccer-lineup</h1>

          <SoccerLineUp
            size='responsive'
            color={`#${color}`}
            pattern={pattern}
            homeTeam={showHomeTeam ? this.buildHomeTeam() : undefined}
            awayTeam={showAwayTeam ? this.buildAwayTeam() : undefined}
          />

          <div className='controls'>
            <div className='controls-row'>
              <div className='pattern'>
                <h3>Pattern</h3>

                <Dropdown
                  placeholder='Select a pattern'
                  value={pattern}
                  options={this.buildPatternsDropdownOptions()}
                  onChange={this.onChangePattern}
                />
              </div>

              <div className='color'>
                <h3>Color</h3>

                <div className='colorpicker'>
                  <ColorPicker value={color} onChange={this.onChangeColor} />
                  <p>{`#${color}`}</p>
                </div>
              </div>

              <div className='teams'>
                <h3>Show teams</h3>

                <div className='checkboxes'>
                  <div className='home'>
                    <Checkbox
                      inputId='home'
                      checked={showHomeTeam}
                      onChange={this.onChangeShowHomeTeam}
                    />

                    <label htmlFor='home' className='p-checkbox-label'>
                      Home
                    </label>
                  </div>

                  <div className='away'>
                    <Checkbox
                      inputId='away'
                      checked={showAwayTeam}
                      onChange={this.onChangeShowAwayTeam}
                    />

                    <label htmlFor='away' className='p-checkbox-label'>
                      Away
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {showHomeTeam && (
              <>
                <hr />

                <div className='controls-row'>
                  <div className='team-section'>
                    <h3>Home team colors</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Main color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={homeTeamColor}
                            onChange={this.onChangeHomeTeamColor}
                          />
                          <p>{`#${homeTeamColor}`}</p>
                        </div>
                      </div>

                      <div className='color'>
                        <h4>Number color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={homeTeamNumberColor}
                            onChange={this.onChangeHomeTeamNumberColor}
                          />
                          <p>{`#${homeTeamNumberColor}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='team-section'>
                    <h3>Home goalkeeper colors</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Main color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={homeGoalkeeperColor}
                            onChange={this.onChangeHomeGoalkeeperColor}
                          />
                          <p>{`#${homeGoalkeeperColor}`}</p>
                        </div>
                      </div>

                      <div className='color'>
                        <h4>Number color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={homeGoalkeeperNumberColor}
                            onChange={this.onChangeHomeGoalkeeperNumberColor}
                          />
                          <p>{`#${homeGoalkeeperNumberColor}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='team-section'>
                    <h3>Home team events</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Make players clickable</h4>

                        <Checkbox
                          inputId='homeClickable'
                          checked={homeTeamClickable}
                          onChange={this.onChangeClickableHomeTeam}
                        />

                        <label htmlFor='homeClickable' className='p-checkbox-label'>
                          Clickable
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {showAwayTeam && (
              <>
                <hr />

                <div className='controls-row'>
                  <div className='team-section'>
                    <h3>Away team colors</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Main color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={awayTeamColor}
                            onChange={this.onChangeAwayTeamColor}
                          />
                          <p>{`#${awayTeamColor}`}</p>
                        </div>
                      </div>

                      <div className='color'>
                        <h4>Number color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={awayTeamNumberColor}
                            onChange={this.onChangeAwayTeamNumberColor}
                          />
                          <p>{`#${awayTeamNumberColor}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='team-section'>
                    <h3>Away goalkeeper colors</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Main color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={awayGoalkeeperColor}
                            onChange={this.onChangeAwayGoalkeeperColor}
                          />
                          <p>{`#${awayGoalkeeperColor}`}</p>
                        </div>
                      </div>

                      <div className='color'>
                        <h4>Number color</h4>

                        <div className='colorpicker'>
                          <ColorPicker
                            value={awayGoalkeeperNumberColor}
                            onChange={this.onChangeAwayGoalkeeperNumberColor}
                          />
                          <p>{`#${awayGoalkeeperNumberColor}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='team-section'>
                    <h3>Away team events</h3>

                    <div className='team-section-content'>
                      <div className='color'>
                        <h4>Make players clickable</h4>

                        <Checkbox
                          inputId='awayClickable'
                          checked={awayTeamClickable}
                          onChange={this.onChangeClickableAwayTeam}
                        />

                        <label htmlFor='awayClickable' className='p-checkbox-label'>
                          Clickable
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  buildHomeTeam = () => {
    const {
      homeTeamColor,
      homeTeamNumberColor,
      homeGoalkeeperColor,
      homeGoalkeeperNumberColor,
      homeTeamClickable,
    } = this.state;

    return {
      squad: {
        gk: {
          number: 1,
          style: {
            color: `#${homeGoalkeeperColor}`,
            numberColor: `#${homeGoalkeeperNumberColor}`,
          },
          onClick: homeTeamClickable ? () => alert(`Home team - Player ${1}`) : undefined,
        },
        df: [
          {
            number: 2,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${2}`) : undefined,
          },
          {
            number: 4,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${4}`) : undefined,
          },
          {
            number: 5,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${5}`) : undefined,
          },
          {
            number: 3,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${3}`) : undefined,
          },
        ],
        cm: [
          {
            number: 6,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${6}`) : undefined,
          },
          {
            number: 8,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${8}`) : undefined,
          },
        ],
        cam: [
          {
            number: 11,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${11}`) : undefined,
          },
          {
            number: 10,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${10}`) : undefined,
          },
          {
            number: 7,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${7}`) : undefined,
          },
        ],
        fw: [
          {
            number: 9,
            onClick: homeTeamClickable ? () => alert(`Home team - Player ${9}`) : undefined,
          },
        ],
      },
      style: {
        color: `#${homeTeamColor}`,
        numberColor: `#${homeTeamNumberColor}`,
        borderColor: `#333333`,
      },
    };
  };

  buildAwayTeam = () => {
    const {
      awayTeamColor,
      awayTeamNumberColor,
      awayGoalkeeperColor,
      awayGoalkeeperNumberColor,
      awayTeamClickable,
    } = this.state;

    return {
      squad: {
        gk: {
          number: 1,
          style: {
            color: `#${awayGoalkeeperColor}`,
            numberColor: `#${awayGoalkeeperNumberColor}`,
          },
          onClick: awayTeamClickable ? () => alert(`Away team - Player ${1}`) : undefined,
        },
        df: [
          {
            number: 2,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${2}`) : undefined,
          },
          {
            number: 4,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${4}`) : undefined,
          },
          {
            number: 5,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${5}`) : undefined,
          },
          {
            number: 3,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${3}`) : undefined,
          },
        ],
        cam: [
          {
            number: 7,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${7}`) : undefined,
          },
          {
            number: 8,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${8}`) : undefined,
          },
          {
            number: 6,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${6}`) : undefined,
          },
          {
            number: 10,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${10}`) : undefined,
          },
        ],
        fw: [
          {
            number: 9,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${9}`) : undefined,
          },
          {
            number: 11,
            onClick: awayTeamClickable ? () => alert(`Away team - Player ${11}`) : undefined,
          },
        ],
      },
      style: {
        color: `#${awayTeamColor}`,
        numberColor: `#${awayTeamNumberColor}`,
        borderColor: `#ffffff`,
      },
    };
  };

  buildPatternsDropdownOptions = () => {
    return [
      {
        label: 'None',
        value: undefined,
      },
      {
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
      },
    ];
  };

  onChangePattern = (e) => {
    this.setState({ pattern: e.value });
  };

  onChangeColor = (e) => {
    this.setState({ color: e.value });
  };

  onChangeShowHomeTeam = () => {
    this.setState({ showHomeTeam: !this.state.showHomeTeam });
  };

  onChangeShowAwayTeam = () => {
    this.setState({ showAwayTeam: !this.state.showAwayTeam });
  };

  onChangeHomeTeamColor = (e) => {
    this.setState({ homeTeamColor: e.value });
  };

  onChangeHomeTeamNumberColor = (e) => {
    this.setState({ homeTeamNumberColor: e.value });
  };

  onChangeHomeGoalkeeperColor = (e) => {
    this.setState({ homeGoalkeeperColor: e.value });
  };

  onChangeHomeGoalkeeperNumberColor = (e) => {
    this.setState({ homeGoalkeeperNumberColor: e.value });
  };

  onChangeClickableHomeTeam = () => {
    this.setState({ homeTeamClickable: !this.state.homeTeamClickable });
  };

  onChangeAwayTeamColor = (e) => {
    this.setState({ awayTeamColor: e.value });
  };

  onChangeAwayTeamNumberColor = (e) => {
    this.setState({ awayTeamNumberColor: e.value });
  };

  onChangeAwayGoalkeeperColor = (e) => {
    this.setState({ awayGoalkeeperColor: e.value });
  };

  onChangeAwayGoalkeeperNumberColor = (e) => {
    this.setState({ awayGoalkeeperNumberColor: e.value });
  };

  onChangeClickableAwayTeam = () => {
    this.setState({ awayTeamClickable: !this.state.awayTeamClickable });
  };
}
