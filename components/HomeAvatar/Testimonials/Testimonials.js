import React, { useRef, useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import ParallaxFull from '../Parallax/ParallaxFull';
import Title from '../../Title';
import RatingCard from '../../Cards/Testimonial/RatingCard';
import SliderArt from '../SliderArt';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 3
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
];

function Testimonials() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { classes } = useStyle();
  const [fade, setFade] = useState(false);

  // Carousel Setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: current => {
      const edge = testiContent.length - 4;
      if (current <= edge) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Translation function
  const { t } = useTranslation('common');

  // Carousel
  const slider = useRef(null);
  useEffect(() => {
    const prop = window.innerWidth > 1400 ? 0 : 1; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(testiContent.length + prop - settings.slidesToShow);
    if (window.innerWidth > 1200) {
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <ParallaxFull />
      <Container>
        <Grid container>
          <Grid item lg={7} md={12} xs={12}>
            <Title align={isDesktop ? 'left' : 'center'} text={t('avatar.testi_title')} />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <RatingCard
                avatar={item.avatar}
                title={item.title}
                name={item.name}
                text={item.text}
                star={item.rating}
              />
            </div>
          ))}
          {isDesktop && (
            <div className={classes.item}>
              <div className={classes.itemPropsLast} />
            </div>
          )}
        </Carousel>
      </div>
      <div className={classes.floatingArtwork}>
        <Container fixed>
          <div className={classes.artwork}>
            <SliderArt fade={fade}>
              <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
                <div className={classes.avatarArt}>
                  <Avatar sx={{ top: 120, left: 240 }} className={classes.avatar} src={imgAPI.avatar[30]} alt="decoration" />
                  <Avatar sx={{ top: 220, left: 80 }} className={classes.avatar} src={imgAPI.avatar[11]} alt="decoration" />
                  <Avatar sx={{ top: 280, left: 340 }} className={classes.avatar} src={imgAPI.avatar[33]} alt="decoration" />
                  <Avatar sx={{ top: 380, left: 100 }} className={classes.avatar} src={imgAPI.avatar[28]} alt="decoration" />
                  <Avatar sx={{ top: 460, left: 300 }} className={classes.avatar} src={imgAPI.avatar[32]} alt="decoration" />
                </div>
              </ScrollAnimation>
            </SliderArt>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonials;
