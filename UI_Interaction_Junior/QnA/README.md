[← BACK](../README.md)

# UI Interaction Junior, QnA

질문을 남겨주시면, 최선을 다해 답변하겠습니다. 🐧

## 목차

1. [JIT 컴파일러는 정확히 무엇이고, 인터프리터와 정확한 차이는 무엇일까요?](#q1-질문)
1. [함수형 프로그래밍은 객체지향 보다 어떤 장점이 있을까요?](#q2-질문)
1. [ES6가 가장 안정된 버전이라 현재 사용되고 있는건가요?](#q3-질문)

<br />

---

<br />

## Q1. 질문

JIT 컴파일러는 정확히 무엇을 말하는건가요? 인터프리터와 정확한 차이는 무엇일까요?

<details>
  <summary>A1. 답변</summary>
  <br/>
  컴퓨터 프로그램을 만드는 전통적인 2가지 방법은 인터프리트 방식과 컴파일(정적) 방식이 있습니다.
  이 중 인터프리트 방식은 JavaScript가 동작하는 것처럼 프로그래밍 언어를 브라우저의 JavaScript 엔진이 실시간으로 해석하여
  기계어 코드를 실행합니다. 반면 컴파일(정적) 방식은 JAVA가 동작하는 것처럼 애플리케이션 실행 전에 코드를 기계어로 번역해둔 상태입니다.
  <br/>
  <br/>

  컴퓨터 프로그램 방식 | 설명
  --- | ---
  인터프리트(like 통역) | JavaScript가 작동하는 방식 (실시간 해석이 필요해 느림)
  컴파일(like 번역) | JAVA가 작동하는 방식 (이미 해석된 코드를 실행하므로 인터프리트에 비해 빠름)

  반면 JIT(just-in-time) 컴파일은 **프로그램을 실제 실행하는 시점에 기계어로 번역하는 컴파일 기법** 입니다.
  JIT 컴파일러는 앞서 다룬 인터프리트, 컴파일(정적) 2가지 방식을 혼합한 방식으로 생각할 수 있는데, 실행 시점에서 
  인터프리트 방식으로 기계어 코드를 생성한 후 그 코드를 캐싱합니다. 캐싱하는 이유는 동일한 함수가 여러 번 호출 때 
  매번 기계어 코드를 생성하는 것을 방지하기 위함입니다.

  컴퓨터 프로그램 방식 | 설명
  --- | ---
  JIT 컴파일 | 인터프리트 방식 + 컴파일(정적) 방식 혼한
</details>

<br />

---

<br />

## Q2. 질문

함수형 프로그래밍은 객체지향 보다 어떤 장점이 있을까요? (함수형 프로그래밍이 정확히 뭔지 안와닿네요.)

<details>
  <summary>A2. 답변</summary>
  <br/>
  
  해당 질문은 주니어 레벨의 질문은 아니네요. ^^; 그래도 답변 드립니다.

  함수형 프로그래밍과 객체 지향 프로그래밍 모두 프로그래밍 방식을 말합니다. 
  어떤 방식이 낫다, 아니다의 관점으로 접근하기 보다는 상황에 따라 방식을 선택해 사용할 수 있다고 생각해보세요.
  예를 들어 목적지에 가기 위해 이용 가능한 교통 수단이 어떤 상황에서는 버스일 것이고, 다른 상황에서는 지하철일 수 있으니까요.
  간단하게 동일한 처리를 하는 각 프로그래밍 방식을 비교해보도록 하죠.

  ### 함수형 프로그래밍

  재사용 할 함수를 선언합니다.

  ```js
  // 함수 

  function getNode(selector, context = document) {
    return context.querySelector(selector);
  }

  function css(domNode, prop, value) {
    if (!value) {
      return window.getComputedStyle(domNode).getPropertyValue(prop);
    } else {
      domNode.style[prop] = value;
    }
    return domNode;
  }
  ```

  선언된 함수를 실행해 처리합니다.

  ```js
  const appNode = getNode('.app');
  const appHeaderNode = getNode('.appHeader', appNode);
  css(appHeaderNode, 'margin', '10vw 0');
  css(appHeaderNode, 'padding', '20px');
  ```

  또는 변수 참조 없이 아래와 같이 인라인으로 작성할 수도 있습니다.

  ```js
  css(css(getNode('.appHeader', getNode('.app')), 'margin', '10vw 0'), 'padding', '20px');
  ```

  ### 객체 지향 프로그래밍

  재사용 할 클래스를 선언합니다.

  ```js
  // 클래스

  class DomUtils {
    
    constructor(selector, context) {
      this.domNode = DomUtils.getNode(selector, context);
    }
    
    static getNode(selector, context = document) {
      if (typeof context === 'string') {
        context = DomUtils.getNode(context);
      }
      return context.querySelector(selector);
    }

    css(prop, value) {
      const {domNode} = this;

      if (!value) {
        return window.getComputedStyle(domNode).getPropertyValue(prop);
      } else {
        domNode.style[prop] = value;
      }
      return this;
    }

  }
  ```

  클래스를 사용해 새로운 객체를 생성한 다음 객체의 메서드를 활용해 처리합니다.

  ```js
  var appHeader = new DomUtils('.appHeader', '.app');

  appHeader
    .css('margin', '10vw 0')
    .css('padding', '20px');
  ```
</details>


<br />

---

<br />

## Q3. 질문

ECMA는 2017년도 2018년도 버전이 계속 나왔는데 ES6가 가장 안정된 버전이라 지금 사용되고 있는걸까요? 왜 2020년 버전은 안쓰는것인지 궁금합니다.

<details>
  <summary>A3. 답변</summary>
  <br/>

  JavaScript 즉,  [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)는 웹 표준 스크립트 명칭입니다. 
  1997년 초판 발행 이후, 2015년에 6판이 발행되면서 클래스, 모듈과 같은 새로운 문법이 추가되었습니다. 그 후 매년 새로운 문법이 조금씩 추가되어 발행되고 있습니다.

  - 1997.06 초판
  - 1998.06 2판
  - 1999.06 3판
  - 1999.06 중단
  - 2009.06 5판
  - 2011.06 5.1판
  - 2015.06 6판 (클래스, 모듈 문법 추가)
  - 2016.06 7판
  - 2017.06 8판 (`async`/`await` 추가)
  - 2018.06 9판 
  - 2019.06 10판 
  - 2020.06 11판 

  질문은 "왜 2020년 버전은 안쓰는가?" 인데, 웹 환경의 특성상 새로 등장한 기술을 바로 사용할 수 없습니다.
  다양한 플랫폼, 브라우저 환경에서 새로운 기술을 지원해야만 쓸 수 있기 때문입니다. 그러니 2020년에 등장한 새 기술을 바로 사용하지 못하는 거죠. 안 하는게 아니라.

  그리고 2015년에 등장한 ES6가 안정적이라서 사용되는 것이 아니고, 새 기술을 구형 브라우저에서 해석되도록 구 기술로 변환(컴파일)해주는 도구가 있기 때문에 사용하는 겁니다.
  예를 들어 Babel 또는 TypeScript 를 사용할 경우 ES6-9 기술을 사용해 (ES5) 코드로 변환해 오래된 브라우저에서도 호환될 수 있도록 만들어 주기 때문입니다.
  이런 도구를 사용할 수 없는 환경에서는 ES6를 사용할 수 없습니다.

  ES6, ES7, ES8 등의 새로운 기술이 사용되는 Front-End 개발 환경은 React나 Vue 같은 프레임워크를 사용할 경우입니다. 일반적인 jQuery를 사용하는 개발 환경에서는
  ES6가 사용되지 않습니다. 프레임워크와 달리 직접 모듈 번들러와 컴파일러 개발 환경을 구축해야 하기 때문입니다. 결론은 개발 환경에 따라 새로운 ECMAScript를 사용할 수도 있고
  아닐 수도 있습니다.  
</details>

<br />

---

<br />