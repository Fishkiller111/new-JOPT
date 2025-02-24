import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocaleLink from '../Link';
import BgTitle from '../Title/BgTitle';
import useStyles from './hero-style';

function BasicBanner(props) {
  const {
    title, bgTitle, desc,
    btnPrimary, btnSecondary, link1, link2,
    decoration: Decoration,
  } = props;

  // Theme breakpoints
  const theme = useTheme();

  const { classes } = useStyles();

  return (
    <Fragment>
      <Decoration />
      <Container className={classes.basicHero}>
        <BgTitle
          bgTitle={bgTitle}
          mainTitle={title}
          color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
        />
        <Typography component="p" sx={{ px: { md: 10 } }}>{desc}</Typography>
        <div className={classes.btnAreaSimple}>
          {btnPrimary && (
            <Button href={link1} variant="contained" color="primary" size="large">
              {btnPrimary}
            </Button>
          )}
          {btnSecondary && (
            <Button component={LocaleLink} to={link2} variant="outlined" color={theme.palette.mode === 'dark' ? 'white' : 'black'} size="large">
              {btnSecondary}
            </Button>
          )}
        </div>
      </Container>
    </Fragment>
  );
}

BasicBanner.propTypes = {
  title: PropTypes.string.isRequired,
  bgTitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btnPrimary: PropTypes.string,
  btnSecondary: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  decoration: PropTypes.elementType,
};

BasicBanner.defaultProps = {
  decoration: null,
  btnPrimary: null,
  btnSecondary: null,
  link1: '#',
  link2: '#',
};

export default BasicBanner;
