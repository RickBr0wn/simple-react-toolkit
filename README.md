# simple-react-toolkit

> Modern Styled React Component Modules.

[![NPM](https://img.shields.io/npm/v/simple-react-toolkit.svg?style=flat)](https://www.npmjs.com/package/simple-react-toolkit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-toolkit
```

## Table of Contents

1. [CSS_Reset](#css_reset)
2. [Masonry Layout](#masonrylayout)

## CSS_Reset

This simple CSS_Reset component injects the following `.css` file into your project, via the `<CSS_Reset>` wrapper

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:100,200,400,500,700');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.6rem;
  background-color: #eceff1;
}
```

I have always tried to keep my code DRY, so I figured this would be a great place to kick off the basic toolbox..

## Usage

Once installed (see [Installation](#installation)), the `<CSS_Reset>` component can simply be used like this:

```jsx
import React, { Component } from 'react'

import { CSS_Reset } from 'simple-react-toolbox'

class Example extends Component {
  render() {
    return (
      <>
        <CSS_Reset>
          {the rest of your site goes here}
        </CSS_Reset>
      </>
    )
  }
}
```

## MasonryLayout

blah..

## Todo

1. Add tests for CSS_Reset
2. Add functionality to CSS_Reset to allow for a different background color.
3. Add functionality to CSS_Reset to allow for a different default font
4. Add Masonry Layout documentation
5. Add API_Fetch documentation
6. Add test suite
7. Convert API_Fetch to funcitonal component

## License

MIT © [RickBr0wn](https://github.com/RickBr0wn)

# 🤓
