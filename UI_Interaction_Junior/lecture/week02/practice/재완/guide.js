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
var firstLink = globalNavigationList[0];
console.log(firstLink);
// 3. 배열 아이템 순환하여 Console 패널에 출력
// footerNavigationList.forEach((item) => {``
//   console.log(item);
// });
for (let i = 0; i < footerNavigationList.length; ++i) {
  console.log(i);
}

// 4. 새로운 아이템 추가 (앞 또는 뒤 아이템)
//'값질 근절','매니저의 방'
footerNavigationList.unshift('값질 근절');
footerNavigationList.push('매니저의 방', '카페 알바의 방');

// 5. 아이템 제거 (앞/뒤 또는 특정 순서에 위치한 아이템)
// 중간의 아이템 제거 splice()
// shift,pop -> 원본을 변형시키는 문제
// indexOf() 문자와 배열을 모두 찾을수 있다.
// indexOf()는 문자의 순서 위치를 말한다
// indexOf() 배열의 위치를 조회할 수도 있다.

footerNavigationList.shift(); //값질 근절 제거
footerNavigationList.splice(footerNavigationList.length - 2);
console.log(footerNavigationList);

// 6. 특정 아이템의 순서 추출
// .indexOf()

// 7. 새로운 아이템을 배열의 특정 순서 위치에 추가
// 추가할때도 splice(startindex,removecount,additems)
footerNavigationList.splice(2, 3, '한나', '두나', '세나');
// 8. 배열 복사

// 9. 배열 아이템에 접근 (첫번째, 특정 순서, 마지막 번째 아이템)
var lastLinkItemOfFooterNavigation =
  globalNavigationList[globalNavigationList.length - 1];
console.log(lastLinkItemOfFooterNavigation);
// 10. 배열 → 문자 → 배열 (메서드 체이닝)

/* -------------------------------------------------------------------------- */
/* 배열(집합) + 이벤트 핸들링 */
function render() {
  var el_all = document.querySelectorAll('.app-navigation a');
  console.log(el_all);

  // var handler = function (e){
  //   e.preventDefault();
    
  // }
  // el_all.forEach(function (item, index) {
  //   item.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     console.log(this);
  //     console.log(index);
  //   });

  // 함수가 실행된 이유에 가비지컬렉터가 데이터를 다 소멸 시킴 
  // function outer(){
  //   var a = 9;
  //   return function inner(){
  //     console.log(a);
  //   }
  // }
// var inner = outer();
// inner()
  // outer를 실행하면 함수는 원래 소멸되어야 한다.
  // 하지만 return을 함수로 내보내면 함수값은 살아남을수 있다.
  // 결과적으로 반환받은 함수는 기억을 할수 있고 스코프 체이닝이 가능하다. 
  for(var i=0; i <el_all.length; ++i){
    var link_EL = el_all[i];
    link_EL.addEventListener('click',function(event){
      event.preventDefault();
      console.log('index',i);
    });
  }
  });
}

window.addEventListener('load', render);
