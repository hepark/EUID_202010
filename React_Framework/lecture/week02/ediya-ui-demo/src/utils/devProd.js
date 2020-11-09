import logError from './logError';

const isProduction = process.env.NODE_ENV === 'production';

function devProd() {
  if (isProduction) {
    // 앱을 오프라인에서 작동시키고 보다 빠르게 로드 하고자 한다면?
    // 아래 코드의 unregister()를 register()로 변경합니다.
    // [⚠️주의! 이 방법은 몇 가지 문제를 발생할 수 있습니다.]
    // 서비스 워커에 대해 자세히 알아보기: https://bit.ly/CRA-PWA
    import('config/serviceWorker')
      .then((serviceWorker) => serviceWorker.register())
      .catch(({ message }) => logError(message));
  } else {
    import('utils/axeAutoTest')
      .then(({ default: axe }) => axe())
      .catch(({ message }) => logError(message));
  }
}

export default devProd;
