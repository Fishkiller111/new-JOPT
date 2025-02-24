import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTextGradient } from 'theme/common';
import Title from './Title';
import useStyles from './parallax-title-style';

function ParallaxTitle(props) {
  const { mainTitle, bgTitle, color } = props;
  const { classes, cx } = useStyles();

  const offset = 24;

  const decoTitle = useRef(null);
  const { classes: textGradient } = useTextGradient();
  const [transform, setTransform] = useState(offset);

  const handleScroll = (event, divider) => {
    if (decoTitle.current) {
      const coordinat = decoTitle.current.getBoundingClientRect();
      if (coordinat.top > 0) {
        setTransform(coordinat.top / divider);
      } else {
        setTransform(offset);
      }
    }
  };

  useEffect(() => {
    const divider = window.innerWidth > 600 ? 1.5 : 3;
    window.addEventListener('scroll', (e) => handleScroll(e, divider));
  }, []);

  return (
    <div
      className={classes.root}
      style={{ paddingTop: `${transform - offset}px` }}
    >
      <h2
        className={cx(classes.decoTitle, textGradient[color])}
        ref={decoTitle}
        style={{ opacity: transform > 30 ? transform / 300 : 0.15 }}
      >
        {bgTitle}
      </h2>
      <Title align="center" text={mainTitle} />
    </div>
  );
}

ParallaxTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  bgTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ParallaxTitle.defaultProps = {
  color: 'doubleMain',
};

export default ParallaxTitle;
