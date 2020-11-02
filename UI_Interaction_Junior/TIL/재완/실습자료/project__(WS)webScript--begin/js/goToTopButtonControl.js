// function init() {
//   console.log('앱초기화');
// var goToTopNode = document.querySelector('.button-goToTop');
// //   console.log(goToTopNode);

// function add() {
//   console.log('3초뒤 출력');
//   return goToTopNode.classList.add('is--actiive');
// }

// window.setTimeout(add, 3000);

// } // defer로 해결가능하다 defer는 무시하고 브라우저를 해석한다.

//시간을 제어할수 있는 전역메소드
// setTimeout(특정시간을 한번만 호출), setInterval(여러시간을 반복해서 호출)
// FPS 1000/30 = 30FPS 1000/24 = 24FPS

// init();
// document.addEventListener('DOMContentloaded', init);

//내가 작성할 코드 로직을 한글로 스크립팅
// 미션 : 사용자가 윈도우 창을  Y축으로 스크롤하면,goToTop 버튼이 표시되거나 감춰줘야 한다.
// 필요한것 [scroll 이벤트, 이벤트핸들링]
// 표시/ 감춤을 처리하기 위한 조건
// (사용자가 스크롤 한 뷰포트의 y축 높이값과 앱헤더 높이값의 비교 )

var appHeader = document.querySelector('.app-header');
var appHeaderHeight = appHeader.clientHeight;
var buttonGotoTheTop = document.querySelector('.button-goToTop');
var handleScroll = function () {
  window.scrollY > appHeaderHeight
    ? buttonGotoTheTop.classList.add('is--active')
    : buttonGotoTheTop.classList.remove('is--active');
};
window.addEventListener('scroll', handleScroll);
