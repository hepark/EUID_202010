import React, { StrictMode } from 'react';
import App from './app/App';

// const App = () => {
//   return <div>App</div>;
// };

/**
 * bootstrap 함수
 * @param {Boolean} usingStrictMode strict 모드 사용 유무
 */
const bootstrap = (usingStrictMode = false) => {
  return usingStrictMode ? (
    // ⚠️ 주의!
    // React.StrictMode를 사용할 경우, Console 패널에 결과가 2번씩 출력 됨에 주의하세요.
    // 별도 추가한 의존 개발 모듈(예: react-helmet 등)은 Strict 모드에서 오류를 발생시킬 수 있습니다.
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  );
};

export default bootstrap;
