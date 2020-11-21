// ES5

// 생성자_함수 (첫글자 대문자) [함수]
function Folder(name, createdAt) {
  this.name = name
  this.createdAt = createdAt
}

// 생성자_함수.prototype [객체]
Folder.prototype = {
  constructor: Folder,
  isExistFiles: function () {
    // 내부를 순환해서 파일이 있나? 확인
    return true // false
  },
  rename: function () {},
  delete: function () {},
  makeAlias: function () {},
}

// 생성자_함수를 통해 새로운 객체 생성
var photoFolder = new Folder('photo', new Date('2020-11-21'))

photoFolder.isExistFiles()
photoFolder.delete()
photoFolder.rename()
photoFolder.makeAlias()

// 폴더의 능력
// isExistFiles() // => 파일 소유 여부 반환
// rename() // => 파일 이름 변경하기
// makeAlias() // 가상본 만들기
// remove() // 지우기
