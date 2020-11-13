import 'styles/index.css';
import ReactDOM from 'react-dom';
import { devProd, getNode as $ } from 'utils';
import bootstrap from './bootstrap';
// import { API, BREAKPOINT, CLASSES } from 'constants/index';
// console.log($);
// console.log(typeof delay);

// delay(1000)
//   .then(() => console.log('1초 뒤에 콜백'))
//   .catch(({ message }) => logError(message));

// console.log(API, BREAKPOINT, CLASSES);

// console.log(isMobile());

/* -------------------------------------------------------------------------- */
/* React 앱 렌더링                                                              */
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  bootstrap(true /* strict 모드 사용 유무: (기본 값 false) */),
  $('#reactApp')
);

/* -------------------------------------------------------------------------- */
/* PWA 설정 또는 A11Y 검사                                                        */
/* -------------------------------------------------------------------------- */

devProd();
