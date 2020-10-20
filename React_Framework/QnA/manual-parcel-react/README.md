###### 매뉴얼 방식으로 React 시작하기

# Parcel 모듈 번들러 튜토리얼

매뉴얼 방식으로 직접 React를 시작하는 프로젝트를 구성하고자 한다면 다음 튜토리얼을 참고하여 하나 하나 구성해보세요.

1. [React 프로젝트 구성](#1-react-프로젝트-구성)
1. [Parcel 모듈 번들러 설치](#2-parcel-모듈-번들러-설치)
1. [React, ReactDOM 패키지 설치](#3-react-reactdom-패키지-설치)
1. [package.json 구성](#4-packagejson-구성)
1. [브라우저 호환성 구성](#5-브라우저-호환성-구성)
1. [엔트리 파일 구성](#6-엔트리-파일-구성)
1. [개발 서버 구동](#7-개발-서버-구동)
1. [Sass 설정](#8-sass-설정)
1. [React 앱 개발 시 참고사항](#9-react-앱-개발-시-참고사항)

<br/>

## 1. React 프로젝트 구성

```sh
$ mkdir <프로젝트_이름> && cd $_
$ mkdir src
$ code .
```

<br/>

## 2. Parcel 모듈 번들러 설치

```sh
$ npm init -y # package.json 생성
$ npm i -D parcel@next # Parcel v2 설치
```

<br/>

## 3. React, ReactDOM 패키지 설치

```sh
$ npm i react react-dom
```

<br/>

## 4. package.json 구성

[Parcel → Generic Webapp](https://v2.parceljs.org/getting-started/webapp/) 참고

> **NOTE.**<br/>
> Parcel 모듈 번들러가 다른 도구와 다른 점은 항상 JavaScript 파일이 엔트리 파일이 아니라는 점입니다.<br/>
> HTML, CSS, SCSS 등 다양한 파일을 엔트리 파일로 설정해 번들링 할 수 있습니다.

```json
{
  "name": "manual-parcel-react",
  "version": "1.0.0",
  "description": "Parcel 모듈 번들러로 React 시작하기",
  "scripts": {
    "start": "parcel serve ./src/index.html",
    "build": "parcel build ./src/index.html"
  },
  "keywords": [
    "React",
    "Parcel"
  ],
  "author": "이듬 <yamoo9@euid.dev>",
  "devDependencies": {
    "parcel": "^2.0.0-nightly.426"
  },
  "dependencies": {
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  }
}
```

<br/>

## 5. 브라우저 호환성 구성

[browserslist](https://browserl.ist/) 설정 지원 목록 출력

```sh
$ npx browserslist "last 2 versions, > 0.25% in KR, ie 11, not OperaMini all"
```

*.browserslistrc*

```js
last 2 versions
> 0.25% in KR
ie 11 // IE 11 지원 안할 경우: not ie 11
dead // IE 10, IE_Mob 11, BlackBerry 10, BlackBerry 7, Samsung 4 and OperaMobile 12.1
not OperaMini all // Opera Mini 지원 제외
```

## 6. 엔트리 파일 구성

*src/index.html*

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React 시작하기</title>
    <link rel="stylesheet" href="./css/common.css" />
  </head>
  <body>
    
    <div id="react"></div>

    <!--
    [[ 구형/신형 모드를 구분하여 번들링을 수행: Differential Serving ]]
    -->

    <!-- .browserslistrc에 설정 된 브라우저를 대상으로 번들 참조를 가져 옴. (번들 크기 큼, 구형 브라우저 대응) -->
    <script nomodule src="./js/index.js"></script>
    <!-- ES Module 번들에 대한 참조를 가져 옴. (번들 크기 감소, 최신 브라우저 대응) -->
    <script type="module" src="./js/index.js"></script>

  </body>
</html>
```

*src/css/common.css*

```css
body {
  margin: 0;
  font: 1rem/1.5 SpoqaHanSans, Helvetica, Arial, Sans-Serif;
  background: #fcfefa;
  color: #101112;
}
```

*src/js/index.js*

```js
import React from 'react';
import { render } from 'react-dom';

const App = (props) => (
  <div className="app">
    <h1 className="app__title">React 앱 개발 시작하기!</h1>
  </div>
);

const reactNode = document.querySelector('#react');

render(<App/>, reactNode);
```

<br/>

## 7. 개발 서버 구동

```sh
$ npm start
```

```sh
> parcel serve ./src/index.html

ℹ️ Server running at http://localhost:1234
```

개발 서버가 구동되면 `dist` 디렉토리가 생성되고 다음의 아웃풋 파일이 포함됩니다.

```sh
dist/
├── index.d298b871.js
├── index.d298b871.js.map
└── index.html
```

<br/>

## 8. Sass 설정

의존 개발 패키지 설치

```sh
$ npm i -D sass
```

Sass 스타일링

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
  color: $base-forground-color;
}
```

엔트리 파일에 SCSS 파일 연결

*src/index.html*

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React 시작하기</title>
  <!-- <link rel="stylesheet" href="./css/common.css" /> -->
  <link rel="stylesheet" href="./scss/common.scss" />
</head>
```

<br/>

## 9. React 앱 개발 시 참고사항

Webpack 모듈 번들러와 달리, Parcel의 엔트리는 HTML 파일을 사용합니다.

### <abbr title="Hot Module Replacement">HMR</abbr>

Parcel은 문제가 있는 [react-hot-loader](https://github.com/gaearon/react-hot-loader)를 대신하여 [React Fast Refresh](https://reactnative.dev/docs/fast-refresh)를 사용합니다. React Fast Refresh는 빠른 작업을 가능하게 하며 새로고침 되어도 상태를 유지합니다. (심지어 오류가 발생해도 말이죠.)

### 일부 제한 사항

- 업데이트가 감지되어 새로고침 되었을 때 클래스 컴포넌트의 상태를 유지하지 못합니다.
- 함수 식을 기본 내보내기로 선언할 경우 정상 작동하지 않습니다. `export default () => { ... }`
- 컴포넌트가 아닌, 다른 값을 내보내기 할 경우 상태가 초기화 됩니다.
  ```js
  import React, { useState } from "react";

  const Component = () => {
    const [value] = useState(Date.now());

    return <h1>Hello! {value}</h1>;
  };

  export default Component;

  // 다른 내보내기
  export function utility() {
    return Date.now();
  }
  ```
- `ReactDOM.render()` 메서드가 호출하는 에셋(assets)을 수정하면 모든 상태가 초기화 됩니다.
  ```js
  import React from "react";
  import ReactDOM from "react-dom";

  // App 컴포넌트가 수정되면 ReactDOM.render()가 다시 호출 됩니다.
  const App = () => <h1>헬로! React</h1>;

  ReactDOM.render(<App />, document.querySelector('#react'));
  ```