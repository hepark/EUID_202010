
# 4주차 오프라인 학습 가이드

React 프로그래밍 실습을 진행하며, 학습을 마무리합니다.

<br/>

## 영상 강의(4주차) 학습 내용 리마인드

- Styled Components 라이브러리
  - `ES6` 태그 템플릿
  - `props` 적용
  - 스타일 확장
  - 컴포넌트 스타일 래퍼
  - 가상 클래스/요소, 중첩 규칙
  - `attr()` 정적/동적 `props` 할당 
  - `css()` 믹스인 (Mixin)
  - 글로벌 스타일
- React Router 라이브러리
  - Router (Browser | Hash)
  - Route (path, component, render)
  - Switch
  - Link | NavLink
  - Redirect
  - Route 컴포넌트 매개변수, 쿼리 스트링
  - 중첩된 라우팅
  - 보호된 라우팅 (인증)
  - Redux 통합 (HOC)
    - [withRouter()](https://reacttraining.com/react-router/web/api/withRouter)
  - 훅(Hooks) 활용 
    - [useHistory()](https://reactrouter.com/web/api/Hooks/usehistory)
    - [useLocation()](https://reactrouter.com/web/api/Hooks/uselocation)
    - [useParams()](https://reactrouter.com/web/api/Hooks/useparams)
    - [useRouteMatch()](https://reactrouter.com/web/api/Hooks/useroutematch)

<br/>

## 셔플 필터 리스트 커링 (커리 함수)

혜은님의 요청사항에 부합하는 [makeSuffleFilterList.js](./makeSuffleFilterList.js)의 코드 로직에 대해 설명합니다.

- 랜덤 셔플(Shuffle) → 필터링(Filtering)
- 함수 실행 시, 중복되지 않는 아이템 리스트 반환
- 무한 루프(Infinity Loop) - 설정된 리스트를 모두 순환할 경우, 재설정
- 페이지 새로고침 될 때 마다 중복되지 않도록 설정하고자 한다면? [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage) 활용

### 커리 함수

> 컴퓨터 과학에서 커링(Curring) 또는 커리 함수란?  
> **여러 개의 인자을 갖는 함수를 단일 인자를 갖는 함수들의 함수열로 바꾸는 것**을 말합니다.  
> 모지즈 쇤핑클에 의해 도입되었고, 이후 [해스켈 커리](https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8A%A4%EC%BC%88_%EC%BB%A4%EB%A6%AC)에 의해 발전된 방법입니다.

<!-- <br/> -->

<details>
  <summary>커리 함수? 어떻게 활용할까?</summary>
  <!-- <br/> -->
  
  #### 정렬 (Sort)

  배열의 `sort()` 메서드는 배열의 각 원소를 비교하여 순서를 정렬합니다. (정렬 결과는 [안정적(stability)](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#%EC%95%88%EC%A0%95%EC%84%B1)이 아닐 수 있습니다.)

  - 오름차순(Ascending `ASC`) : 작은 수 → 큰 수  `-10, 2, 7, 19, 22`
  - 내림차순(Descending `DSC`) : 큰 수 → 작은 수 `22, 19, 7, 2, -10`

  **배열의 이 메서드는 원본 배열을 변경합니다.** (원본을 보호하고 새로운 배열을 반환하는 메서드: `map()`, `filter()` 등)

  ```js
  var originalArray = [1, 10, 101, 20, -31]

  // 오름차순 정렬
  originalArray.sort(/* 비교 콜백함수 */ function(x, y) {
    // 이 방법은 숫자 원소를 비교할 때 사용합니다. (문자는 x > y ? 1 : x < y ? -1 : 0)
    return x - y
  })

  console.log(originalArray) // [-31, 1, 10, 20, 101]

  // 내림차순 정렬
  originalArray.sort(/* 비교 콜백함수 */ function(x, y) {
    return y - x
  })

  console.log(originalArray) // [101, 20, 10, 1, -31]
  ```

  #### 🎯 원본 배열 보호의 필요성

  그러므로 <u>원본 배열을 참조하는 다른 변수가 있을 경우 문제가 유발</u>될 수도 있고,
  <u>다시 이전 상태로 되돌리기 위한 변수가 필요</u>할 수도 있습니다.
  원본 배열을 보호한 채, 정렬 된 새로운 배열을 사용하려면? 먼저 배열 복사가 필요합니다.

  ```js
  originalArray.slice().sort(function(x, y) {
    return x - y
  })
  ```

  #### 유틸리티 함수 활용

  보다 명시적으로 사용하기 위해 `copySort()` 유틸리티 함수를 만들어 사용할 수 있습니다.

  ```js
  function copySort(array, compareCallback) {
    return array.slice().sort(compareCallback)
  }
  ```

  ```js
  copySort(originalArray, function(x, y) {
    return x - y
  }
  ```

  #### 커리 함수 활용

  커리 함수 방법론에 따라 `커리함수(비교함수)(배열)` 방식으로 함수를 작성하여 실행할 수 있습니다.

  ```js
  currySortArray(function(x, y) { return x - y })(originalArray)
  ```

  JavaScript에서는 커리 함수를 구현하기 위해 클로저 패턴을 사용합니다.

  ```js
  function currySortArray(function(compareCallback) {
    return function(array) {
      var copyArray = array.slice()
      return copyArray.sort(compareCallback)
    }
  })
  ```

  결과적으로 `커리함수()()`는 먼저 실행 `()` 된 함수가 함수를 결과 값으로 반환하므로, 연결지어 실행 `()` 할 수 있습니다.
  작성된 커리 함수를 사용해 오름차순, 내림차순 유틸리티 함수를 만들어 사용할 수도 있습니다.

  ```js
  // 커리 함수의 첫번째 실행은 함수 값을 반환 (비교 함수 전달)
  var ascSortArray = currySortArray(function(x, y) { return  x - y})
  var descSortArray = currySortArray(function(x, y) { return  y - x})

  // 오름차순 정렬 (새로운 배열 반환)
  ascSortArray(originalArray)

  // 내림차순 정렬 (새로운 배열 반환)
  descSortArray(originalArray)
  ```

  #### ES5 vs ES6

  커리 함수를 활용한 유틸리티를 작성하는 JavaScript 버전 별 방법을 비교해봅니다.

  **ES5**

  ```js
  function currySortArray(function(compareCallback) {
    return function(array) {
      return array.slice().sort(compareCallback)
    }
  })

  var ascSortArray = currySort(function(x, y) { return  x - y})
  var descSortArray = currySort(function(x, y) { return  y - x})
  ```

  **ES6**

  ```js
  const currySortArray = (compareCallback) => (array) => [...array].sort(compareCallback)
  const ascSortArray = currySortArray((x, y) => x - y)
  const descSortArray = currySortArray((x, y) => y - x)
  ```

  **유틸리티 활용**

  ```js
  ascSortArray(originalArray) // [-31, 1, 10, 20, 101]
  descSortArray(originalArray) // [101, 20, 10, 1, -31]
  ```

  #### 결론

  커리 함수를 사용하는 이유는 다음과 같습니다. ([참고](https://ko.javascript.info/currying-partials))

  - **함수의 재사용성을 높일 수 있음**
  - 커리 함수의 첫번째 인자 : **설정(옵션)** 등
  - 커리 함수의 두번째 인자 : **적용 대상, 값** 등

  ---

  ### ⚛ React 프로그래밍에서의 커리 함수

  현 시대의 Front-End 개발을 리드하는 React 프로그래밍에서도 커리 함수는 빈번하게 사용됩니다.

  ```jsx
  // Redux 스토어(Store)의 상태를 컴포넌트의 props로 매핑(mapping)하는 설정
  const mapStateToProps = state => ({ message: state.message })

  // Message 컴포넌트
  const Message = (props) => (
    <div className="Message__Body">
      <p>{props.message}</p>
    </div>
  )

  // React Router 고차 컴포넌트 활용 예
  // 고차 컴포넌트(HOC, Higher-Order Component) = 커리 함수
  // 커리함수(설정)(컴포넌트)
  export default connect(mapStateToProps)(Message)
  ```

  ---

</details>

<br/>

## React 디자인 패턴

- 컴파운드(Compound) 컴포넌트 패턴
- `render props` 패턴
- CSS in JS 방법론 활용

```sh
src/
  # 엔트리 -------------------
  index.js
  # 앱 ----------------------
  App.js
  GlobalStyle.js
  # 부품 --------------------
  components/ 
    FeatureSection/
      index.js
      styles.js
    index.js # re-exporting
  # 조립 --------------------
  containers/
    FeatureSections.js
    index.js # re-exporting
  # 페이지 -------------------
  pages/
    Home.js
    index.js # re-exporting
```

<br/>

## Styled Components `css-in-js`

Styled Components 라이브러리를 사용한 CSS in JS 방법론

### ␥ 글로벌 스타일링 `css-in-js` 

**src/GlobalStyle.js**

```jsx
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { font-size: 10px; }
  body { font: 1.6rem/1.5 SpoqaHanSans, "Helvetica Neue", Verdana, Arial, Sans-Serif; }
`
```

**src/index.js**

```jsx
import { GlobalStyle } from 'GlobalStyle'

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App/>
  </>,
  document.getElementById('root')
)
```

> **NOTE.** 🐧  
> [글로벌 스타일 보다 스타일 컴포넌트의 스타일이 우선권(Cascading)을 가지지 못하는 경우](https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity)

<br/>

### ␥ 컴포너트 스타일링 `css-in-js` 

**src/components/{ComponentName}/styles.js**

> NOTE. 🐧  
> [Styled Components with Babel Macro](https://styled-components.com/docs/api#usage-with-the-babel-macro)

```jsx
import styled from 'styled-components/macro'
import { BREAKPOINTS } from 'constants'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || null};
  flex-wrap: ${({wrap}) => wrap || null};
  justify-content: ${({jsutifyContent}) => jsutifyContent || null};
  align-items: ${({alignItems}) => alignItems || null};
  align-content: ${({alignContent}) => alignContent || null};
`

export const Container = styled.div`
  @media (max-width: ${BREAKPOINTS.desktop}) {
    ${FlexContainer} h2 {
      margin-bottom: 5rem;
    }
  }
`
```

```jsx
import { FlexContainer } from './styles'

export default function({children, ...props}) => (
  <FlexContainer {...props}>
    {children}
  </FlexContainer>
)
```

<br/>

## React Helmet

- [React Helmet](https://github.com/nfl/react-helmet#example) 라이브러리 설치
- 페이지 별 제목, 설명, 메타 태그 등을 변경
- 접근성(Accessibility), 검색엔진 최적화(SEO)

<br/>

## 빌드

- 빌드 명령: `npm run build` → **build 디렉토리 생성**
- **build/static 디렉토리** 안에 CSS, JS 파일 생성 (캐싱을 위한 고유 해시 파일 이름에 포함)
- 빌드 & 프로파일링 `npm run build -- --profile`
- 성능 최적화를 위해 [재조정](https://ko.reactjs.org/docs/reconciliation.html)을 [피하세요](https://ko.reactjs.org/docs/optimizing-performance.html#avoid-reconciliation) 참고

<br/>

## 배포

빌드된 결과물을 배포하여 웹 호스팅 합니다.

### ␥ SPA (Single Page App)

CRA의 기본 빌드 명령 실행 결과는 싱글 페이지 앱(SPA)입니다.

#### 정적 서버 테스트

배포에 앞서 정상적으로 사이트가 작동하는지 [serve](https://www.npmjs.com/package/serve)를 사용해 테스트 할 수 있습니다.

```sh
# 도움말: serve -h
$ npx serve -s build -l 4000
```

#### GitHub Pages 배포

Create React App은 `homepage` 필드를 사용하여 빌드된 HTML 파일의 루트 URL을 설정합니다.

*package.json*

```json
{
  "homepage" : "https://<사용자_계정>.github.io/<저장소_이름>",
}
```

[gh-pages](https://www.npmjs.com/package/gh-pages) 패키지를 설치합니다.

```sh
$ npm i gh-pages
```

`predeploy`, `deploy` 명령을 추가합니다.

*package.json*

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

`deploy` 명령을 실행합니다.

```sh
$ npm run deploy
```

> 참고: [CRA → Deployment: GitHub Pags](https://create-react-app.dev/docs/deployment#github-pages)

<br/>

### ␥ 프리 렌더링

프리 렌더링(정적 HTML 파일 생성)은 SPA와 달리 JavaScript 번들 다운로드에 실패해도
HTML 파일이 정상적으로 웹 브라우저에 화면에 표시되고, 검색 엔진이 콘텐츠를 수집할 수 있어
검색엔진 최적화(SEO)가 요구되는 경우 유용한 렌더링 방법입니다.

프리 렌더링 방법을 사용하려면 [📸 React Snapshot](https://www.npmjs.com/package/react-snapshot) 패키지를 프로젝트에 설치합니다.

```sh
$ npm i -D react-snapshot
```

*package.json*

`build` 명령을 다음과 같이 변경합니다. (빌드 후, 스냅샷 생성)

```json
{
  "build": "react-scripts build && react-snapshot"
}
```

**src/index.js**

ReactDOM 대신, react-snapshot의 `render` 함수를 사용해 렌더링 설정합니다.

```js
// import { render } from 'react-dom';
import { render } from 'react-snapshot';

render(
  <App/>,
  document.getElementById('root')
);
```

빌드 명령을 수행하면 프리 렌더링 된 결과물을 확인할 수 있습니다.

```sh
$ npm run build
```

#### 옵션 설정

필요한 경우 사용자는 `package.json` 파일에 "reactSnapshot" 섹션을 추가해 옵션을 설정할 수 있습니다.

- `include` : 크롤링 엔트리 경로 설정
- `exclude` : 크롤링 제외 경로 설정 (<abbr title="와일드카드 문자를 사용해서 일정한 패턴을 가진 파일 이름들을 지정하기 위한 패턴">glob 패턴</abbr> 설정 가능)
- `snapshotDelay` : 스냅샷 지연 기본 설정 값은 `50`

*package.json*

```json
{
  "reactSnapshot": {
    "include": [
      "/포함할-경로",
      "/다른-경로/중첩된-경로"
    ],
    "exclude": [
      "/제외할-경로",
      "/다른-경로/exclude-me/**"
    ],
    "snapshotDelay": 300
  }
}
```