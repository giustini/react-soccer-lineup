# react-soccer-lineup

⚽ React Soccer Line up - A soccer pitch representation component for React ⚛️

[![NPM](https://img.shields.io/npm/v/react-soccer-lineup.svg)](https://www.npmjs.com/package/react-soccer-lineup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save react-soccer-lineup
```


## Usage

```jsx
import React, { Component } from 'react'

import SoccerLineUp from 'react-soccer-lineup'

class Example extends Component {

    render () {

        return (
            <SoccerLineUp
                size={ "small" }
                color={ "lightseagreen" }
                pattern={ "circles" }
            />
        )

    }
}
```


## API

 Prop | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `color` | `string` | No | ![#588f58](https://placehold.it/15/588f58/000000?text=+) `#588f58` | The pitch background color
 `size` | `string` | No | `"normal"` | Pitch dimensions. Supported values: `small`, `normal`, `big`, `responsive`, `fill`
 `pattern` | `string` | No | - | The pattern applied to the pitch grass. Supported values: `lines`, `squares`, `circles`
 `homeTeam` | `Team` | No | - | The left side team
 `awayTeam` | `Team` | No | - | The right side team

#### Team

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `color` | `string` | No | - | The team players color
 `squad` | `Squad` | Yes | - | The team players by role

#### Squad

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `gk` | `Player` | No | - | The squad goalkeeper
 `df` | `Player[]` | No | - | The squad defenders
 `cdm` | `Player[]` | No | - | The squad central defensive midfielders
 `cm` | `Player[]` | No | - | The squad central midfielders
 `cam` | `Player[]` | No | - | The squad central attack midfielders
 `fw` | `Player[]` | No | - | The squad forwards

#### Player

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `name` | `string` | No | - | The displayed player name
 `number` | `number` | No | - | The displayed player number
 
## Live

Check a live example [here](https://rsl-example.netlify.com/).


## License

MIT © [giustini](https://github.com/giustini)
