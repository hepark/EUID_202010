// -------------------------------------------------------------
// DOM API
// - 문서 객체(Document Objects)를 선택하는 방법
// - 요소노드(ELEMENT_NODE) vs 노드리스트(NodeList) | HTMLCollection
// -------------------------------------------------------------


// tagName 으로 선택하는 방법
// 문서에서 tagName 값이 [    ]인 요소들을 찾아라.
var figures = document.getElementsByTagName('figure')
//console.log(figures);
// TagName으로 사용하면 가져온 값이 몇번째인지 직관적으로 명확히 알 수 없다.

// id 속성 값으로 선택하는 방법
//p kbd 요소 찾기 
var boy = document.getElementById('boy');
console.log(boy);
boy.style.transform = 'perspective(800px) rotateY(56deg)';

var boy  = '야망이 넘치는 소년'
console.log(boy);
//id로만 접근했었던 중복 오류를 해결할 수 있다.

//class 속성 값으로 선택하는 방법

// CSS 선택자(selector)로 선택하는 방법





