var scene_list = document.querySelectorAll(".scrollView__scene"); // 이미지3개
var tab_list = document.querySelectorAll(".scrollView__controlTab"); // 조작할 버튼 3개

// 매서드 빌려쓰기 패턴을 활용해서 코드 리펙토링
var handle = function (index) {
  return function (e) {
    e.preventDefault();
    scene_list[index].scrollIntoView();
  };
};

Array.from(tab_list).forEach(function (item, index) {
  //인터넷 익스플로러에서 작동안됨.
  item.addEventListener("click", handle(index));
});
