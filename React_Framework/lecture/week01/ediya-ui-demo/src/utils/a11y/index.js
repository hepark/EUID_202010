import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

const TIMEOUT = 1000;
const CONFIG = {
  locale: {
    lang: 'ko',
  },
  // 규칙 재정의
  rules: [{ id: 'area-alt', enabled: false }],
};

// * Function.prototype.bind
export default axe.bind(null, React, ReactDOM, TIMEOUT, CONFIG);
