import React, { Component, createRef } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { CLASSES } from 'constants/index';
import { isMobile, fetchData, delay } from 'utils';
import Button from 'components/common/Button';
import Link from 'components/common/Link';
import A11yHidden from 'components/common/A11yHidden';

/**
 * Navigation 컴포넌트
 */
class Navigation extends Component {
  /* -------------------------------------------------------------------------- */
  /* 클래스 멤버 */

  static propTypes = {
    headline: string.isRequired,
  };

  /* -------------------------------------------------------------------------- */
  /* 상태, 참조 */

  state = {
    items: [],
    isOpen: false,
    activeClass: '',
    hasError: null,
  };

  firstLinkRef = createRef();
  openMenuButtonRef = createRef();
  closeMenuButtonRef = createRef();

  /* -------------------------------------------------------------------------- */
  /* 비공개 메서드 [PRIVATE, ES2019(v10)], Class Field 문법 */

  #isActivePage = (linkPath) => {
    linkPath = linkPath
      .split('/')
      .find((link) => link.includes('.html'))
      .replace('.html', '');

    return window.location.href.includes(linkPath) ? CLASSES.currentPage : null;
  };

  #handleDisplayNavigation = () => {
    this.setState({
      isOpen: isMobile() ? false : true,
      activeClass: '',
    });
  };

  #handleKeydown = (e) => {
    const { shiftKey, key } = e;
    const { activeElement } = document;
    const { current: firstLink } = this.firstLinkRef;
    const { current: openButton } = this.openButtonRef;
    const { current: closeButton } = this.closeButtonRef;
    const isFirstLink = activeElement.isEqualNode(firstLink);
    const isCloseButton = activeElement.isEqualNode(closeButton);

    if (key === 'Escape') {
      this.handleClose();
      e.preventDefault();
      openButton.focus();
    }

    if (key === 'Tab') {
      if (isFirstLink && shiftKey) {
        e.preventDefault();
        closeButton.focus();
      }
      if (isCloseButton && !shiftKey) {
        e.preventDefault();
        firstLink.focus();
      }
    }
  };

  /* -------------------------------------------------------------------------- */
  /* 라이프 사이클 훅 */

  componentDidMount() {
    // 네트워크 데이터 요청/응답
    fetchData(
      this.props.api,
      ({ data }) => this.setState({ data }),
      ({ message }) => this.setState({ hasError: { message } })
    );

    // 모바일, 데스크톱 환경을 감지하여 내비게이션 표시 처리
    // 초기 실행
    this.#handleDisplayNavigation();
    // 창 크기 조정 시 실행
    window.addEventListener('resize', this.#handleDisplayNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.#handleDisplayNavigation);
  }

  /* -------------------------------------------------------------------------- */
  /* 공개 메서드 */

  handleOpen = () => {
    this.setState(
      {
        isOpen: true,
      },
      () => {
        delay(100)
          .then(() => {
            this.setState({
              activeClass: CLASSES.activeClass,
            });
            window.addEventListener('keydown', this.#handleKeydown);
          })
          .catch(({ message }) =>
            this.setState({
              hasError: { message },
            })
          );
      }
    );
  };

  handleClose = () => {
    this.setState(
      {
        activeClass: '',
      },
      () => {
        delay(400)
          .then(() => {
            this.setState({
              isOpen: false,
            });
            window.removeEventListener('keydown', this.#handleKeydown);
          })
          .catch(({ message }) =>
            this.setState({
              hasError: { message },
            })
          );
      }
    );
  };

  render() {
    const { headline, className, ...navProps } = this.props;
    const { data, isOpen, activeClass } = this.state;

    // // 데이터를 로딩 중인 상태 랜더링
    // if (isLoading) {
    //   return <div role="alert">데이터 로딩 중입니다.</div>;
    // }

    // // 오류가 발생했을 때
    // if (hasError) {
    //   return <div role="alert">{hasError.message} 오류</div>;
    // }

    // 로딩 끝, 오류 없음 상태 랜더링
    return (
      <>
        <Button
          ref={this.openButtonRef}
          onClick={this.handleOpen}
          className="is-open-menu"
          label="내비게이션 메뉴 열기"
        >
          <span className="ir" />
        </Button>

        <nav
          {...navProps}
          aria-labelledby="globalNav"
          className={classNames('app-navigation', className, activeClass)}
          hidden={!isOpen}
        >
          <A11yHidden as="h2" id="globalNav">
            {headline}
          </A11yHidden>
          <ul className="reset-list">
            {data.map(({ id, link, text }, index) => (
              <li key={id} className={this.#isActivePage(link)}>
                <Link ref={index === 0 ? this.firstLinkRef : null} to={link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            ref={this.closeButtonRef}
            onClick={this.handleClose}
            className="is-close-menu"
            label="내비게이션 메뉴 닫기"
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
