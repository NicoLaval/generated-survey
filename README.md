# generated-survey

This library was edited with [Rollup](https://github.com/facebookincubator/create-react-app).<br>
It allows to generate survey form from json configuration.

## Installation

To install prebuilt generated-survey binaries, use [`npm`](https://docs.npmjs.com/). The preferred method is to install Electron as a development dependency in your app:

```sh
npm install generated-survey --save
```

## Usage

To use the component, in your React app do :

```javascript
import React from 'react';
import { GeneratedSurvey } from 'generated-survey';

const MyComponent = (props) => {
    const { todo, survey, codeList, back, save } = props;
    return (
      <GeneratedSurvey
        todo={todo} //json object
        survey={survey} //json object
        codeList={codeList} //json array
        back={back} //function
        save={save} //function
      />
    )
}

export default MyComponent;
```

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

### back

The back prop is a function that would be called when user click on return button.

### save

The save prop is a function that would be called when user click on save button.
