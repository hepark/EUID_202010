import { bool } from 'prop-types'

import { Header } from 'components'
import Logo from 'assets/Logo.svg'

export default function HeaderContainer({ signIn = false }) {
  return (
    <Header>
      {/* 컴파운드 컴포넌트 */}
      <Header.Brand>
        <Header.HomeLink to="/">
          <img
            className="resetImg"
            alt="왓챠(WATCHA) 홈"
            src={Logo}
            width={99}
            height={40}
          />
        </Header.HomeLink>
      </Header.Brand>
      <Header.SignInLink to={{ pathname: signIn ? '/signup' : '/signin' }}>
        {signIn ? '회원가입' : '로그인'}
      </Header.SignInLink>
    </Header>
  )
}

HeaderContainer.propTypes = {
  signIn: bool,
}
