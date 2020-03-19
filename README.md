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


## Live

Check a live example [here](https://rsl-example.netlify.com/).


## License

MIT © [giustini](https://github.com/giustini)
