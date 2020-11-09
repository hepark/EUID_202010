import { API } from 'constants/index'
import Link from 'components/common/Link'
import Navigation from 'components/layout/Navigation'
import brandImgPath from 'assets/images/brand.svg'

/**
 * AppHeader 컴포넌트
 */
const AppHeader = () => (
  <div className="app-header-container">
    <header className="app-header">
      {/* 홈 링크 */}
      <Link isHomelink homelinkProps={{ className: 'brand' }}>
        <img
          src={brandImgPath}
          alt="이디야 커피(Ediya Coffee) 홈"
          className="respons"
        />
      </Link>

      <Navigation api={API.navigation} headline="이디야 글로벌 내비게이션" />
    </header>
  </div>
)

export default AppHeader
