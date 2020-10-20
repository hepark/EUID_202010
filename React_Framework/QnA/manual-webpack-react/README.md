###### 매뉴얼 방식으로 React 시작하기

# Webpack 모듈 번들러 튜토리얼

매뉴얼 방식으로 직접 React를 시작하는 프로젝트를 구성하고자 한다면 다음 튜토리얼을 참고하여 하나 하나 구성해보세요.

1. [React 프로젝트 구성](#1-react-프로젝트-구성)
1. [Webpack 모듈 번들러 설치](#2-webpack-모듈-번들러-설치)
1. [React, ReactDOM 패키지 설치](#3-react-reactdom-패키지-설치)
1. [Webpack 구성](#4-webpack-구성)
1. [정적 엔트리 파일 구성](#5-정적-엔트리-파일-구성)
1. [엔트리 파일 구성](#6-엔트리-파일-구성)
1. [package.json 구성](#7-packagejson-구성)
1. [개발/빌드 모두 구성](#개발빌드-모두-구성)
1. [React 개발을 위한 Babel 구성 (JSX 활용)](#9-react-개발을-위한-babel-구성-jsx-활용)
1. [Webpack Dev Sever 구성](#10-webpack-dev-sever-구성)
1. [CSS 설정](#11-css-설정)
1. [Sass 설정](#12-sass-설정)

<br/>

## 1. React 프로젝트 구성

```sh
$ mkdir <프로젝트_이름> && cd $_
$ mkdir public src
$ code .
```

<br/>

## 2. Webpack 모듈 번들러 설치

[Webpack → Basic Setup](https://webpack.js.org/guides/getting-started/#basic-setup) 참고

```sh
$ npm init -y # package.json 생성
$ npm i -D webpack webpack-cli # Webpack, Webpack CLI 개발 모듈 설치
```

<br/>

## 3. React, ReactDOM 패키지 설치

```sh
$ npm i react react-dom
```

<br/>

## 4. Webpack 구성

[Webpack → Using a Configuration](https://webpack.js.org/guides/getting-started/#using-a-configuration) 참고

*webpack.config.js*

```js
const path = require('path');

module.exports = {
  // 모드
  mode: 'development',
  // 진입 파일 설정
  entry: './src/index.js',
  // 출력 파일 설정
  output: {
    // 출력 경로
    path: path.resolve(__dirname, 'public'),
    // 출력 파일 이름
    filename: 'bundle.js',
  },
};
```

<br/>

## 5. 정적 엔트리 파일 구성

*public/index.html*

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React 앱 시작하기</title>
</head>
<body>
  
  <div id="react"></div>

  <script src="./bundle.js"></script>
</body>
</html>
```

<br/>

## 6. 엔트리 파일 구성

*src/index.js*

```js
import React from 'react';
import ReactDOM from 'react-dom';

const appElement = React.createElement(
  'div', { className: 'app' }, 'React 앱 컨테이너'
);

const reactNode = document.querySelector('#react');

ReactDOM.render(appElement, reactNode);
```

<br/>

## 7. package.json 구성

```json
{
  "name": "manual-settings-react",
  "version": "1.0.0",
  "description": "React 시작하기",
  "scripts": {
    "start": "webpack"
  },
  "keywords": ["React"],
  "author": "이듬 <yamoo9@euid.dev>",
  "dependencies": {
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  },
  "devDependencies": {
    "webpack": "^5.1.3",
    "webpack-cli": "^4.1.0"
  }
}
```

NPM 스크립트 명령 실행

```sh
$ npm start
```

명령 실행 결과 (Webpack 번들링)

```sh
> webpack

[webpack-cli] Compilation finished
asset bundle.js 995 KiB [emitted] (name: main)
runtime modules 274 bytes 1 module
modules by path ./node_modules/ 938 KiB
  modules by path ./node_modules/scheduler/ 32.4 KiB 4 modules
  modules by path ./node_modules/react/ 59.4 KiB
    ./node_modules/react/index.js 190 bytes [built] [code generated]
    ./node_modules/react/cjs/react.development.js 59.2 KiB [built] [code generated]
  modules by path ./node_modules/react-dom/ 840 KiB
    ./node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
    ./node_modules/react-dom/cjs/react-dom.development.js 839 KiB [built] [code generated]
  modules by path ./node_modules/prop-types/ 4 KiB
    ./node_modules/prop-types/checkPropTypes.js 3.69 KiB [built] [code generated]
    ./node_modules/prop-types/lib/ReactPropTypesSecret.js 314 bytes [built] [code generated]
  ./node_modules/object-assign/index.js 2.06 KiB [built] [code generated]
./src/index.js 266 bytes [built] [code generated]
webpack 5.1.3 compiled successfully in 373 ms
```

번들링 후, `public/index.html` 파일을 브라우저에서 열면 다음과 같이 동적으로 HTML 코드 생성

```html
<div id="react">
  <div class="app">React 앱 컨테이너</div>
</div>
```

<br/>

## 8. 개발/빌드 모두 구성

Webpack 구성 파일의 `mode` 주석 처리

*webpack.config.js*

```js
const path = require('path');

module.exports = {
  // 모드
  // mode: 'development',
  // 진입 파일 설정
  entry: './src/index.js',
  // 출력 파일 설정
  output: {
    // 출력 경로
    path: path.resolve(__dirname, 'public'),
    // 출력 파일 이름
    filename: 'bundle.js',
  },
};
```

NPM 스크립트 `start`, `build` 명령 구성

*package.json*

```json
{
  "name": "manual-settings-react",
  "version": "1.0.0",
  "description": "React 시작하기",
  "scripts": {
    "start": "webpack --mode=development",
    "build": "webpack --mode=production"
  },
  "keywords": ["React"],
  "author": "이듬 <yamoo9@euid.dev>",
  "dependencies": {
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  },
  "devDependencies": {
    "webpack": "^5.1.3",
    "webpack-cli": "^4.1.0"
  }
}
```

개발(`development`) 번들링

```sh
$ npm start
```

빌드(`production`) 번들링

```sh
$ npm run build
```

<br/>

## 9. React 개발을 위한 Babel 구성 (JSX 활용)

```sh
$ npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Babel, Webpack 로더 의존 패키지 설치

- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
- [babel-loader](https://www.npmjs.com/package/babel-loader)

Babel 프리셋 설정

*.babelrc*

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

Webpack 구성 파일에 `babel-loader` 로더 설정

*webpack.config.js*

```js
const path = require('path');

module.exports = {
  // ...
  //
  // 모듈 설정
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  // 소스맵 설정
  devtool: 'eval-cheap-module-source-map',
};
```

JSX를 활용해 V-DOM Node(React Element)를 보다 손쉽게 관리

*src/index.js*

```js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="app">
    <h1 className="app__title">React 애플리케이션</h1>
  </div>
);

const reactNode = document.querySelector('#react');

ReactDOM.render(<App/>, reactNode);
```

번들링 후, `public/index.html` 파일을 브라우저에서 열면 다음과 같이 동적으로 HTML 코드 생성

```html
<div id="react">
  <div class="app">
    <h1 class="app__title">React 애플리케이션</h1>
  </div>
</div>
```

<br/>

## 10. Webpack Dev Sever 구성

의존 개발 패키지 설치

```sh
$ npm i -D webpack-dev-server
```

Webpack 구성 파일에 `devServer` 설정

*webpack.config.js*

```js
const path = require('path');

module.exports = {
  // ...
  // 개발 서버 설정
  devSever: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};
```

NPM 스크립트 `dev` 명령 추가

*package.json*

```json
{
  "scripts": {
  "start": "webpack --mode=development",
  "build": "webpack --mode=production",
  "dev": "webpack serve"
},
}
```

Webpack 개발 서버 실행

```sh
$ npm run dev
```

개발 서버 실행 결과 출력

```sh
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:9000/
```

<br/>

## 11. CSS 설정

의존 개발 패키지 설치

```sh
$ npm i -D css-loader style-loader
```

Webpack 구성 파일에 CSS 규칙 추가

*webpack.config.js*

```js
// 모듈 설정
module: {
  rules: [
    // ...
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ],
    },
  ],
},
```

CSS 스타일 파일 추가

*src/css/common.css*

```css
body {
  margin: 0;
  font: 1rem/1.5 SpoqaHanSans, Helvetica, Arial, Sans-Serif;
  background: #fcfefa;
  color: #101112;
}
```

엔트리 파일에서 CSS 스타일 파일 임포트

*src/index.js*

```js
import "./css/common.css";
```

<br/>

## 12. Sass 설정

의존 개발 패키지 설치

```sh
$ npm i -D sass-loader node-sass
```

Sass 로더 설정

*webpack.config.js* 

```js
// 모듈 설정
module: {
  rules: [
    // ...
    {
      test: /\.s(a|c)ss$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader' ],
    },
  ],
},
```

Sass 파일 추가

*src/scss/_config.sass*

```sass
$base-font-settings: 1rem/1.5 SpoqaHanSans, Helvetica, Arial, Sans-Serif
$base-background-color: #fcfefa
$base-forground-color: #101112
```

*src/scss/common.scss*

```scss
@import "./config";

body {
  margin: 0;
  font: $base-font-settings;
  background: $base-background-color;
  color: #101112;
}
```

엔트리 파일에서 Sass 파일 임포트

*src/index.js*

```js
import './scss/common.scss';
```

Webpack 개발 서버 실행

```sh
$ npm run dev
```