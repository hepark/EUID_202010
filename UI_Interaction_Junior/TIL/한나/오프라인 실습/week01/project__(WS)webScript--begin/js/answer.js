//  * * 미션 1-1. 평방미터(㎡, square meter) → 평(坪, peyong) 함수를 작성해보세요. (참고: 3.3058㎡ = 1평)
function houseSize(peyung) {
  return 3.3058 * peyung;
}

houseSize(peyung);

//  * * 미션 1-2. 작성한 함수를 사용해 26평(坪)이 몇 평방미터(㎡)인지 계산해보세요.
function peyong2squareMeter(peyongValue) {
  return peyongValue * 3.3058;
}

peyong2squareMeter(peyongValue);

/* 3.3058을 상수 값을 설정하기 */
function peyong2squareMeter(peyongValue) {
  const squareMeter = 3.3058;
  return peyongValue * squareMeter;
}

/* 상수 값을 함수 안에 지정하면 다른 함수에서는 사용할 수 없다. 밖에다 선언하기 */
// 상수는 관례적으로 대문자로 이름 설정하기
const SQUARE_METERS_PER_PYEONG = 3.3058;

function peyong2squareMeter(peyongValue) {
  return peyongValue * squareMeter;
}

/* -------------------------------------------------------------------------------- */

//  * * 미션 3-1. 평방미터(㎡) ↔ 평(坪) 함수를 작성해보세요. (조건에 따라 전달된 값을 평(坪) 또는 평방미터(㎡)로 반환)
//  * * 미션 3-2. 작성한 함수를 사용해 32평(坪) 값을 전달해 평방미터 값을 구해보세요.
//  * * 미션 3-3. 작성한 함수를 사용해 330.58평방미터(㎡) 값을 전달해 평(坪) 값을 구해보세요.

var squareMeter2peyong = function (squareMeterValue) {
  return squareMeterValue / 3.3058;
};

var peyong2squareMeter = function (peyongValue) {
  return peyongValue * 3.3058;
};

function houseSize(squareMeterValue, peyongValue) {
  if (peyongValue === false) {
    return squareMeter2peyong();
  } else if (squareMeterValue === false) {
    return peyong2squareMeter();
  }
}
/* -------------------------------------------------------------------------------- */

//  * * 미션 1-1. 평방미터(㎡, square meter) → 평(坪, peyong) 함수를 작성해보세요. (참고: 3.3058㎡ = 1평)

// (1평 = 3.3058평방미터) 기준이 되는 상수 선언
const SQUARE_METERS_PER_PYEONG = 3.3058;

// 평방미터 값을 평수 값으로 반환하는 유틸리티 함수
function squareMeter2peyong(squareMeterValue) {
  return squareMeterValue / 3.3058;
}

var result = squareMeter2peyong(158.6784); // 몇 평 ???

console.log(result);

//  * * 미션 1-2. 작성한 함수를 사용해 26평(坪)이 몇 평방미터(㎡)인지 계산해보세요.
function peyong2squareMeter(peyongValue) {
  return peyongValue * 3.3058;
}

var result2 = peyong2squareMeter(result1); // 몇 평방미터 ???

//  * * 미션 3-1. 평방미터(㎡) ↔ 평(坪) 함수를 작성해보세요. (조건에 따라 전달된 값을 평(坪) 또는 평방미터(㎡)로 반환)

// 3항식
// 식은 문과 다르게 값을 반환하기 때문에 `return`이 꼭 필요하다
function toggleFloorSpaceValue(value, isPeyongValue) {
  return (isPeyongValue = isPeyongValue
    ? peyong2squareMeter(value)
    : squareMeter2peyong(value));
}

//  * * 미션 3-2. 작성한 함수를 사용해 32평(坪) 값을 전달해 평방미터 값을 구해보세요.
//  * * 미션 3-3. 작성한 함수를 사용해 330.58평방미터(㎡) 값을 전달해 평(坪) 값을 구해보세요.
