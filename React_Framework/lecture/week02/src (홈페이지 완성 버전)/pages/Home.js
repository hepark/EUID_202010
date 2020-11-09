import { Component } from 'react';
import { fetchData } from 'utils'
import { API } from 'constants/index'
import { HomeContextProvider } from 'context/HomeContext'
import Layout from 'components/layout/Layout'
import RecommendContainer from './Home/RecommendContainer'
import SectionContainer from './Home/SectionContainer'

/* 
  React.StrictMode 사용 시, 오류 출력
  Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code.

  참고: https://github.com/nfl/react-helmet/issues/623 
  결론: 향후 의존 패키지에서 문제가 해결되길 기다리거나, 다른 대체 수단을 찾아야 함.
*/

/* -------------------------------------------------------------------------- */

class Home extends Component {
  state = {
    recommendContainer: null,
    sectionContainer: null,
  }

  componentDidMount() {
    fetchData(
      API.home,
      ({ data: { recommendContainer, sectionContainer } }) => {
        this.setState({
          recommendContainer,
          sectionContainer,
        })
      }
    )
  }

  render() {
    return (
      <Layout
        className="home"
        headline="이디야 커피(Ediya Coffee) 홈 페이지 메인"
      >
        <HomeContextProvider value={this.state}>
          <RecommendContainer />
          <SectionContainer />
        </HomeContextProvider>
      </Layout>
    )
  }
}

export default Home
