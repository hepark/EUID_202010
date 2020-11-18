import { useState, useCallback } from 'react';
import { ellipseText } from 'utils'
import Button from 'components/common/Button'
import Time from './Time'
import SvgIcon from './SvgIcon'

/* -------------------------------------------------------------------------- */

// 아이템 찾기 함수
const findItem = (curerntIndex, items) =>
  items.find((item, i) => i === curerntIndex)

/* -------------------------------------------------------------------------- */

const Notice = ({ noticeData }) => {
  // 상태
  const [currentIndex, setCurrentIndex] = useState(0)
  const [items] = useState(noticeData)
  const [filteredItem, setFilteredItem] = useState(null)

  // 콜백 함수
  const handlePrevItem = useCallback(() => {
    let index = currentIndex - 1
    index = index < 0 ? items.length - 1 : index
    setCurrentIndex(index)
    setFilteredItem(findItem(index, items))
  }, [currentIndex, items])

  const handleNextItem = useCallback(() => {
    let index = currentIndex + 1
    index = index >= items.length ? 0 : index
    setCurrentIndex(index)
    setFilteredItem(findItem(index, items))
  }, [currentIndex, items])

  // 데이터 로딩 중 표시
  if (!filteredItem) {
    setFilteredItem(findItem(currentIndex, items))
    return <div>데이터 로딩 중...</div>
  }

  // 렌더링
  const { headline, date, content } = filteredItem

  return (
    <section className="ediya-notice">
      <h2 className="ediya-notice-headline" lang="en">
        NOTICE
      </h2>
      <article className="ediya-notice__article">
        <h3 className="ediya-notice__article-headline">
          {ellipseText(headline, 16)}
        </h3>
        <Time>{date}</Time>
        <p className="ediya-notice__article-text">{ellipseText(content, 40)}</p>
      </article>
      <div className="button-container">
        <Button className="button--prev" onClick={handlePrevItem}>
          <SvgIcon
            title="이전 공지사항 보기"
            path="M9.25 10.5L6.75 8L9.25 5.5"
          />
        </Button>
        <Button className="button--next" onClick={handleNextItem}>
          <SvgIcon
            title="다음 공지사항 보기"
            path="M6.75 10.5L9.25 8L6.75 5.5"
          />
        </Button>
      </div>
    </section>
  )
}

export default Notice
