import { useContext } from 'react';
import HomeContext from 'context/HomeContext'
import YoutubePromotion from './YoutubePromotion'
import Notice from './Notice'
import News from './News'

/* -------------------------------------------------------------------------- */

const printYoutubeStyle = (poster) => ({
  background: `url(${
    require('../../' + poster).default
  }) no-repeat  center center / cover`,
  border: 0,
})

/* -------------------------------------------------------------------------- */

function SectionContainer() {
  const context = useContext(HomeContext)

  // 비동기 통신으로 데이터를 받아올 동안, 로딩 메시지를 화면에 표시
  if (!context.sectionContainer) {
    return <div>데이터를 로딩 중...</div>
  }

  // 데이터를 받아온 후에 객체 구조 분해 할당을 사용해 필요한 데이터 추출
  const {
    sectionContainer: { youtubePlayer, notice: noticeData },
  } = context

  return (
    <div className="ediya-section-container">
      <YoutubePromotion
        id={youtubePlayer.id}
        headline={youtubePlayer.headline}
        title={youtubePlayer.title}
        src={youtubePlayer.src}
        label={youtubePlayer.label}
        style={printYoutubeStyle(youtubePlayer.poster)}
      />
      <div className="ediya-inform-container">
        <Notice noticeData={noticeData} />
        <News />
      </div>
    </div>
  )
}

export default SectionContainer
