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

/**
 * * [ 함수 미션 ]
 *
 * * 미션 1-1. 평방미터(㎡, square meter) → 평(坪, pyeong) 함수를 작성해보세요. (참고: 3.3058㎡ = 1평)
 * * 미션 1-2. 작성한 함수를 사용해 26평(坪)이 몇 평방미터(㎡)인지 계산해보세요.
 *
 * * 미션 2-1. 평(坪) → 평방미터(㎡) 함수를 작성해보세요.
 * * 미션 2-2. 작성한 함수를 사용해 158.6784평방미터(㎡)가 몇 평(坪)인지 계산해보세요.
 *
 * * 미션 3-1. 평방미터(㎡) ↔ 평(坪) 함수를 작성해보세요. (조건에 따라 전달된 값을 평(坪) 또는 평방미터(㎡)로 반환)
 * * 미션 3-2. 작성한 함수를 사용해 32평(坪) 값을 전달해 평방미터 값을 구해보세요.
 * * 미션 3-3. 작성한 함수를 사용해 330.58 평방미터(㎡) 값을 전달해 평(坪) 값을 구해보세요.
 */

// (1평 = 3.3058평방미터) 기준이 되는 상수 선언
const SQUARE_METERS_PER_PYEONG = 3.3058;

//[미션 1-1, 1-2] 평방미터 값을 평수 값으로 반환하는 유틸리티 함수
function squareMeter2pyeong(squareMeterValue) {
  return squareMeterValue / SQUARE_METERS_PER_PYEONG;
}

// [미션 2-1, 2-2] 평수 값을 평방미터 값으로 반환하는 유틸리티 함수
function pyeong2squareMeter(pyeongValue) {
  return pyeongValue * SQUARE_METERS_PER_PYEONG;
}

var result1 = squareMeter2pyeong(158.6784); // 몇 평 ???
var result2 = pyeong2squareMeter(result1);

console.log('result1:', result1); // 48 평
console.log('result2:', result2); // 158.6784 평방미터

/* -------------------------------------------------------------------------- */

// 미션 3-1. 평방미터(㎡) ↔ 평(坪) 함수를 작성해보세요. (조건에 따라 전달된 값을 평(坪) 또는 평방미터(㎡)로 반환)
function toggleFloorSpaceValue(value, ispyeongValue) {
  // 프로그래밍 사고의 힘(조건에 따른 변수를 만들 수 있어야 한다)
  // "값의 유형이 '평'이니?"
  // if (ispyeongValue) {
  //   // 조건 1. 값이 평수인 경우
  //   return pyeong2squareMeter(value);
  // } else {
  //   // 조건 2. 값이 평방미터인 경우
  //   return squareMeter2pyeong(value);
  // }

  // 3항식
  return ispyeongValue ? pyeong2squareMeter(value) : squareMeter2pyeong(value);
}

// 미션 3-2. 작성한 함수를 사용해 32평(坪) 값을 전달해 평방미터 값을 구해보세요.
var pV1 = toggleFloorSpaceValue(32, true);
// 미션 3-3. 작성한 함수를 사용해 330.58 평방미터(㎡) 값을 전달해 평(坪) 값을 구해보세요.
var pV2 = toggleFloorSpaceValue(158.6784);

console.log(pV1 /* 평방미터 */, pV2 /* 평 */);
