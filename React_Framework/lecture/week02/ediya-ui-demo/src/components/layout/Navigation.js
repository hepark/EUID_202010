import React, { Component, createRef } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import { fetchData, delay } from 'utils';
import Button from 'components/common/Button';
import { API, CLASSES } from 'constants/index';

class Navigation extends Component {
  static propTypes = {
    headline: string.isRequired,
  };

  /* -------------------------------------------------------------------------- */

  state = {
    items: [],
    isOpened: false,
    activeClass: '',
    isLoading: false,
    hasError: false,
  };

  openMenuButtonRef = createRef();
  firstLinkRef = createRef();
  closeMenuButtonRef = createRef();

  /* -------------------------------------------------------------------------- */
  // 비공개 메서드
  #checkCurrentPage = (linkPath) => {
    const { href } = window.location;
    const isCurrentPage = href.includes(linkPath);
    return isCurrentPage ? CLASSES.currentPage : null;
  };

  #handleKeydown = (e) => {
    const {
      firstLinkRef: { current: firstLinkNode },
      closeMenuButtonRef: { current: closeMenuButtonNode },
    } = this;

    const { target, key, shiftKey } = e;

    if (shiftKey && key === 'Tab' && target.isEqualNode(firstLinkNode)) {
      e.preventDefault();
      closeMenuButtonNode.focus();
    }

    if (!shiftKey && key === 'Tab' && target.isEqualNode(closeMenuButtonNode)) {
      e.preventDefault();
      firstLinkNode.focus();
    }
  };

  /* -------------------------------------------------------------------------- */

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchData(
      API.navigation,
      ({ data: items }) => {
        this.setState({ isLoading: false, items });
      },
      ({ message }) => {
        this.setState({
          isLoading: false,
          hasError: { message },
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */

  handleOpenMenu = () => {
    this.setState(
      {
        isOpened: true,
      },
      () => {
        delay(100).then(() => {
          this.setState({
            activeClass: CLASSES.activeClass,
          });

          // 키보드 이벤트 연결 (이벤트 위임)
          document.addEventListener('keydown', this.#handleKeydown);
        });
      }
    );
  };

  handleCloseMenu = () => {
    this.setState(
      {
        activeClass: '',
      },
      () => {
        delay(400).then(() => {
          this.setState({
            isOpened: false,
          });

          // 연결된 이벤트 제거
          document.removeEventListener('keydown', this.#handleKeydown);
        });
      }
    );
  };

  render() {
    const { headline, ...navWrapperProps } = this.props;
    const { items, activeClass, isOpened, isLoading, hasError } = this.state;

    // 데이터를 로딩 중인 상태 렌더링
    if (isLoading) {
      return <div role="alert">데이터 로딩 중입니다...</div>;
    }

    // 오류가 발생했을 때 상태 렌더링
    if (hasError) {
      return <div role="alert">{hasError.message} 오류가 발생했습니다.</div>;
    }

    // 로딩 끝, 오류 없음 상태 렌더링
    return (
      <>
        <Button
          ref={this.openMenuButtonRef}
          className="is-open-menu"
          label="메뉴 열기"
          onClick={this.handleOpenMenu}
        >
          <span className="ir" />
        </Button>
        <nav
          hidden={!isOpened}
          aria-labelledby="globalNav"
          className={classNames('app-navigation', activeClass)}
          {...navWrapperProps}
        >
          <h2 id="globalNav" className="a11y-hidden">
            {headline}
          </h2>

          <ul className="reset-list">
            {items.map((item, index) => (
              <li key={item.id} className={this.#checkCurrentPage(item.link)}>
                <a
                  ref={index === 0 ? this.firstLinkRef : null}
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <Button
            ref={this.closeMenuButtonRef}
            className="is-close-menu"
            label="메뉴 닫기"
            onClick={this.handleCloseMenu}
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </Button>
        </nav>
      </>
    );
  }
}

export default Navigation;
