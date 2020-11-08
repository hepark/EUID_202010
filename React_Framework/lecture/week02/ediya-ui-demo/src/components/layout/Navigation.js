import React, { Component } from 'react';
import { string } from 'prop-types';
import Button from 'components/common/Button';

class Navigation extends Component {
  static propTypes = {
    headline: string.isRequired,
  };

  /* -------------------------------------------------------------------------- */

  state = {
    hasError: null,
  };

  /* -------------------------------------------------------------------------- */

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${process.env.PUBLIC_URL}/api/navigation.json`)
      .then((response) => response.json())
      .then(({ data: navigationData }) => console.log(navigationData))
      .catch(({ message }) =>
        this.setState({
          hasError: {
            message,
          },
        })
      );
  }

  render() {
    const { headline, ...navWrapperProps } = this.props;

    return (
      <nav
        aria-labelledby="globalNav"
        className="app-navigation"
        {...navWrapperProps}
      >
        <h2 id="globalNav" className="a11y-hidden">
          {headline}
        </h2>
        <ul className="reset-list">
          {/* 비동기 데이터 바인딩 → 내비게이션 리스트 렌더링 (아래 템플릿 코드 활용) */}
        </ul>
        <Button className="is-close-menu" label="메뉴 닫기">
          <span className="close" aria-hidden="true">
            ×
          </span>
        </Button>
      </nav>
    );
  }
}

export default Navigation;
