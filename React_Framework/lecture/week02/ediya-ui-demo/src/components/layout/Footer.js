/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { ReactComponent as BrandDark } from 'assets/images/brand-dark.svg';
// import brandImgPath from 'assets/images/brand-dark.svg';

import { API } from 'constants/index';
import { fetchData } from 'utils';

/* -------------------------------------------------------------------------- */

class Footer extends Component {
  state = {
    contactInfo: null,
    navigation: null,
    hasError: false,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetchData(
      API.footer,
      ({ data: { contactInfo, navigation } }) => {
        this.setState({
          contactInfo,
          navigation,
          isLoading: false,
        });
      },
      (errorMessage) => {
        this.setState({
          isLoading: false,
          hasError: {
            message: errorMessage,
          },
        });
      }
    );
  }

  render() {
    const { contactInfo, isLoading, hasError } = this.state;

    // 데이터 로딩 중일 때 렌더링
    if (!contactInfo || isLoading) {
      return <div role="alert">콘텐츠를 로딩 중입니다...</div>;
    }

    // 오류 발생했을 때 렌더링
    if (hasError) {
      return <div role="alert">{hasError.message} 오류가 발생했습니다.</div>;
    }

    // 데이터 로딩 이후, 오류 없을 경우 렌더링
    return (
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <BrandDark title="EDIYA COFFEE" />
            {/* <img src={brandImgPath} alt="EDIYA COFFEE" /> */}
            {/* <img
              src={require('assets/images/brand-dark.svg').default}
              alt="EDIYA COFFEE"
            /> */}
          </div>
          <ul className="guide-list reset-list">
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">멤버스 이용약관</a>
            </li>
            <li>
              <a href="#">가맹 안내</a>
            </li>
            <li>
              <a href="#">대량쿠폰구매</a>
            </li>
            <li>
              <a href="#">채용안내</a>
            </li>
            <li>
              <a href="#">고객의 소리</a>
            </li>
            <li>
              <a href="#">사이트맵</a>
            </li>
            <li>
              <a href="#">점주의 방</a>
            </li>
          </ul>
          <address className="address">
            <span>
              서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동
              221-17)
            </span>
            <span>
              <b>TEL : </b>02-543-6467
            </span>
            <span>
              <b>FAX : </b>02-543-7191
            </span>
            <span>
              <b>사업자등록번호 : </b>107-86-16302
            </span>
            <span>
              <b>통신판매업 신고 : </b>강남 제 002519호
            </span>
            <span>
              <b>대표이사 : </b>문창기
            </span>
          </address>
          <small className="copyright">
            © 2017 EDIYA COFFEE COMPANY. ALL RIGHTS RESERVED..
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
