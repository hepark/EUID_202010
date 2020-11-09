import * as React from 'react';
import ReactDOM from 'react-dom'
import axe from '@axe-core/react'
import ko from 'axe-core/locales/ko.json'

const TIMEOUT = 1000

const CONFIG = {
  // 로컬라이제이션
  locale: ko,

  // 규칙 재정의
  // 참고: https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#rule-descriptions
  // 번역: https://github.com/yamoo9/axe-core/blob/develop/doc/rule-descriptions.md
  rules: [
    // { id: 'area-alt', enabled: false }
  ],
}

export default axe.bind(null, React, ReactDOM, TIMEOUT, CONFIG)
