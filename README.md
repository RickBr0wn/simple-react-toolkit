# simple-react-toolkit

> Modern Styled React Component Modules.

[![NPM](https://img.shields.io/npm/v/simple-react-toolkit.svg?style=flat)](https://www.npmjs.com/package/simple-react-toolkit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save simple-react-toolkit
```

## Table of Contents

1. [CssReset](#CssReset)
2. [Masonry Layout](#masonrylayout)

## CssReset

This simple CssReset component injects the following `.css` file into your project, via the `<CssReset>` wrapper

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

## Usage

Once installed (see [Installation](#installation)), the `<CssReset>` component can simply be used like this:

```jsx
import React from 'react'
import { CssReset } from 'simple-react-toolbox'

const App = () => {
    return (
      <>
        <CssReset />
        {/** The rest of your site goes here */}
      </>
    )
}

export default App

```

## MasonryLayout

blah..

## Todo

1. Add tests for CssReset
2. Add functionality to CssReset to allow for a different default font
3. Add Masonry Layout documentation
4. Add API_Fetch & documentation
5. Add test suite
6. Convert API_Fetch to funcitonal component

## License

MIT © [RickBr0wn](https://github.com/RickBr0wn)

# 🤓
