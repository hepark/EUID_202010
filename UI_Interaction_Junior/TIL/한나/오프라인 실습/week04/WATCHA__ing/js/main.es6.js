/* -------------------------------------------------------------------------- */
// 실습 1. 월페이퍼 리스트 만들기

// folding, collapsing -> 접는다
// var, let, const를 사용할 경우를 구분해야 한다.
// let : 값이 변경이 가능하다 / const :
var wallpapers = [
  'v1598872050/ixylk0psxr8zjasxqce6',
  'v1598871763/p8gblpumiwypzg1yzrnx',
  'v1599214078/yz7ovukznj2qqlau1vmp',
  'v1598871708/tgqu1cbnjmkoah2mnmkb',
  'v1598871678/tdedx3m1riyandczb8j5',
  'v1598871674/x8t4ye47c7gzanwdwgrv',
  'v1598871759/hz6kswq4f5wzioux3tyf',
  'v1598871647/cdljrxuxce5usqkz10zg',
  'v1598871911/oiea6ibwgtjvribxsrfr',
  'v1598871981/ikuzi8gjmcre1yimccr0',
  'v1598871916/xuoywo76biw3zxpiimcm',
  'v1598871741/hvdbxowg6yqjhvtkdtl3',
  'v1598871732/f2k4xrsjwytwuaqhuhls',
  'v1600078664/vjc3uabufnijpbpyn9ib',
  'v1601293397/ginhyqun9ku7so3begbs',
  'v1603872867/aaaadxhssdqrpvnebmjp',
  'v1598871780/kre1o4asdmo4jpa5tnfj',
  'v1598871803/jtwr2mypjgdsccxgbn2r',
  'v1598871820/z2xowvbdbohb1wqh27g4',
  'v1598871763/p8gblpumiwypzg1yzrnx',
  'v1598871736/oyv81viqlrh05si2racx',
  'v1598871704/tgbircgpt6nj70vj7row',
  'v1598871884/x2sravrbbjtxhriqj7lm',
  'v1598872028/j0wdpxdlce3r5tvuyuhf',
  'v1598871746/dzfdd9i1gpts69cgnwnz',
  'v1598871687/p7pyhekzmgb3sscwj8y7',
  'v1598872039/pnhda368bammgzxqd79x',
  'v1598871816/rcvsdpkdfy3ag0ve6zew',
  'v1601293376/s9eqagr1ibpy78cnhzf8',
  'v1598871838/qtuxer7m0mma1k9dykgf',
  'v1598871944/vhwqvkxuws65y1ktflxy',
  'v1604920644/ikfaibutr1ija8tttcle',
  'v1603708966/cmiozflbxxrh1jiekdrv',
  'v1598871718/evzrvkday70p28whsyeg',
  'v1598871722/h7wz9zlsrnx6uk4ccr6d',
  'v1598871713/y2imdocqg0qlo2xlo8c7',
  'v1598871656/r4bpqotyaz98ckgvgepx',
  'v1598871692/cxhwmadpo4o9yeiribge',
  'v1598872002/lbh8tismjjhto8fhmixx',
  'v1598871772/buymmshxvklvpxdnw968',
  'v1598872045/yejizhji2kl6v6vq7im5',
].map(function (path) {
  return 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/' + path
})

// wallpapers = wallpapers.map((path) => {
//   return 'https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/' + path
// })
// wallpapers = wallpapers.map(
//   (path) => `https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/${path}`
// )

// 구성(configuer)
const DISPLAY_WALLPAPER_CONST = 5

// 41장을 섞어서 결과를 반환
// 이 경우 const를 사용하는 이유 : 아래의 구분 이후에 wallpaperList를 사용하지 않기 때문이다.
var wallpaperList = shuffle(wallpapers)
  // 5장만 골라내서 새로운 배열 반환
  .filter((wallpaper, index) => index < DISPLAY_WALLPAPER_CONST)

// 현재 홈페이지에 사용할 월페이퍼 리스트(집합)
// console.log(wallpaperList)

// 구성 설정 함수
const NODE_CLASSNAMES = {
  section: 'featureSection',
}

// 객체 구조 분해 할당
const { section } = NODE_CLASSNAMES

// console.log(section)

// 배열 구조 분해 할당
// var members = ['한나', '야무', '두나']

// var hanna = members[0]
// var duna = members[2]

// const [hanna, , duna] = members

/* -------------------------------------------------------------------------- */
// .featureSection 노드 리스트 수집
const featureSections = document.querySelectorAll(`.${section}`)

// 노드 리스트 → 배열 화
const featureSectionArray = makeArray(featureSections)

featureSectionArray.forEach((section, index) => {
  var selector = `.featureSection:nth-of-type(${index + 1})::before`
  insertStyleRules(selector, {
    'background-image': `url(${wallpaperList[index]})`,
  })

  // 잊지말고 대문자로 쓰기!!!
  const SETTIMEOUT_VALUE = 1000

  window.setTimeout(() => {
    insertStyleRules(selector, { opacity: 1 })
  }, SETTIMEOUT_VALUE)
})

/* -------------------------------------------------------------------------- */

// 고르답 버튼 찾기
var goToSectionButtonList = document.querySelectorAll('.button--goToSection')

// 버튼 배열화 하기
var makeArray = function (arrayLikeObject) {
  return [].slice.call(arrayLikeObject)
}

var goToSectionButtonArr = makeArray(goToSectionButtonList)
// console.log(goToSectionButtonArr)

// 고르탑 버튼 이벤트 함수 만들기
// function handleGoToSection(index) {
//   return function () {
//     const nextIndex = index + 1
//     nextIndex = nextIndex === index.length?
//     featureSectionArray[nextIndex].scrollIntoView()
//   }
// }

// 버튼 집합을 순환하기
// goToSectionButtonArr.forEach(function (item, index) {
//   item.addEventListener('click', handleGoToSection(index))
// })

// 버튼 집합을 순환하기(for문)
// for (let i = 0; i < buttonList.length; i++) {
//   const button = buttonList[i];
//   button.addEventListener('click', handleClick)
// }

/* -------------------------------------------------------------------------- */

// 인디케이터 버튼

var navigationButton = document.querySelectorAll('.appNavigation__button')

var navigationButtonArr = makeArray(navigationButton)

var featureSectionArr = makeArray(featureSections)

// ------------------- 클로저

function handleClickNavButton(index) {
  return function () {
    featureSectionArr[index].scrollIntoView({ behavior: 'smooth' })
  }
}

navigationButtonArr.forEach(function (button, index) {
  button.addEventListener('click', handleClickNavButton(index))
})

// ------------------- bind()

// function handleClickNavButton(index) {
//   console.log(this)
//   this[index].scrollIntoView({ behavior: 'smooth' })
// }

// navigationButtonArr.forEach(function (button, index) {
//   button.addEventListener(
//     'click',
//     handleClickNavButton.bind(featureSectionArr, index)
//   )
// })

// ------------------- 클로저(ES6)

function handleClickNavButton(index) {
  return () => {
    featureSectionArr[index].scrollIntoView({ behavior: 'smooth' })
  }
}

navigationButtonArr.forEach((button, index) => {
  button.addEventListener('click', handleClickNavButton(index))
})

// ------------------- bind() (ES6)

function handleClickNavButton(index) {
  console.log(this)
  this[index].scrollIntoView({ behavior: 'smooth' })
}

navigationButtonArr.forEach((button, index) => {
  button.addEventListener(
    'click',
    handleClickNavButton.bind(featureSectionArr, index)
  )
})
