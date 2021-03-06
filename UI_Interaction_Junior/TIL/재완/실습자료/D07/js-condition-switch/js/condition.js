// -----------------------------------------------------------
// switch 문
// -----------------------------------------------------------
//
// Switch 문은 프로그램이 표현식을 평가하고 값을 조건과 비교합니다.
// 만약 값이 일치한다면, 프로그램은 각 조건의 하위 문장을 실행합니다.
//
// 프로그램은 주어진 값과 일치하는 case 라벨을 찾습니다. 그리고 나서
// 관련된 구문을 수행합니다. 만약 매치되는 라벨이 없다면 default 절을
// 찾습니다. 찾게 되면, 관련된 구문을 수행합니다. default 절을 못 찾게
// 된다면 프로그램의 switch문은 종료됩니다. 관례상 default 절은 마지막
// 절입니다. 하지만 꼭 그럴 필요는 없습니다.
//
// 한번 일치된 문장이 수행되고 switch문을 따라서 계속 수행한다면 각각의
// 조건절로 연결된 선택적인 break문은 프로그램이 switch문을 벗어나게
// 합니다. 만약 break문이 생략된다면, 프로그램은 switch문 안에서
// 다음 문장을 계속 수행합니다.


/* ==========================================
 * 멀티 조건의 if 조건문 */

// // 차종 참고:https://goo.gl/QQ9Az9
// var type_of_car = '로드스터';

// if ( type_of_car === '경차' ) {
//   console.log('기아 모닝을 추천합니다.');
// } else if ( type_of_car === '소형차' ) {
//   console.log('기아 프라이드는 어떠세요?');
// } else if ( type_of_car === '중형차' ) {
//   console.log('현대 쏘나타 아니면 BMW 3 시리즈가 좋겠어요.');
// } else if ( type_of_car === '대형차' ) {
//   console.log('크라이슬러 300, 메르세데스-벤츠 E 클래스, 현대 에쿠스 타보세요!');
// } else if (
//   type_of_car === '스포츠카' ||
//   type_of_car === '컨버터블' ||
//   type_of_car === '로드스터' ||
//   type_of_car === 'SUV'
// ) {
//   console.log('BMW Z4');
//   console.log('푸조 파트너, 오펠 메리바');
//   console.log('쉐보레 올란도, 기아 카니발 또는 스포티지 ...');
//   console.log('다양합니다! 골라보세요! :-)');
// } else {
//   console.log('음... 말씀하신 종류는 국내에서 판매하지 않습니다. :-(');
// }


/* ==========================================
 * swtich ~ case 문 실습 */
var type_of_car = "경차"

switch(type_of_car){ 
  case '경차': 
    console.log('기아 모닝을 추천합니다.'); break;

  case '소형차': 
    console.log('기아 프라이드는 어떠세요?');break;

  case '중형차': 
    console.log('현대 쏘나타 아니면 BMW 3 시리즈가 좋겠어요.');break;

  case '대형차': 
    console.log('크라이슬러 300, 메르세데스-벤츠 E 클래스, 현대 에쿠스 타보세요!');break;

  case '스포츠카':
  case '컨버터블': 
  case '로드스터': 
  case 'SUV': 

    console.log('BMW Z4');
    console.log('푸조 파트너, 오펠 메리바');
    console.log('쉐보레 올란도, 기아 카니발 또는 스포티지 ...');  
    console.log('다양합니다! 골라보세요! :-)'); break;

  
  default:
  console.log('종류없음'); 


}









