import React from 'react';
import HomeLink from 'components/common/HomeLink';
import Button from 'components/common/Button';

const AppHeader = () => {
  return (
    <div className="app-header-container">
      <header className="app-header">
        <HomeLink alt="Ediya Coffee" />

        <Button className="is-open-menu" label="메뉴 열기">
          <span className="ir" />
        </Button>

        <nav className="app-navigation">
          <h2 className="a11y-hidden">메인 메뉴</h2>
          <ul className="reset-list">
            {/* 비동기 데이터 바인딩 → 내비게이션 리스트 렌더링 (아래 템플릿 코드 활용) */}
          </ul>
          <button
            type="button"
            className="button is-close-menu"
            title="메뉴 닫기"
            aria-label="메뉴 닫기"
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default AppHeader;
