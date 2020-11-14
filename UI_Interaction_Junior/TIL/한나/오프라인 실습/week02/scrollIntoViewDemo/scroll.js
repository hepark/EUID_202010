// 뷰 포드 이미지 리스트
var sceneList = document.querySelectorAll(".scrollView__scene");
console.log(sceneList);
// NodeList(3) [
//   div#scene--seoul.scrollView__scene.scrolView__scene--selected,
//   div#scene--christtheRedeemer.scrollView__scene,
//   div#scene--eiffelTower.scrollView__scene
// ]

// 탭 버튼 리스트
var tabList = document.querySelectorAll(".scrollView__controlTab");
// console.log(tabList);
// NodeList(3) [
//   button.scrollView__controlTab.scrollView__controlTab--rounded.scrollView__controlTab--selected,
//   button.scrollView__controlTab.scrollView__controlTab--rounded,
//   button.scrollView__controlTab.scrollView__controlTab--rounded
// ]

var handleClickButton = function (i) {
  return function (e) {
    var sceneList = document.querySelectorAll(".scrollView__scene");
    // console.log(sceneList);
    e.preventDefault();
    sceneList[i].scrollIntoView({ behavior: "smooth" });
  };
};

tabList.forEach(function(index, item)){
  
}

// for (var i = 0; i < tabList.length; i++) {
//   tabList[i].addEventListener("click", handleClickButton(i));
// }
