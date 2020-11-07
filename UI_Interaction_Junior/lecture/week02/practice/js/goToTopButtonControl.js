/**
 * * 지난 주 학습 내용 리마인드 후, 이어서 실습 진행
 *
 * 1) .button-goToTop 버튼 요소 찾기
 * 2) 스크롤 이벤트 감지에 따라 버튼 표시/감춤 처리
 * 3) 버튼 요소 클릭 이벤트 핸들링 (페이지 상단으로 이동)
 */

var appHeaderNode = document.querySelector('.app-header-container');
var targetYpos = appHeaderNode.clientHeight;
var goToTopNode = document.querySelector('.button-goToTop');
var showGotoTop = function () {
  goToTopNode.classList.add('is--active');
};
var hideGotoTop = function () {
  goToTopNode.classList.remove('is--active');
};

var handleScrollView = function (e) {
  if (this.scrollY > targetYpos) {
    showGotoTop();
  } else {
    hideGotoTop();
  }
};
var handleClickGoToTop = function () {
  // window.scrollTo(0, 0); // x, y
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // }); // scrollOptions

  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};

window.addEventListener('scroll', handleScrollView);

goToTopNode.addEventListener('click', handleClickGoToTop);
