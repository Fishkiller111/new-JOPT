import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'react-slick';
import imgAPI from 'public/images/imgAPI';
import useStyles from './collage-style';

function CarouselGallery() {
  const { cx, classes } = useStyles();
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }]
  };

  return (
    <div className={classes.slider}>
      <div className={classes.gallery}>
        {isTablet && (
          <>
            <div className={cx(classes.stringDeco, classes.string1)}>
              <span />
            </div>
            <div className={cx(classes.stringDeco, classes.string3)}>
              <span />
            </div>
          </>
        )}
        <div className={classes.carousel}>
          <Carousel {...settings}>
            <Box sx={{ mt: 10 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosS[12]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 2 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosL[19]} alt="collage" />
              </figure>
            </Box>
            <Box className={classes.item}>
              <figure>
                <img src={imgAPI.photosP[32]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 20 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosL[14]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 17 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosS[13]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 10 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosS[12]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 12 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosS[11]} alt="collage" />
              </figure>
            </Box>
            <Box className={classes.item}>
              <figure>
                <img src={imgAPI.photosP[32]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 20 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosP[31]} alt="collage" />
              </figure>
            </Box>
            <Box sx={{ mt: 17 }} className={classes.item}>
              <figure>
                <img src={imgAPI.photosS[13]} alt="collage" />
              </figure>
            </Box>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CarouselGallery;
