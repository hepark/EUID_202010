[← BACK](../README.md)

# TIL(Today I Learned, 오늘 내가 배운 것들)

### [onGoing] 방앗간
볼 때마다 새로운(?) 웹 기초 지식을 매일 조금씩 쌓아두는 방앗간🦥 

- Git cli command 모음 👉 [Git](./git.md)
- Modern JS 문법 👉 [ModernJS](./modernJS.md)

git으로 작성하는 개발일지 템플릿(Last updated on 2020-11-06)🦥

<details start>
<summary>미리보기😉</summary>

![git으로 작성하는 개발일지 템플릿](./assets/template.gif "git으로 작성하는 개발일지 템플릿")

- 한 눈에 목차가 보인다. 
    - 토글 적극 활용!😉 토글을 열기 전에는 목차가 한눈에 보이고, 토글을 열고 나면 세부 내용을 볼 수 있게 했다. 
- 큰 주제가 넘어갈 때마다 `divider`를 넣어 명료하게 표시하였다. 
- 내용의 성격을 구분하기 위해 이모지를 적극 활용하였다.
    - 질문은 ❓ 답변은 🤖 이해가 덜 된 개념은 🤯 귤 팁은 🍊     
</details> 

### [WEEK 01] Front-End 프레임워크 소개 및 React 사용법, 그리고 ECMAScript 2015(이하 ES6)

- Front-End 개발 학습 가이드 👉[DAY 01](./D01.md)
- React 소개 및 맛보기! 👉[DAY 02](./D02.md)
- VS Code 개발 도구 확장 👉[DAY 03](./D03.md)
- Virtual DOM / React 요소와 JSX 👉[DAY 04](./D04.md)
- JSX 활용 👉[DAY 05](./D05.md)
- ES6

---

### [WEEK 02] React 컴포넌트, 이벤트 처리, 컴포넌트 통신, 접근성

- React 함수형, 클래스형 컴포넌트 👉[DAY 06](./D06.md)
- React 컴포넌트 전달 속성 / 상태 👉[DAY 06](./D06.md)
- React 컴포넌트 라이프 사이클 훅 👉[DAY 07](./D07.md)
- React 이벤트 핸들링 👉[DAY 08](./D08.md)
- React 컴포넌트 통신 👉[DAY 08](./D08.md)
- React Context API 👉[DAY 09](./D09.md)
- React 접근성(A11Y) 👉[DAY 10](./D10.md)

---

### [WEEK 03] React 미니 프로젝트 실습, 고차 컴포넌트, React 폼 컨트롤

<details start>
<summary>Mini Project</summary>

👇[DAY 11](./D11.md)
- 프로젝트 시작하기 
- 문서 헤드 구성 
- 디렉토리 구성 
- 컴포넌트 구성 Part 1
    - 컴포넌트 등록 AppHeader, AppMain, GoToTop 
    - JSX 코드 정리 AppHeader, AppMain, GoToTop 
- 컴포넌트 구성 Part 2
    - 컴포넌트 추가 등록 AppHomeLink, AppNavigation, BeverageList, BeverageItem
    - 컴포넌트 스타일 검토 

---

👇[DAY 12](./D12.md)
- 컴포넌트 `props` 디자인
    - 컴포넌트 `props` 설계 `AppHomeLink`
    - 컴포넌트 `props` 설계 (`classnames` 라이브러리, `as` 속성 등)
- 컴포넌트 이벤트 핸들링 & 타임 컨트롤
- 리스트 렌더링 & 컨텍스트 Part 1

---

👇[DAY 13](./D13.md)
- 컴포넌트 접근성 개선
    - 키보드 접근성 설정 `ref`, `forwardRef`, `shouldComponentUpdate`
    - 컴포넌트 참조 전달(`forwardRef`)과 개발 도구에서 이름 표시 설정
- 리스트 렌더링 & 컨텍스트 Part 2
    - 컴포넌트 리스트 렌더링 + Context API `BeverageList`
    - 다이얼로그 인터랙션 `BeverageItem`
- 페이지 상단 스크롤 이동
    - 페이지 상단 이동 인터랙션 `GoToTop`
    - React 훅 활용 `useState`, `useEffect`

</details>
    
- 고차 컴포넌트 (HOC, Higher-Order Component) 👉[DAY 14](./D14.md)
- React 폼 컨트롤 👉[DAY 15](./D15.md)