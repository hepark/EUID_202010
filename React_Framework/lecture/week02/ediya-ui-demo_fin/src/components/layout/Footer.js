import { Component } from 'react';
import { fetchData } from 'utils'
import { API } from 'constants/index'
import Link from 'components/common/Link'
import brandDarkImgPath from 'assets/images/brand-dark.svg'

/**
 * Footer 컴포넌트
 */
class Footer extends Component {
  state = {
    navigation: null,
    contactInfo: null,
    hasError: null,
  }

  componentDidMount() {
    fetchData(
      API.footer,
      ({ data: { navigation, contactInfo } }) => {
        this.setState({
          navigation,
          contactInfo,
        })
      },
      (error) => {
        this.setState({
          hasError: {
            message: error.message,
          },
        })
      }
    )
  }

  render() {
    const { navigation, contactInfo } = this.state

    return (
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={brandDarkImgPath} alt="EDIYA COFFEE" />
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
    )
  }
}

export default Footer
