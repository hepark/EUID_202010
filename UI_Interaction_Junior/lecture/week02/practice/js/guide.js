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

console.log(firstLinkItem);

// 3. 배열 아이템 순환하여 Console 패널에 출력
// footerNavigationList를 순환하여 각 아이템을 Console에 출력해보세요.

// 4. 새로운 아이템 추가 (앞 또는 뒤 아이템)

// 5. 아이템 제거 (앞/뒤 또는 특정 순서에 위치한 아이템)

// 6. 특정 아이템의 순서 추출

// 7. 새로운 아이템을 배열의 특정 순서 위치에 추가

// 8. 배열 복사

// 9. 배열 아이템에 접근 (첫번째, 특정 순서, 마지막 번째 아이템)
var lastLinkItemOfFooterNavigation =
  footerNavigationList[footerNavigationList.length - 1]; // 배열의 마지막 아이템에 접근하려면?

console.log(lastLinkItemOfFooterNavigation);

// 10. 배열 → 문자 → 배열 (메서드 체이닝)

// 문자 -> 배열 -> 문자
var friendsString = '한나 두나 세나';
console.log(friendsString);
var friendsArray = friendsString.split(' ');
console.log(friendsArray);
friendsString = friendsArray.join(' + ');
console.log(friendsString);

'한나 두나 세나'.split(' ').join(' + ');

/* -------------------------------------------------------------------------- */
/* 배열(집합) + 이벤트 핸들링 */
