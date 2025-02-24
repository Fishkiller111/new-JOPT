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
import useStyles from './projects-style';

const caseData = [
  {
    bg: imgAPI.photosP[11],
    logo: imgAPI.logos[1],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[7],
    logo: imgAPI.logos[2],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosP[12],
    logo: imgAPI.logos[3],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosS[3],
    logo: imgAPI.logos[4],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[1],
    logo: imgAPI.logos[5],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[9],
    logo: imgAPI.logos[6],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[2],
    logo: imgAPI.logos[7],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[11],
    logo: imgAPI.logos[8],
    title: 'Convallis ligula',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[8],
    logo: imgAPI.logos[9],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
  {
    bg: imgAPI.photosL[10],
    logo: imgAPI.logos[10],
    title: 'Donec commodo',
    desc: 'Vestibulum consequat hendrerit',
  },
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
    dots: true,
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
          text={t('blockchain.project_title')}
          align={isMobile ? 'center' : 'left'}
        />
        <p className={text.subtitle2}>
          {t('blockchain.project_desc')}
          <Button
            component={LocaleLink}
            to={link.services}
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
                  src={imgAPI.blockchain[13]}
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
            <div className={classes.item}>
              <CaseCard
                bg={caseData[0].bg}
                logo={caseData[0].logo}
                title={caseData[0].title}
                desc={caseData[0].desc}
                href={link.serviceDetail}
                orientation="square"
              />
              <CaseCard
                bg={caseData[1].bg}
                logo={caseData[1].logo}
                title={caseData[1].title}
                desc={caseData[1].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
            </div>
            <div className={classes.item}>
              <CaseCard
                bg={caseData[2].bg}
                logo={caseData[2].logo}
                title={caseData[2].title}
                desc={caseData[2].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
              <CaseCard
                bg={caseData[3].bg}
                logo={caseData[3].logo}
                title={caseData[3].title}
                desc={caseData[3].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
              <CaseCard
                bg={caseData[4].bg}
                logo={caseData[4].logo}
                title={caseData[4].title}
                desc={caseData[4].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
            </div>
            <div className={classes.item}>
              <CaseCard
                bg={caseData[5].bg}
                logo={caseData[5].logo}
                title={caseData[5].title}
                desc={caseData[5].desc}
                href={link.serviceDetail}
                orientation="square"
              />
              <CaseCard
                bg={caseData[6].bg}
                logo={caseData[6].logo}
                title={caseData[6].title}
                desc={caseData[6].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
            </div>
            <div className={classes.item}>
              <CaseCard
                bg={caseData[7].bg}
                logo={caseData[7].logo}
                title={caseData[7].title}
                desc={caseData[7].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
              <CaseCard
                bg={caseData[8].bg}
                logo={caseData[8].logo}
                title={caseData[8].title}
                desc={caseData[8].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
              <CaseCard
                bg={caseData[9].bg}
                logo={caseData[9].logo}
                title={caseData[9].title}
                desc={caseData[9].desc}
                href={link.serviceDetail}
                orientation="landscape"
              />
            </div>
            {!isMobile && (
              <div className={cx(classes.props, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
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
