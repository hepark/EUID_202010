/* html */ `<button type="button" class="button-goToTop">`;

// 코드가 실행되는 시점이 달라요.
// <head></head> 안에서 실행
var goToTopNode = document.querySelector('.button-goToTop');

// function showGoToTopButton() {
//   console.log('3초 뒤에 showGoToTopButton 함수 실행 됨');
//   // goToTopNode에 class 속성 값 'is--active'를 추가한다.
//   // class 속성을 DOM 요소에 추가하는 메서드 .classList.add()
//   goToTopNode.classList.add('is--active');
// }

// 3초 뒤에....
// window.setTimeout(showGoToTopButton, 3000);

/**
 * * 내가 작성할 코드 로직을 한글로 스크립팅 하기
 * * 미션: 사용자가 윈도우 창을 Y축으로 스크롤하면,
 * *      goToTop 버튼이 표시되거나 감춰줘야 한다.
 * * 미션을 위해 필요한 것: [scrolll 이벤트, 이벤트 핸들링]
 * *                   표시/감춤을 처리하기 위한 조건
 * *                  (사용자가 스크롤 한 뷰포트의 Y축 높이 값과 앱 헤더의 높이 값 비교)
 *
 * * 앱 헤더 요소, 페이지 상단 이동 버튼 요소, window 전역 객체
 * * scroll 이벤트 유형(type), 이벤트 유형에 연결될 이벤트 리스너 -> 이벤트 핸들링
 * * 이벤트 리스너(함수) 로직 -> 앱 헤더 높이 값보다 scrollY 값이 커지면 ? goToTop 버튼 표시 : goToTop 버튼 감춤
 */

// * 브라우저 윈도우의 스크롤 Y축 높이 > 앱 헤더의 높이
var appHeaderNode = document.querySelector('.app-header');
var appHeaderHeight = appHeaderNode.clientHeight;
var showGoToTopButton = function () {
  goToTopNode.classList.add('is--active');
};
var hideGoToTopButton = function () {
  goToTopNode.classList.remove('is--active');
};

var handleScroll = function () {
  var viewportYpos = window.scrollY;
  if (viewportYpos > appHeaderHeight) {
    console.log('goToTopButton 활성화');
    showGoToTopButton();
  } else {
    console.log('goToTopButton 비 활성화');
    hideGoToTopButton();
  }
};

// handleScroll();

// window.setTimeout(handleScroll, 2000);

window.addEventListener('scroll', handleScroll);

// 앱 초기화 함수
// function init() {
//   console.log('앱 초기화');

//   // * 미션 1-1. 버튼 요소를 찾아 변수에 참조한다.
//   var goToTopNode = document.querySelector('.button-goToTop');
//   // * 미션 1-2. 요소를 참조한 변수를 Console 패널에 출력해본다. (`null`이 나오면 안된다.)
//   console.log(goToTopNode); // null
// }

// 문서 객체 모델이 준비가 되면, 앱을 초기화(Initialization, init) 하겠다.
// 이벤트 시스템 활용
// </body> 끝나는 위치에서 실행
// document.addEventListener('DOMContentLoaded', init);
