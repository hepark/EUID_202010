// 질문
// while, for 문의 작동 흐름을 시각적으로 확인하고 싶어요.
// 중단점(breakpoint)을 사용해 코드의 실행 흐름을 확인
// 웹 환경 X, Node.js 환경에서 테스트

var i = 0;

while (i < 10) {
  console.log(i);
  ++i;
}

var j = 0;

for (; i < 10; ++j) {
  console.log(j);
}
