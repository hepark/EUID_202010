import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('CRA 프로젝트 유닛 테스트 스위트(Unit Test Suite)', () => {
  // TEST 1.
  test(`'React 배우기' 텍스트를 포함하는 링크가 문서에 존재하는가?`, () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/react 배우기/i);
    expect(linkElement).toBeInTheDocument();
  });

  // TEST 2.
  test(`앱 헤더의 React 로고 이미지 요소는 적절한 대체 텍스트 값을 제공하는가?`, () => {
    const { getByRole } = render(<App />);
    const imageElement = getByRole('img');
    expect(imageElement.getAttribute('alt')).toBe('React');
  });
});
