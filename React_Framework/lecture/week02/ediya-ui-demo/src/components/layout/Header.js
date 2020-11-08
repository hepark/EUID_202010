import React from 'react';
import Link from 'components/common/Link';
import Button from 'components/common/Button';
import Navigation from 'components/layout/Navigation';

const Header = () => {
  return (
    <div className="app-header-container">
      <header className="app-header">
        <h1 className="brand">
          <Link>
            <img
              src={require('assets/images/brand.svg').default}
              alt="Ediya Coffee"
              className="respons"
            />
          </Link>
        </h1>

        <Button className="is-open-menu" label="메뉴 열기">
          <span className="ir" />
        </Button>

        <Navigation headline="이디야 글로벌 내비게이션" />
      </header>
    </div>
  );
};

export default Header;
