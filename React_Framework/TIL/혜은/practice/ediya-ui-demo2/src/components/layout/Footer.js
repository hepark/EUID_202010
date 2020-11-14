/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { fetchData } from 'utils';
import { API } from 'constants/index';
import Link from 'components/common/Link';
// import { ReactComponent as BrandDark } from 'assets/images/brand-dark.svg';
import brandImgPath from 'assets/images/brand-dark.svg';
/**
 * Footer 컴포넌트
 */
class Footer extends Component {
  state = {
    contactInfo: null,
    navigation: null,
    hasError: false,
  };

  componentDidMount() {
    fetchData(
      API.footer,
      ({ data: { contactInfo, navigation } }) => {
        this.setState({
          contactInfo,
          navigation,
        });
      },
      (error) => {
        this.setState({
          hasError: {
            message: error.message,
          },
        });
      }
    );
  }

  render() {
    const { contactInfo, navigation } = this.state;

    // // 데이터 로딩 중일 때 렌더링
    // if (!contactInfo || isLoading) {
    //   return <div role="alert">콘텐츠를 로딩 중입니다...</div>;
    // }

    // // 오류 발생했을 때 렌더링
    // if (hasError) {
    //   return <div role="alert">{hasError.message} 오류가 발생했습니다.</div>;
    // }

    // const {
    //   CEO,
    //   address,
    //   fax,
    //   tel,
    //   companyRegistrationNumber: cr_number,
    //   mailOrderBusinessReport: mob_report,
    // } = contactInfo;

    // console.log(CEO);
    // 데이터 로딩 이후, 오류 없을 경우 렌더링
    return (
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            {/* <BrandDark title="EDIYA COFFEE" /> */}
            <img src={brandImgPath} alt="EDIYA COFFEE" />
            {/* <img
              src={require('assets/images/brand-dark.svg').default}
              alt="EDIYA COFFEE"
            /> */}
          </div>

          <ul className="guide-list reset-list">
            {navigation &&
              navigation.map(({ id, link, text }) => (
                <li key={id}>
                  <Link to={link}>{text}</Link>
                </li>
              ))}
          </ul>
          <address className="address">
            {!contactInfo ? null : (
              <>
                <span>{contactInfo.address}</span>
                <span>
                  <b>TEL : </b>
                  {contactInfo.tel}
                </span>
                <span>
                  <b>FAX : </b>
                  {contactInfo.fax}
                </span>
                <span>
                  <b>사업자등록번호 : </b>
                  {contactInfo.companyRegistrationNumber}
                </span>
                <span>
                  <b>통신판매업 신고 : </b>
                  {contactInfo.mailOrderBusinessReport}
                </span>
                <span>
                  <b>대표이사 : </b>
                  {contactInfo.CEO}
                </span>
              </>
            )}
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
