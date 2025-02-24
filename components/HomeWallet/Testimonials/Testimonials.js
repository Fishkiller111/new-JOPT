import React, { useRef } from 'react';
import Carousel from 'react-slick';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign } from 'theme/common';
import Title from '../../Title';
import TestiCard from '../../Cards/Testimonial/TestiCard';
import useStyles from './testi-style';

const testiData = [
  {
    img: imgAPI.avatar[18],
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.avatar[26],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer'
  },
  {
    img: imgAPI.avatar[15],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer'
  },
  {
    img: imgAPI.avatar[23],
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jack Doe',
    title: 'Senior Graphic Designer'
  },
  {
    img: imgAPI.avatar[24],
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'James Doe',
    title: 'CEO Software House'
  },
  {
    img: imgAPI.avatar[16],
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  }
];

function Testimonials() {
  // Translation function
  const { t } = useTranslation('common');

  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  const slider = useRef(null);
  const { classes, cx } = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Title
        align="center"
        text={t('wallet.testi_title')}
      />
      <p className={cx(text.subtitle2, align.textCenter)}>
        {t('wallet.testi_desc')}
      </p>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Button
            size="small"
            variant="contained"
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-md-arrow-back" />
          </Button>
          <Carousel ref={slider} {...settings}>
            {testiData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <TestiCard
                  text={item.text}
                  name={item.name}
                  title={item.title}
                  img={item.img}
                />
              </div>
            ))}
          </Carousel>
          <Button
            variant="contained"
            size="small"
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-md-arrow-forward" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
