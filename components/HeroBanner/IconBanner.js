import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import LocaleLink from '../Link';
import Icons3d from '../Icons3d';
import useStyles from './hero-style';

function IconBanner(props) {
  const {
    title, desc, features,
    cover, btnPrimary, btnSecondary,
    icon, counterPrimary, counterSecondary
  } = props;

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  const theme = useTheme();
  const { classes, cx } = useStyles();

  return (
    <Fragment>
      {isDesktop && (
        <div className={classes.decoLine}>
          <svg className={classes.linePrimary}>
            <use xlinkHref="/images/decoration/banner-deco.svg#main" />
          </svg>
          <svg className={classes.lineSecondary}>
            <use xlinkHref="/images/decoration/banner-deco.svg#main" />
          </svg>
        </div>
      )}
      <Container className={classes.iconBanner}>
        <Grid container>
          <Grid item lg={11} md={12} xs={12} className={classes.contentBanner}>
            <figure>
              <img src={cover} alt="cover" />
            </figure>
            <Grid container spacing={isDesktop ? 0 : 4}>
              {isDesktop && (
                <Grid item md={4} xs={12}>
                  <div className={classes.icon}>
                    <div className={classes.center}>
                      <Icons3d icon={icon[0]} color="secondaryDouble" />
                    </div>
                    <div className={classes.left}>
                      <Icons3d icon={icon[1]} color="primary" />
                    </div>
                    <div className={classes.right}>
                      <Icons3d icon={icon[2]} color="accent" />
                    </div>
                  </div>
                </Grid>
              )}
              <Grid item md={8} xs={12}>
                <div className={classes.bannerContent}>
                  <h3>{title}</h3>
                  <div className={classes.properties}>
                    <div className={classes.desc}>
                      <p>{desc}</p>
                      <ul>
                        {features.map((item, index) => (
                          <li key={index.toString()}>{item}</li>
                        ))}
                      </ul>
                      <div className={classes.btnArea}>
                        {btnPrimary && <Button component={LocaleLink} size="large" variant="contained" to={btnPrimary.href} color={theme.palette.mode === 'dark' ? 'primaryLight' : 'primary'}>{btnPrimary.text}</Button>}
                        {btnSecondary && <Button component={LocaleLink} size="large" variant="outlined" to={btnSecondary.href} color={theme.palette.mode === 'dark' ? 'white' : 'black'}>{btnSecondary.text}</Button>}
                      </div>
                    </div>
                    <div className={classes.counter}>
                      {counterPrimary && (
                        <Paper className={cx(classes.paper, classes.bgPrimary)}>
                          <h2>{counterPrimary.count}</h2>
                          {counterPrimary.title}
                        </Paper>
                      )}
                      {counterSecondary && (
                        <Paper className={cx(classes.paper, classes.bgSecondary)}>
                          <h2>{counterSecondary.count}</h2>
                          {counterSecondary.title}
                        </Paper>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

IconBanner.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  icon: PropTypes.array.isRequired,
  btnPrimary: PropTypes.object,
  btnSecondary: PropTypes.object,
  counterPrimary: PropTypes.object,
  counterSecondary: PropTypes.object,
};

IconBanner.defaultProps = {
  btnPrimary: null,
  btnSecondary: null,
  counterPrimary: null,
  counterSecondary: null,
};

export default IconBanner;
