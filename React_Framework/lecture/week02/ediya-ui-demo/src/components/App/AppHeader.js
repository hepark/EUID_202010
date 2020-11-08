import React from 'react';
import HomeLink from 'components/common/HomeLink';
import Button from 'components/common/Button';
import Navigation from 'components/common/Navigation';

const AppHeader = () => {
  return (
    <div className="app-header-container">
      <header className="app-header">
        <HomeLink>
          <img
            src={require('assets/images/brand.svg')}
            alt="Ediya Coffee"
            className="respons"
          />
        </HomeLink>

        <Button className="is-open-menu" label="메뉴 열기">
          <span className="ir" />
        </Button>

        <Navigation headline="이디야 글로벌 내비게이션" />
      </header>
    </div>
  );
};

export default AppHeader;
