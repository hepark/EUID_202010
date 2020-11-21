// ES6
// 객체 지향 프로그래밍
class Folder {
  // 생성자_함수
  constructor(name, createdAt) {
    this.name = name
    this.createdAt = createdAt
  }
  // 프로토타입
  isExistFiles() {}
  rename() {}
  delete() {}
  makeAlias() {}
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
