import React from 'react';
import { string } from 'prop-types';
import A11yHidden from 'components/common/A11yHidden';

/**
 * Youtube 프로모션 컴포넌트
 */
const YoutubePromotion = ({ headline, id, title, src, label, ...props }) => (
  <section className="ediya-youtube">
    <A11yHidden as="h2">{headline}</A11yHidden>
    <figure className="ediya-youtube-container iframe-container">
      <iframe
        {...props}
        title={title}
        aria-labelledby={id}
        src={src}
        allowFullScreen
      />
      <A11yHidden as="figure" id={id}>
        {label}
      </A11yHidden>
    </figure>
  </section>
);

YoutubePromotion.propTypes = {
  headline: string.isRequired,
  id: string.isRequired,
  title: string.isRequired,
  src: string.isRequired,
  label: string.isRequired,
};

export default YoutubePromotion;
