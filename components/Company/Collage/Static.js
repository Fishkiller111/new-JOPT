import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import link from 'public/text/link';
import imgAPI from 'public/images/imgAPI';
import LocaleLink from '../../Link';
import useStyles from './collage-style';

function Static(props) {
  const { cx, classes } = useStyles();
  const { btnText } = props;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.static}>
      <div className={classes.gallery}>
        <div className={cx(classes.stringDeco, classes.string1)}>
          <span />
        </div>
        <div className={cx(classes.stringDeco, classes.string2)}>
          <span />
        </div>
        {isTablet && (
          <Box sx={{ mt: 10, zIndex: 1 }}>
            <figure>
              <img src={imgAPI.photosS[12]} alt="collage" />
            </figure>
          </Box>
        )}
        <Box sx={{ zIndex: 1 }}>
          <figure>
            <img src={imgAPI.photosP[32]} alt="collage" />
          </figure>
        </Box>
        {isDesktop && (
          <Box sx={{ mt: 10 }}>
            <div className={classes.person}>
              <figure>
                <img src={imgAPI.avatar[34]} alt="collage" />
              </figure>
            </div>
          </Box>
        )}
        <Box sx={{ mt: { sm: 20, xs: 5 }, zIndex: 2 }}>
          <figure>
            <img src={imgAPI.photosL[14]} alt="collage" />
          </figure>
          {btnText !== '' && (
            <Box sx={{ mx: 1 }}>
              <Button
                fullWidth
                size="large"
                className={classes.btn}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component={LocaleLink}
                to={link.career}
              >
                {btnText}
              </Button>
            </Box>
          )}
        </Box>
        <Box sx={{ mt: { sm: 17, xs: 3 } }}>
          <figure>
            <img src={imgAPI.photosS[13]} alt="collage" />
          </figure>
        </Box>
      </div>
    </div>
  );
}

Static.propTypes = {
  btnText: PropTypes.string,
};

Static.defaultProps = {
  btnText: ''
};

export default Static;
