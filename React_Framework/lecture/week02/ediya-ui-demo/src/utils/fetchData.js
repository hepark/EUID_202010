import logError from './logError';

/* -------------------------------------------------------------------------- */

/**
 * 비동기 네트워크 통신 유틸리티 함수
 * @param {String} apiAddress API 주소
 * @param {Func} successCb 네트워크 성공 시, 처리되는 콜백 함수
 * @param {Func} failCb 네트워크 실패 시, 처리되는 콜백 함수
 * @param {String} method 'json' 또는 'text'
 */
const fetchData = async (
  // 필수 전달인자
  apiAddress,
  successCb,
  // 선택 전달인자
  failCb = ({ message }) => logError(message),
  method = 'json'
) => {
  try {
    // 네트워크 통신 성공
    // successCb 함수 실행
    const response = await fetch(apiAddress);
    const responseData = await response[method]();
    // const responseData = await (await fetch(apiAddress))[method]();
    successCb(responseData);
  } catch ({ message }) {
    // 네트워크 통신 실패
    // failCb 함수가 실행
    failCb(message);
  }
};

export default fetchData;
