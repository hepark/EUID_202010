import React from "react";
import btnTop from "assets/images/ArrowButton.svg";

function SectionContainer() {
  return (
    <>
      <section className="featureSection">
        <h2 className="featureSection__title">
          영화, 드라마, 예능, 다큐멘터리를 무제한으로
        </h2>
        <p className="featureSection__description">
          매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.
        </p>
        <a
          className="linkA featureSection__startLink"
          href="https://watcha.com/start"
        >
          2주 무료 이용 시작
        </a>
        <button
          type="button"
          className="button button--goToSection button--next"
        >
          <img
            className="img rotate-90"
            src={btnTop}
            alt="다음 섹션으로 이동"
          />
        </button>
      </section>
      <section className="featureSection">
        <h2 className="featureSection__title">
          여럿이 함께, 하나의 이용권으로
        </h2>
        <p className="featureSection__description">
          동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.
        </p>
        <a
          className="linkA featureSection__startLink"
          href="https://watcha.com/start"
        >
          2주 무료 이용 시작
        </a>
        <button
          type="button"
          className="button button--goToSection button--next"
        >
          <img
            className="img rotate-90"
            src={btnTop}
            alt="다음 섹션으로 이동"
          />
        </button>
      </section>
      <section className="featureSection">
        <h2 className="featureSection__title">
          이제 TV로 최고의 화질을 경험하세요
        </h2>
        <p className="featureSection__description">
          최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.
        </p>
        <a
          className="linkA featureSection__startLink"
          href="https://watcha.com/start"
        >
          2주 무료 이용 시작
        </a>
        <button
          type="button"
          className="button button--goToSection button--next"
        >
          <img
            className="img rotate-90"
            src={btnTop}
            alt="다음 섹션으로 이동"
          />
        </button>
      </section>
      <section className="featureSection">
        <h2 className="featureSection__title">
          이동 중에도 감상을 멈추지 마세요
        </h2>
        <p className="featureSection__description">
          보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.
        </p>
        <a
          className="linkA featureSection__startLink"
          href="https://watcha.com/start"
        >
          2주 무료 이용 시작
        </a>
        <button
          type="button"
          className="button button--goToSection button--next"
        >
          <img
            className="img rotate-90"
            src={btnTop}
            alt="다음 섹션으로 이동"
          />
        </button>
      </section>
      <section className="featureSection">
        <h2 className="featureSection__title">
          스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서
        </h2>
        <p className="featureSection__description">
          8만여 편의 작품을 무제한 스트리밍하세요.
        </p>
        <a
          className="linkA featureSection__startLink"
          href="https://watcha.com/start"
        >
          2주 무료 이용 시작
        </a>
        <button
          type="button"
          className="button button--goToSection button--first"
        >
          <img className="img rotate90" src={btnTop} alt="처음 섹션으로 이동" />
        </button>
      </section>
    </>
  );
}

export default SectionContainer;
