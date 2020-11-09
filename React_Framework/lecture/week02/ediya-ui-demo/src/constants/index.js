// 네트워크 비동기 통신을 위한 API

const PUBLIC = process.env.PUBLIC_URL;
const API_ADDRESS = `${PUBLIC}/api`;

export const API = {
  home: `${API_ADDRESS}/home.json`,
  navigation: `${API_ADDRESS}/navigation.json`,
  footer: `${API_ADDRESS}/footer.json`,
};

/* -------------------------------------------------------------------------- */
// 반응형 웹 디자인(RWD) 중단점

export const BREAKPOINT = 768;

/* -------------------------------------------------------------------------- */
// CSS 클래스 이름 (상수)

export const CLASSES = {
  currentPage: 'is--selected',
  activeClass: 'is-active',
};
