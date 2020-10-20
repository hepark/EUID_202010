[← BACK](../README.md)

# React Framework, QnA

질문을 남겨주시면, 최선을 다해 답변하겠습니다. 🐧

## 목차

1. [모듈 번들러의 배경지식은 어느정도 가지고 있어야될까요?](#q1-질문)

<br />

---

<br />

## Q1. 질문

모듈 번들러의 배경지식은 어느정도 가지고 있어야될까요?
React의 경우 Webpack을 기본 모듈러로 쓰고 있는걸로 알고 있는데... 어느정도의 배경지식이 있어야 학습이 원활한지 알고싶습니다.

<details open>
  <summary>A1. 답변</summary>
  <br/>

  React 앱을 시작하는 방법에 따라 모듈 번들러에 대한 사전 지식 수준이 다릅니다. 

  ### 매뉴얼 구성

  매뉴얼 방식으로 [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), [Babel Plugins](https://babeljs.io/docs/en/plugins), [React](https://www.npmjs.com/package/react), [ReactDOM](https://www.npmjs.com/package/react-dom)을 구성하고 나아가 [Sass](https://www.npmjs.com/package/sass), [PostCSS](https://postcss.org/) [Autoprefixer](https://www.npmjs.com/package/autoprefixer), [이미지(JPG, PNG, SVG 등) 최적화](https://www.npmjs.com/package/imagemin-webpack-plugin) 등 다양한 기능을 직접 추가하고자 할 경우 Webpack 모듈 번들러 사용 방법에 능숙해야 합니다. 다른 모듈 번들러([Parcel](https://v2.parceljs.org/), [Rollup](https://rollupjs.org/guide/en/), [Snowpack](https://www.snowpack.dev/) 등)를 사용해도 마찬가지입니다. 매뉴얼 방식으로 구성할 경우 각 모듈 번들러 사용법에 능숙해야 합니다.

  ### 바로 시작하기

  반면 직접 구성하는 방법을 몰라도 바로 개발을 시작할 수 있도록 고안된 [CRA(Create React App)](https://create-react-app.dev/)과 같은 도구를 사용한다면 모듈 번들러 사용 능력이 부족해도 React를 학습하는데 큰 무리가 없습니다. 말 그대로 바로 시작할 수 있기 때문에 매뉴얼 방식에 비해 간편합니다. 아래 명령어 한 줄이면 설치 후 바로 시작할 수 있죠. 우리 수업에서는 CRA 도구를 사용하니 모듈 번들러에 대한 깊은 이해를 요구하지는 않습니다. :-)

  ```sh
  $ npx create-react-app <프로젝트_이름>
  ```

  물론 기본 설정된 Settings 외에 원하는 개발 모듈을 추가하고 확장하려면 모듈 번들러를 능숙하게 사용할 수 있어야 합니다. 각 모듈 번들러는 사용 방법이 다르기 때문에
  사용할 모듈 번들러 공식 문서를 참고해 구성해야 합니다.

  ### 매뉴얼 방식으로 React 시작하기

  - [Webpack 모듈 번들러 튜토리얼](./manual-webpack-react/README.md)
  - [Parcel 모듈 번들러 튜토리얼](./manual-parcel-react/README.md)

</details>

<br />

---

<br />