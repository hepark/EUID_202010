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
