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
    const { contactInfo, navigation, isLoading, hasError } = this.state;

    // 데이터 로딩 중일 때 렌더링
    if (!contactInfo || isLoading) {
      return <div role="alert">콘텐츠를 로딩 중입니다...</div>;
    }

    // 오류 발생했을 때 렌더링
    if (hasError) {
      return <div role="alert">{hasError.message} 오류가 발생했습니다.</div>;
    }

    const {
      CEO,
      address,
      fax,
      tel,
      companyRegistrationNumber: cr_number,
      mailOrderBusinessReport: mob_report,
    } = contactInfo;

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
            {navigation.map(({ id, link, text }) => (
              <li key={id}>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
          <address className="address">
            <span>{address}</span>
            <span>
              <b>TEL : </b>
              {tel}
            </span>
            <span>
              <b>FAX : </b>
              {fax}
            </span>
            <span>
              <b>사업자등록번호 : </b>
              {cr_number}
            </span>
            <span>
              <b>통신판매업 신고 : </b>
              {mob_report}
            </span>
            <span>
              <b>대표이사 : </b>
              {CEO}
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
