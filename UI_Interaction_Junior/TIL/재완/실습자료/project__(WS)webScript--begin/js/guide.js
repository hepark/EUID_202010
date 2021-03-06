/**
 * * [ 이듬(E.UID) 블렌디드 러닝 ] 1주차 오프라인 학습
 *
 * TODO: JavaScript 학습 진행 내용 -----------------------------
 *
 * + 변수 선언/할당
 * + 자료형(Data Types), 리터럴
 * + 동적형 지정, 자동 형 변환
 * + 함수 선언/호출
 * + 문/식, 연산자
 * + 조건 처리 [if, switch, ? :]
 *
 * TODO: DOM API 학습 진행 내용 --------------------------------
 *
 * + 문서 객체 접근 방법 [getElementById, querySelector, ...]
 * + 이벤트 핸들링 [마우스, 키보드]
 */

// **
//  * * [ 함수 미션 ]
//  *
//  * * 미션 1-1. 평방미터(㎡,square*meter) → 평(坪, peyong) 함수를 작성해보세요. (참고: 3.3058㎡ = 1평)

//  * * 미션 1-2. 작성한 함수를 사용해 26평(坪)이 몇 평방미터(㎡)인지 계산해보세요.
//  *
//  * * 미션 2-1. 평(坪) → 평방미터(㎡) 함수를 작성해보세요.
//  * * 미션 2-2. 작성한 함수를 사용해 158.6784평방미터(㎡)가 몇 평(坪)인지 계산해보세요.
//  *
//  * * 미션 3-1. 평방미터(㎡) ↔ 평(坪) 함수를 작성해보세요. (조건에 따라 전달된 값을 평(坪) 또는 평방미터(㎡)로 반환)
//  * * 미션 3-2. 작성한 함수를 사용해 32평(坪) 값을 전달해 평방미터 값을 구해보세요.
//  * * 미션 3-3. 작성한 함수를 사용해 330.58평방미터(㎡) 값을 전달해 평(坪) 값을 구해보세요.
//  */

const a = 3.3058;

function peyong(squareValue) {
  return squareValue / a;
}
function peyong2(peyongValue) {
  return peyongValue * a;
}

function change(value, isPeyongValue) {
  //조건 1
  //조건 2
  return isPeyongValue ? peyong(value) : peyong2(value); // 식은 리턴이 필요하다
  // 문하고 식을 구분을 해야한다. 식은 리턴이 가능하다.
  //   if (isPeyongValue) {
  //     return peyong(value);
  //   } else {
  //     return peyong2(value);
  //   }
}
// var result1 = peyong(1.5825);
// var result2 = peyong2(3.33333);
var pV1 = change(32, true);
var pV2 = change(158.6784);

console.log(pV1);
console.log(pV2);

// console.log('result1', result1);
// console.log('result2:', result2);
