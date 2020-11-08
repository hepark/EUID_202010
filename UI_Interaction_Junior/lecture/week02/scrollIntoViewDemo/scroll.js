var img_list = document.querySelectorAll(".scrollView__scene"); // 이미지3개
var el_list = document.querySelectorAll(".scrollView__controlTab"); // 조작할 버튼 3개

el_list.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(index, item);
    switch (index) {
      case 0:
        img_list[0].scrollIntoView();
        break;
      case 1:
        img_list[1].scrollIntoView();
        break;
      case 2:
        img_list[2].scrollIntoView();
        break;
    }
  });
});
