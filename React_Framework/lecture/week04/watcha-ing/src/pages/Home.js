import { Component } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { shuffle } from 'utils'

import { HeaderContainer, IndicatorsContainer, MainContainer } from 'containers'

/* -------------------------------------------------------------------------- */
import { fetchHomeData } from '../store/actions'

const mapStateToProps = ({ home }) => ({
  wallpapers: home.wallpapers,
  sections: home.sections,
})

const mapDispatchToProps = {
  fetchHomeData,
}

/* -------------------------------------------------------------------------- */

class Home extends Component {
  // 상태
  state = {
    wallpapers: [],
    indicators: [],
    activeIndex: 0,
    currentY: 0,
    direction: '',
    isLoading: false,
    hasError: false,
  }

  /* -------------------------------------------------------------------------- */
  // 메서드

  async fetchData() {
    this.setState({ isLoading: true })

    try {
      await this.props.fetchHomeData()

      this.setState(
        {
          isLoading: false,
          wallpapers: this.props.wallpapers,
        },
        () => {
          this.shuffleFiterWallpapers(this.state.wallpapers)
          this.extractIndicators(this.props.sections)
        }
      )
    } catch ({ message }) {
      this.setState({
        isLoading: false,
        hasError: { message },
      })
    }
  }

  shuffleFiterWallpapers = (wallpapers) => {
    const filteredWallpapers = shuffle(wallpapers).filter(
      (wallpaper, index) => index < this.props.sections.length
    )
    this.setState({ wallpapers: filteredWallpapers })
  }

  extractIndicators = (sections) => {
    const indicators = sections.map((section) => ({
      id: section.id,
      abbr: section.headline.abbr,
    }))
    this.setState({ indicators })
  }

  changeActiveIndex = (newActiveIndex) => {
    this.setState({ activeIndex: newActiveIndex })
  }

  handleScroll = (e) => {
    const { scrollY: y } = window
    const { currentY: previousY } = this.state

    this.setState({
      direction: previousY > y ? 'up' : 'down',
      currentY: y,
    })
  }

  /* -------------------------------------------------------------------------- */
  // 라이프 사이클 훅

  componentDidMount() {
    this.fetchData()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  /* -------------------------------------------------------------------------- */
  // 렌더

  render() {
    const {
      isLoading,
      hasError,
      indicators,
      activeIndex,
      direction,
    } = this.state
    const { wallpapers, sections } = this.props

    if (isLoading) {
      return <div>앱 홈페이지 로딩 중...</div>
    }

    if (hasError) {
      return <div>오류 메시지 출력</div>
    }

    return (
      <>
        <HeaderContainer direction={direction} />
        <IndicatorsContainer
          list={indicators}
          activeIndex={activeIndex}
          onChangeActiveIndex={this.changeActiveIndex}
        />
        <MainContainer
          list={sections}
          wallpapers={wallpapers}
          activeIndex={activeIndex}
          onChangeActiveIndex={this.changeActiveIndex}
        />
      </>
    )
  }
}

Home.propTypes = {
  fetchAsyncWallpaperList: func,
  fetchAsyncSectionList: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
