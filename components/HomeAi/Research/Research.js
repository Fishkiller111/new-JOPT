import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import IconButton from '@mui/material/IconButton';
import NextIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import Title from '../../Title';
import SliderArt from '../SliderArt';
import CaseCard from '../../Cards/Thumbnail/CaseCard';
import useStyles from './research-style';

const caseData = [
  {
    bg: imgAPI.photosP[7],
    logo: imgAPI.logos[1],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[10],
    logo: imgAPI.logos[2],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[13],
    logo: imgAPI.logos[3],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[1],
    logo: imgAPI.logos[4],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[12],
    logo: imgAPI.logos[5],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[6],
    logo: imgAPI.logos[6],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[4],
    logo: imgAPI.logos[7],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[28],
    logo: imgAPI.logos[8],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[3],
    logo: imgAPI.logos[9],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[2],
    logo: imgAPI.logos[10],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  }
];

function PopularCourse() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const [slideCount, setSlideCount] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [fade, setFade] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    afterChange: current => {
      setSlideCount(current);
      if (current >= 1) {
        setFade(true);
      } else {
        setFade(false);
      }
    },
    responsive: [{
      breakpoint: 1100,
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
      <Container className={classes.carouselHeader}>
        <Title
          text={t('ai-landing.research_title')}
          align={isMobile ? 'center' : 'left'}
        />
        <p className={text.subtitle2}>
          {t('ai-landing.research_desc')}
          <Button
            component={LocaleLink}
            to={link.portfolio}
            size="large"
            className={classes.viewAll}
          >
            {t('btn_seeall')}
            <NextIcon className={classes.icon} />
          </Button>
        </p>
      </Container>
      <Container>
        <div className={classes.floatingArtwork}>
          <SliderArt fade={fade}>
            <ScrollAnimation animateOnce animateIn="fadeInLeftShort" offset={-60} delay={300} duration={0.5}>
              <div>
                <img
                  src={imgAPI.ai[18]}
                  alt="research"
                />
              </div>
            </ScrollAnimation>
          </SliderArt>
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
            {caseData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <CaseCard
                  bg={caseData[index].bg}
                  logo={caseData[index].logo}
                  title={caseData[index].title}
                  desc={caseData[index].desc}
                  href={link.portfolioDetail}
                />
              </div>
            ))}
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
          </Carousel>
        </div>
        <IconButton
          className={cx(classes.nav, classes.prev)}
          onClick={() => slider.current.slickPrev()}
          size="large"
          disabled={slideCount <= 0}
        >
          <i className="ion-ios-arrow-back" />
        </IconButton>
        <IconButton
          className={cx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
          size="large"
        >
          <i className="ion-ios-arrow-forward" />
        </IconButton>
      </div>
    </div>
  );
}

export default PopularCourse;
