# generated-survey

This library allows to generate survey form from json configuration.

It was edited with [Rollup](https://github.com/rollup/rollup) and was bootstrapped with [material-ui](https://github.com/mui-org/material-ui).

## Installation

To install prebuilt generated-survey binaries, use [`npm`](https://docs.npmjs.com/). The preferred method is to install the plugin as a development dependency in your app:

```sh
npm install generated-survey --save
```

## Usage

To use the component in your React app do :

```javascript
import React from 'react';
import { GeneratedSurvey } from 'generated-survey';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const MyComponent = (props) => {
    const { todo, survey, codeList,
      backFunction, saveFunction, closeFunction } = props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <GeneratedSurvey
          todo={todo} //json object
          survey={survey} //json object
          codeList={codeList} //json array
          onClickBack={backFunction} //function
          onClicksave={saveFunction} //function
          onClickCloseModal={closeFunction} //function
        />
      </MuiThemeProvider>
    )
}

export default MyComponent;
```

## Example

Basic sample is exposed on [generated-survey-sample](https://github.com/NicoLaval/generated-survey/tree/master/example/generated-survey-sample).

## Get sources

```sh
git clone https://github.com/NicoLaval/generated-survey.git
cd generated-survey
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the library to the `dist/index.js` file.<br>

## GeneratedSurvey props description

All the listed props are required to use the GeneratedSurvey component.

### todo

The todo prop is a json object :

```
TODO : Define the structure
```

### survey

The survey prop is a json object :

```
TODO : Define the structure
```

### codeList

The codeList prop is a json array :

```
TODO : Define the structure
```

### onClickBack

The onClickBack prop is a function that would be called when user click on return button.

### onClicksave

The onClicksave prop is a function that would be called when user click on save button.

### onClickCloseModal

The onClickCloseModal prop is a function that would be called when user click to close the box which confirm that data have been saved.
