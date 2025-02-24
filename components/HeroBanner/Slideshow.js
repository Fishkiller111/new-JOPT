import React from 'react';
import Carousel from 'react-slick';
import imgAPI from 'public/images/imgAPI';
import useStyles from './hero-style';

function Slideshow() {
  const { classes } = useStyles();
  const images = [imgAPI.unisex[1], imgAPI.unisex[2], imgAPI.unisex[3], imgAPI.unisex[4], imgAPI.unisex[5]];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  };

  return (
    <div className={classes.slideshow}>
      <Carousel {...settings}>
        {images.map((item, index) => (
          <div key={index.toString()} className={classes.slideItem}>
            <div className={classes.img} style={{ backgroundImage: `url(${item})` }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slideshow;
