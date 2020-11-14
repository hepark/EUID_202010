# 이듬(E.UID) 블렌디드 러닝

3주차 오프라인(토) 학습을 진행합니다.

<br/>

## 질문/답변

4주차 영상 강의 학습 내용 중 잘 이해가지 않거나, 보충 설명이 필요한 경우 질문하세요.

- IIFE(또는 SEAF)
- JavaScript 클로저(Closure)
- DOM API
- CSSOM API

<br/>

## 기본/응용 학습

- JavaScript 이벤트 루프 & 콜 스택(Callstack)
- 데이터 추출 및 구조화(모델링)
  - UI 디자인 분석
  - JSON 데이터 포매팅(formatting)
- 유틸리티(또는 헬퍼) 함수 작성
  - `makeArray()`: 유사 배열을 변경해 새로운 배열 반환
  - `shuffle()` : 배열 아이템을 뒤섞어 새로운 배열 반환
  - `insertStyleRules()` : 동적으로 스타일 규칙 추가

### 데이터 추출 및 구조화 참고

- [JSON 이란?](https://www.json.org/json-ko.html)
- [JavaScript와 JSON의 차이](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [댓글(Comment) json](https://jsonplaceholder.typicode.com/comments?postId=3)
- [VS Code 에디터의 settings.json](https://code.visualstudio.com/docs/getstarted/settings#_default-settings)

### 유틸리티 함수 작성 참고

- [JavaScript 클로저(Closure) 활용](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
- [`.createElement()` DOM API 사용 방법](https://developer.mozilla.org/ko/docs/Web/API/Node/createElement)
- [`.appendChild()` DOM API 사용 방법](https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild)
- [문서와 스타일시트를 연결하는 방법: &lt;style&gt; 요소의 `.sheet` 속성](https://developer.mozilla.org/ko/docs/Web/API/CSSStyleSheet#Notes)
- [객체의 속성만 뽑아내 배열로 만드는 방법: `Object.keys()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 만드는 방법: `.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [배열을 문자로 만드는 방법: `.join()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [동적으로 스타일 규칙을 추가하는 방법: `.insertRule()`](https://developer.mozilla.org/ko/docs/Web/API/CSSStyleSheet/insertRule)
- [스타일시트를 구성하는 모든 CSS 규칙의 실시간 리스트에 접근하는 방법: `.cssRules`](https://developer.mozilla.org/ko/docs/Web/API/CSSStyleSheet/cssRules)
- [메서드 빌려쓰는 방법: `.call()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [셔플(Shuffle) 함수 그리고 알고리즘](https://ko.javascript.info/task/shuffle)

---

> **알고리즘?** 🐧  
> 알고리즘(Algorythem)은 아라비아 수학자 [알콰리즈미](https://ko.wikipedia.org/wiki/%EC%BD%B0%EB%A6%AC%EC%A6%88%EB%AF%B8)의 이름에서 유래되었습니다.
> 알콰리즈미가 집대성한 연산 기술의 이름에서 "알고리즘"이라는 단어가 탄생한 것이죠. 즉, 알고리즘은 "<strong>연산(정해진 규칙에 따라 계산하여 답을 구함) 규칙</strong>"을 말합니다.
> 예를 들어 [어떤 수(x)를 구하기 위한 연산 규칙을 천칭을 이용해 풀어낸 알콰리즈미](https://www.ebsmath.co.kr/resource/rscView?cate=10095&cate2=10106&cate3=10129&rscTpDscd=RTP10&grdCd=MGRD01&sno=21001&type=S&historyYn=study) 사례를 들 수 있습니다. ([알콰리즈미의 1차 방정식](https://www.ebsmath.co.kr/resource/rscView?cate=10095&cate2=10106&cate3=10130&rscTpDscd=RTP14&grdCd=MGRD01&sno=22124&type=S&historyYn=study))  
>  
> ![](./_/al-Khwarizmi.png)

---

<br/>

## 실전 예제

배운 방법을 활용해 프로토타입을 만들거나, 실전 프로젝트에 응용하는 과정을 실습합니다. 🐧

### 1. 랜드마크(Landmark) 미션

지난 주 미션으로 제공되어 생각해볼 시간을 충분히 제공했으니 <u>바로 실습을 이어 갑니다.</u>

- 섹션 간, 스크롤 이동(`scrollIntoView`)
- 활성 섹션에 따른 인디케이터 표시 업데이트


### 2. [왓챠(WATCHA)](https://watcha.com) 홈페이지

다뤄야 할 내용이 많아 미션 없이 바로 코드 작성 과정을 진행합니다.  
작성하는 <strong>코드를 모두 이해하려 하기 보다는 <u>코드를 작성하는 흐름을 관찰하고 이해하는데 집중</u></strong>하세요.

- 데이터 셔플 및 필터링 (월페이퍼 섞어, 일부만 골라내는 방법)
- 월페이퍼 스타일 설정 (`::가상 클래스`에 스타일을 적용하는 방법)
- 섹션 간 스크롤 이동(`scrollIntoView`)
- 스크롤 이벤트 핸들링 (이벤트 속성 ← 이벤트 리스너 연결)
  - 스크롤 방향 감지 (`↑` 또는 `↓` 방향)
    - 헤더 표시 / 감춤 (`↑`: 표시 / `↓`: 감춤)
  - 스크롤 위치 감지 (섹션 활성 영역의 조건 처리)
    - 섹션 영역 활성화
      - 인디케이터 표시 업데이트
      - 스크롤 이동 실행
    - 일정 시간 이후, 자동으로 섹션 이동
      - 타임 컨트롤 : 타임아웃 / 클리어 타임아웃