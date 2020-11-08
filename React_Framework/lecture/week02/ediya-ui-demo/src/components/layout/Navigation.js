import React, { Component } from 'react';
import { string } from 'prop-types';
import { fetchData } from 'utils';
import Button from 'components/common/Button';
import { API, CLASSES } from 'constants/index';

class Navigation extends Component {
  static propTypes = {
    headline: string.isRequired,
  };

  /* -------------------------------------------------------------------------- */

  state = {
    items: [],
    isLoading: false,
    hasError: false,
  };

  /* -------------------------------------------------------------------------- */
  // 비공개 메서드
  #checkCurrentPage = (linkPath) => {
    const { href } = window.location;
    const isCurrentPage = href.includes(linkPath);
    return isCurrentPage ? CLASSES.currentPage : null;
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

  render() {
    const { headline, ...navWrapperProps } = this.props;
    const { items } = this.state;

    return (
      <nav
        aria-labelledby="globalNav"
        className="app-navigation"
        {...navWrapperProps}
      >
        <h2 id="globalNav" className="a11y-hidden">
          {headline}
        </h2>
        <ul className="reset-list">
          {items.map((item) => (
            <li key={item.id} className={this.#checkCurrentPage(item.link)}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        <Button className="is-close-menu" label="메뉴 닫기">
          <span className="close" aria-hidden="true">
            ×
          </span>
        </Button>
      </nav>
    );
  }
}

export default Navigation;
