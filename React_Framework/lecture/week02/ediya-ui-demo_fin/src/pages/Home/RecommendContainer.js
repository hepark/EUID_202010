import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser'
import HomeContext from 'context/HomeContext'
import A11yHidden from 'components/common/A11yHidden'
import Link from 'components/common/Link'
import RecommendText from './RecommendText'
import RecommendList from './RecommendList'

/**
 * RecommendContainer 컴포넌트
 */
export default function RecommendContainer() {
  const context = useContext(HomeContext)

  // 비동기 통신으로 데이터를 받아올 동안, 로딩 메시지를 화면에 표시
  if (!context.recommendContainer) {
    return <div>데이터를 불러오는 중...</div>
  }

  // 데이터를 받아온 후에 객체 구조 분해 할당을 사용해 필요한 데이터 추출
  const {
    recommendContainer: {
      headline,
      recommendText: { en, ko },
      recommendList,
      CTA: { link, text },
    },
  } = context

  return (
    <div className="ediya-recommend-container">
      <section className="ediya-recommend">
        <A11yHidden as="h2">{headline}</A11yHidden>
        <RecommendText lang="en">{ReactHtmlParser(en)}</RecommendText>
        <RecommendText>{ko}</RecommendText>

        <RecommendList>
          {recommendList.map(({ id, image, names }) => (
            <RecommendList.Item key={id} image={image}>
              {names.map(({ id, className, contents }) => (
                <RecommendList.ItemName
                  key={id}
                  className={className}
                  contents={contents}
                />
              ))}
            </RecommendList.Item>
          ))}
        </RecommendList>

        <Link to={link} className="go-menu">
          {text}
        </Link>
      </section>
    </div>
  )
}
