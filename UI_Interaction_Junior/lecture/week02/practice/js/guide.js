/**
 * * [ 이듬(E.UID) 블렌디드 러닝 ] 2주차 오프라인 학습
 *
 * - 배열 가지고 놀기 (반복 처리 + 배열 메서드)
 * - 참조형 데이터인 배열을 복사해 안전하게 활용하기
 * - 배열(집합) + 이벤트 핸들링
 */

/* -------------------------------------------------------------------------- */
/* 배열 가지고 놀기 (반복 처리 + 배열 메서드) : https://bit.ly/ArrayReference */

// 1. 배열 생성 (글로벌, 푸터 내비게이션 / 음료 메뉴 리스트)
var globalNavigationList = [
  // {id, link, text}
  { id: 'gnav-1', link: '/views/login.html', text: '로그인' },
  { id: 'gnav-2', link: '/views/signup.html', text: '회원가입' },
  { id: 'gnav-3', link: '/views/design.html', text: '이디야 디자인' },
  { id: 'gnav-4', link: '/views/beverage.html', text: '이디야 음료' },
  { id: 'gnav-5', link: '/views/news.html', text: '이디야 뉴스' },
  { id: 'gnav-6', link: '/views/store.html', text: '매장 찾기' },
];

var footerNavigationList = [
  '개인정보처리방침',
  '멤버스 이용약관',
  '가맹 안내',
  '대량쿠폰구매',
  '채용안내',
  '고객의 소리',
  '사이트맵',
  '점주의 방',
];
var beverageMenuList = [
  // 음료 정보 객체
  // 고유 식별자(Identify, ID)
  // 음료 종류(category)
  // 음료 이름(name)
  //      - 한글 이름(korean)
  //      - 영문 이름(english)
  {
    id: 'beverage-1',
    category: '쉐이크',
    name: {
      ko: '초코 묻고 더블',
      en: 'choco shake',
    },
  },
  {
    id: 'beverage-2',
    category: '쉐이크',
    name: {
      ko: '밥대신 라이스',
      en: 'rice shake',
    },
  },
  {
    id: 'beverage-3',
    category: '쉐이크',
    name: {
      ko: '치즈가 쿠키했대',
      en: 'cheese shake',
    },
  },
];

// 2. 특정 배열 아이템을 변수에 할당
var firstLinkItem = globalNavigationList[0]; // ?????

// 3. 배열 아이템 순환하여 Console 패널에 출력
// footerNavigationList를 순환(Loop)하여 각 아이템을 Console에 출력해보세요.
// while, do ~ while, for
for (var z = 0; z < footerNavigationList.length; ++z) {
  var item = footerNavigationList[z];
  // console.log(item);
}

// 4. 새로운 아이템 추가 (앞 또는 뒤 아이템)
// '갑질 근절!', '매니저의 방'
footerNavigationList.unshift('갑질 근절!');
footerNavigationList.push('매니저의 방', '카페 알바의 방');
// console.log(footerNavigationList);

// 5. 아이템 제거 (앞/뒤 또는 특정 순서에 위치한 아이템)
// .pop()
// .shift()
// .splice()

footerNavigationList.shift();
footerNavigationList.splice(footerNavigationList.length - 2, 1);
footerNavigationList.pop();

// 6. 특정 아이템의 순서 추출
// .indexOf()
// .findIndex()
// .lastIndexOf()

// 7. 새로운 아이템을 배열의 특정 순서 위치에 추가
// .splice(startIndex, removeCount, addItems)
// footerNavigationList.splice(2, 3, '한나', '두나', '세나')

// 8. 배열 복사
var cloneFNL = []; // footerNavigationList를 복사할 배열

// 배열1을 순환해서 배열2에 각 아이템을 동일한 인덱스에 복사할 수 있다.
var i = 0;

while (i < footerNavigationList.length) {
  cloneFNL[i] = footerNavigationList[i];
  i++;
}

// 위 방법보다는 slice() 메서드를 사용하는 것이 깔끔!!
cloneFNL = footerNavigationList.slice();

// 9. 배열 아이템에 접근 (첫번째, 특정 순서, 마지막 번째 아이템)
var lastLinkItemOfFooterNavigation =
  footerNavigationList[footerNavigationList.length - 1]; // 배열의 마지막 아이템에 접근하려면?

// 10. 배열 → 문자 → 배열 (메서드 체이닝)

// 문자 -> 배열 -> 문자
var friendsString = '한나 두나 세나';
var friendsArray = friendsString.split(' ');
friendsString = friendsArray.join(' + ');

'한나 두나 세나'.split(' ').join(' + ');

/* -------------------------------------------------------------------------- */
/* 배열(집합) + 이벤트 핸들링 */

// 페이지가 화면에 모두 그려진 후,
// 렌더링을 할꺼에요.

function render() {
  // 내비게이션 링크 수집(접근)
  var globalNavLinks = document.querySelectorAll('.app-navigation a');
  console.log(globalNavLinks);
}

// 문서만 해석이 끝난 시점에 함수를 실행하는 경우 (defer 속성과 유사)
// window.addEventListener('DOMContentLoaded', render);

// 문서의 로드가 끝난 시점에 함수를 실행하는 경우
window.addEventListener('load', render);

// 시간을 사용자가 제어해서 임의로 함수를 실행하는 경우
// window.setTimeout(render, 1000);
