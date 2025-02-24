import React from 'react';
import Carousel from 'react-slick';
import imgAPI from 'public/images/imgAPI';
import IconCard from './Icon';
import useStyle from './styles/expertise-style';

const expertise = [
  imgAPI.logos[31],
  imgAPI.logos[32],
  imgAPI.logos[3],
  imgAPI.logos[34],
  imgAPI.logos[35],
  imgAPI.logos[36],
  imgAPI.logos[37],
  imgAPI.logos[5],
  imgAPI.logos[60],
];

function Expertise() {
  const { classes } = useStyle();

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {expertise.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconCard img={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
