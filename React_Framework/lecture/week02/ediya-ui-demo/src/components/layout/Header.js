import React from 'react';
import Link from 'components/common/Link';
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

        <Navigation headline="이디야 글로벌 내비게이션" />
      </header>
    </div>
  );
};

export default Header;
