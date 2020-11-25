import classNames from 'classnames'
import { number, string, object, arrayOf, shape } from 'prop-types'

import ArrowButton from 'assets/ArrowButton.svg'
import { Main } from 'components'

/* -------------------------------------------------------------------------- */

/**
 * 전달 받은 props의 list 배열 item 유형 타입
 */
const ListItemType = {
  id: string.isRequired,
  headline: object.isRequired,
  link: object.isRequired,
}

const wallpaperType = { id: string, url: string }

/* -------------------------------------------------------------------------- */

const MainContainer = ({
  list,
  wallpapers,
  activeIndex,
  onChangeActiveIndex,
}) => {
  return (
    <Main>
      {list.map(({ id, headline, link }, index) => (
        <Main.Section
          key={id}
          wallpaper={wallpapers[index]}
          active={activeIndex === index}
        >
          <Main.Headline>{headline.main}</Main.Headline>
          <Main.Description>{headline.sub}</Main.Description>
          <Main.Link href={link.href}>{link.text}</Main.Link>
          <Main.GoToSectionButton
            onClick={() =>
              onChangeActiveIndex(index === list.length - 1 ? 0 : index + 1)
            }
            gotoFirst={list.length - 1 === index}
          >
            <img
              className={classNames(
                'resetImg',
                list.length - 1 === index ? 'rotate90' : 'rotate-90'
              )}
              src={ArrowButton}
              alt={
                list.length > index
                  ? '다음 섹션으로 이동'
                  : '처음 섹션으로 이동'
              }
            />
          </Main.GoToSectionButton>
        </Main.Section>
      ))}
    </Main>
  )
}

MainContainer.propTypes = {
  list: arrayOf(shape(ListItemType)).isRequired,
  wallpapers: arrayOf(shape(wallpaperType)).isRequired,
  activeIndex: number,
}

/* -------------------------------------------------------------------------- */

export default MainContainer
