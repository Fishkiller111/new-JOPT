import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';
import { useText } from 'theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const {
    textFirst, textMiddle, textLast,
    mini,
  } = props;

  // Translation Function

  const { classes: text } = useText();
  const [play, setPlay] = useState(false);
  const { classes, cx } = useStyles();

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 200);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container fixed={mini} maxWidth={mini ? 'sm' : 'md'}>
        <ScrollAnimation animateOnce animateIn="fadeIn" offset={-100} afterAnimatedIn={handlePlay}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={cx(classes.counterInner, mini && classes.mini)}
            spacing={mini ? 3 : 6}
          >
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <div className={cx(classes.text, classes.secondary)}>
                  <h3>
                    {textFirst.prefix || ''}
                    {countup(textFirst.count, play)}
                    {textFirst.suffix || ''}
                  </h3>
                  <h6 className={text.subtitle}>
                    {textFirst.title}
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <div className={cx(classes.text, classes.primary)}>
                  <h3>
                    {textMiddle.prefix || ''}
                    {countup(textMiddle.count, play)}
                    {textMiddle.suffix || ''}
                  </h3>
                  <h6 className={text.subtitle}>
                    {textMiddle.title}
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={12} item>
              <div className={classes.counterItem}>
                <div className={cx(classes.text, classes.secondary)}>
                  <h3>
                    {textLast.prefix || ''}
                    {countup(textLast.count, play)}
                    {textLast.suffix || ''}
                  </h3>
                  <h6 className={text.subtitle}>
                    {textLast.title}
                  </h6>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  textFirst: PropTypes.object.isRequired,
  textMiddle: PropTypes.object.isRequired,
  textLast: PropTypes.object.isRequired,
  mini: PropTypes.bool,
};

Counter.defaultProps = {
  mini: false
};

export default Counter;
