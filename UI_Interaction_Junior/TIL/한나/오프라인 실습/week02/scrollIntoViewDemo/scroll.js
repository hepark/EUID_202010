// 뷰 포드 이미지 리스트
var sceneList = document.querySelectorAll(".scrollView__scene");
// console.log(sceneList);

// 탭 버튼 리스트
var tabList = document.querySelectorAll(".scrollView__controlTab");
// console.log(tabList);

var handleClickButton = function (i) {
  return function (e) {
    var sceneList = document.querySelectorAll(".scrollView__scene");
    // console.log(sceneList);
    e.preventDefault();
    sceneList[i].scrollIntoView({ behavior: "smooth" });
  };
};

// console.log(Array.from(tabList));

// Array.from(tabList).forEach(function (item, index, tabList) {
//   console.log(item);
// });

for (var i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener("click", handleClickButton(i));
}
