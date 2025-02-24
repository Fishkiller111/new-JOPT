import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-slick';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import Counter from './Counter';
import useStyles from './counter-carousel-style';

const logos = [
  imgAPI.logos[17],
  imgAPI.logos[21],
  imgAPI.logos[26],
  imgAPI.logos[16],
  imgAPI.logos[28],
  imgAPI.logos[15],
  imgAPI.logos[23],
  imgAPI.logos[25],
  imgAPI.logos[14],
  imgAPI.logos[24],
  imgAPI.logos[13],
  imgAPI.logos[22],
  imgAPI.logos[20],
  imgAPI.logos[18],
  imgAPI.logos[30],
  imgAPI.logos[27],
  imgAPI.logos[19],
  imgAPI.logos[29],
];

function CounterCarousel(props) {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes } = useStyles();
  const { cover, title, desc } = props;

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <Container>
          <figure>
            <img src={cover} alt="background" />
          </figure>
        </Container>
      </div>
      <div className={classes.sliderWrap}>
        <Container maxWidth="md">
          <Typography className={text.title}>
            {title}
          </Typography>
          <Typography className={text.subtitle2}>
            {desc}
          </Typography>
        </Container>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {logos.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <img src={item} alt="logo" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Counter
        textFirst={{
 title: t('about_counter1'), count: 123, prefix: '+', suffix: 'M'
}}
        textMiddle={{
 title: t('about_counter2'), count: 456, prefix: '+', suffix: 'K'
}}
        textLast={{ title: t('about_counter3'), count: 789, prefix: '+' }}
      />
    </div>
  );
}

CounterCarousel.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CounterCarousel;
