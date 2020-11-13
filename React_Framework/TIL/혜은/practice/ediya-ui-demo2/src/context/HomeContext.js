import React, { createContext } from 'react';

// 초기 데이터
const homeContextDefaults = {
  author: 'yamoo9',
  description:
    'Context 기본 값(default value)은 Context.Provider에 `value`를 설정 하지 않아도 기본 제공될 콘텐츠를 추가할 수 있습니다.',
};

// AppContext
const HomeContext = createContext(homeContextDefaults);

// HomeContext.Provider 래퍼 컴포넌트
export const HomeContextProvider = ({ children, value = {} }) => (
  <HomeContext.Provider value={{ ...homeContextDefaults, ...value }}>
    {children}
  </HomeContext.Provider>
);

export default HomeContext;
