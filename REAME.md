# React + WebPack Project Boilerplate

## Setup
```
    npm i webpack-cli webpack webpack-dev-server -D   

    npm i react react-dom prop-types

    npm i redux react-redux

    npm i babel-loader @babel/core @babel/preset-env @babel/preset-react -D

    npm i css-loader style-loader sass-loader node-sass -D
```

## Key points
- ES6, React

- CSS / SCSS

- Static files (HTML, Images, Font, Icon ...)

- Dev server
    - Hot loading
    - Proxy

- Webpack config for multi environments


## Update packages
```
    npx npm-check-updates -u
```

## Folder Structure
```
assets/
public/
src/

.babelrc
package.json
webpack.config.js
```

## Run project
```
    "start": "webpack serve --env development",
    "build": "webpack --env development"
```