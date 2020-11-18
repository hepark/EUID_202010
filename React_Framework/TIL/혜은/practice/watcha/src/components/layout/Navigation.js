import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="appNavigation appNavigation--fixed">
        <h2 className="a11yHidden">섹션 탐색</h2>
        <ul className="navigationList">
          <li>
            <button
              type="button"
              className="button appNavigation__button appNavigation__button--active"
            >
              <span className="a11yHidden tooltip">
                추가 요금 없이 무제한 시청
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="button appNavigation__button">
              <span className="a11yHidden tooltip">
                동시 시청 (최대 4개 기기)
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="button appNavigation__button">
              <span className="a11yHidden tooltip">
                최고 화질(4K)의 생생한 감동
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="button appNavigation__button">
              <span className="a11yHidden tooltip">
                이동 중 언제든 시청 가능
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="button appNavigation__button">
              <span className="a11yHidden tooltip">
                모든 기기에서 재생 가능
              </span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
