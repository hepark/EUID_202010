import React from 'react';
import Link from 'components/common/Link';
import Time from './Time';
import SvgIcon from './SvgIcon';

/* -------------------------------------------------------------------------- */

const News = () => {
  return (
    <section className="ediya-news">
      <h2 className="ediya-news-headline" lang="en">
        NEWS
      </h2>
      <ul className="ediya-news-list reset-list">
        <li className="ediya-news-item">
          <Link className="ediya-news-subject" to="#">
            [MTN] 이디야커피, 조각 케이크 2종 출시 디저트 강화
          </Link>
          <Time className="date--white">2020.09.08</Time>
        </li>
        <li className="ediya-news-item">
          <Link className="ediya-news-subject" to="#">
            [아시아경제] 이디야커피, '비니스트 커피믹스 ...
          </Link>
          <Time className="date--white">2020.08.27</Time>
        </li>
      </ul>
      <Link className="icon-more" to="/views/news.html">
        <SvgIcon
          title="이디야 뉴스 더보기"
          path="M5 8.02114H11M8.05331 5L8.05331 11"
        />
      </Link>
    </section>
  );
};

export default News;
