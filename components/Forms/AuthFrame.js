import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useText } from 'theme/common';
import ClayDeco from '../Artworks/ClayDeco';
import useStyles from './form-style';

function AuthFrame(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [style, setStyle] = useState({});
  const {
    children, title,
    subtitle, type
  } = props;

  useEffect(() => {
    const randomShape = (top, left, width, height, rotate) => ({
      top: Math.floor(Math.random() * top),
      left: Math.floor(Math.random() * left),
      width: Math.floor(Math.random() * (width - 100) + 100),
      height: Math.floor(Math.random() * (height - 100) + 100),
      transform: `rotate(${Math.floor(Math.random() * rotate)}deg)`,
    });
    setStyle([
      randomShape(100, 300, 600, 500, 120),
      randomShape(200, 200, 400, 300, 60),
      randomShape(200, 200, 700, 400, 90),
      randomShape(400, 100, 400, 500, 160),
    ]);
  }, []);

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Fragment>
      {type === 'login' ? (
        <Fragment>
          <div className={cx(classes.decoration, classes.left)}>
            <div className={classes.ball}>
              <ClayDeco img="/images/decoration/clay-ball.png" color="tripleMain" />
            </div>
            <div className={classes.plate}>
              <ClayDeco img="/images/decoration/clay-plate.png" color="secondaryLight" />
            </div>
          </div>
          <div className={cx(classes.decoration, classes.right)}>
            <div className={classes.flower}>
              <ClayDeco img="/images/decoration/clay-flower.png" color="primaryLight" />
            </div>
            <div className={classes.bowl}>
              <ClayDeco img="/images/decoration/clay-bowl.png" color="secondaryLight" />
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={cx(classes.decoration, classes.left)}>
            <div className={classes.ufo}>
              <ClayDeco img="/images/decoration/clay-ufo.png" color="tripleMain" />
            </div>
            <div className={classes.bom}>
              <ClayDeco img="/images/decoration/clay-bom.png" color="doubleMain" />
            </div>
          </div>
          <div className={cx(classes.decoration, classes.right)}>
            <div className={classes.snail}>
              <ClayDeco img="/images/decoration/clay-snail.png" color="primaryLight" />
            </div>
            <div className={classes.bowl}>
              <ClayDeco img="/images/decoration/clay-bowl.png" color="accent" />
            </div>
          </div>
        </Fragment>
      )}
      <div className={classes.pageWrap}>
        <Container maxWidth="lg" className={classes.innerWrap}>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid sx={{ mr: -4 }} item lg={6} md={5} xs={12}>
                {!isMobile && (
                  <div className={classes.greeting}>
                    {type === 'login' ? (
                      <img className={classes.imgLogin} src="/images/inner/abstract.png" alt="decoration" />
                    ) : (
                      <img className={classes.imgRegister} src="/images/inner/fog.png" alt="decoration" />
                    )}
                    <div className={classes.inner}>
                      <div className={classes.fog}>
                        <div className={classes.tripleMain} style={style[0]} />
                        <div className={classes.primaryLight} style={style[1]} />
                        <div className={classes.doubleMain} style={style[2]} />
                        <div className={classes.tripleLight} style={style[3]} />
                      </div>
                    </div>
                    <ArrowForwardIcon className={classes.arrowIcon} />
                    <div className={classes.text}>
                      <Typography gutterBottom variant="h4" className={isTablet ? text.title2 : text.title}>
                        { title }
                      </Typography>
                      <Typography variant="h6" className={isTablet ? text.subtitle2 : text.subtitle}>
                        { subtitle }
                      </Typography>
                    </div>
                  </div>
                )}
              </Grid>
              <Grid item lg={6} md={7} xs={12}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
  type: 'login'
};

export default AuthFrame;
