# react-soccer-lineup

⚽ React Soccer Line up - A soccer pitch representation component for React ⚛️

[![NPM](https://img.shields.io/npm/v/react-soccer-lineup.svg)](https://www.npmjs.com/package/react-soccer-lineup) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/react-soccer-lineup)](https://www.npmjs.com/package/react-soccer-lineup)

## Install

```bash
npm install --save react-soccer-lineup
```

![](docs/img/sample-1.png)

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
              pattern={ "lines" }
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
 `squad` | `Squad` | Yes | - | The team players by role
 `style` | `Style` | No | - | The team style

#### Squad

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `gk` | `Player` | No | - | The squad goalkeeper
 `df` | `Player[]` | No | - | The squad defenders
 `cdm` | `Player[]` | No | - | The squad central defensive midfielders
 `cm` | `Player[]` | No | - | The squad central midfielders
 `cam` | `Player[]` | No | - | The squad central attack midfielders
 `fw` | `Player[]` | No | - | The squad forwards

#### Style

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `color` | `string` | Yes | ![#f08080](https://placehold.it/15/f08080/000000?text=+) `#f08080` (home) / ![#add8e6](https://placehold.it/15/add8e6/000000?text=+) `#add8e6` (away) | The team color
 `numberColor` | `string` | Yes | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` (home) / ![#333333](https://placehold.it/15/333333/000000?text=+) `#333333` (away) | The team number color
 `nameColor` | `string` | No | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` (home) / ![#333333](https://placehold.it/15/333333/000000?text=+) `#333333` (away) | The team players' name color
 
#### Player

 Attribute | Type | Required | Default value | Description
 ---- | ---- | -------- | ------------- | -----------
 `name` | `string` | No | - | The displayed player name
 `number` | `number` | No | - | The displayed player number
 `color` | `string` | No | The team color | The player color
 `numberColor` | `string` | No | The team number color | The player number color
 `nameColor` | `string` | No | The team players' name color | The player name color
 `onCLick` | `Function` | No | - | Callback to invoke when clicking on the player
  
 
## Live

Check a live example [here](https://rsl-example.netlify.com/).


## License

MIT © [giustini](https://github.com/giustini)
