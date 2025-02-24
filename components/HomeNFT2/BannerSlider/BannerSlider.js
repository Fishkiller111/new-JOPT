import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText, useTextGradient } from 'theme/common';
import LocaleLink from '../../Link';
import ProductNftCard from '../../Cards/Product/NftCard';
import useStyles from './slider-style';

const nftList = [
  {
    img: imgAPI.photosL[46],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[8],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[50],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[27],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const sliderSide = useRef(null);
  const sliderCenter = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');

  useEffect(() => {
    setSlider({
      nav1: sliderSide.current,
      nav2: sliderCenter.current
    });
  }, []);

  const slickOptionsFade = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: true,
    autoplay: false,
    fade: true,
    cssEase: 'ease-out',
  };

  const slickOptionsRoll = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    autoplaySpeed: 10000,
    infinite: true,
    autoplay: true,
    cssEase: 'ease-out',
    responsive: [{
      breakpoint: 600,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.inner}>
        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 3 }}>
                <div className={classes.text}>
                  <h4 className={text.title}>
                    {t('nft2.banner_title')}
                    <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                      &nbsp;
                      {t('nft2.banner_highlight')}
                    </span>
                  </h4>
                  <h5 className={text.subtitle}>
                    {t('nft2.banner_desc')}
                  </h5>
                  <div className={classes.btnArea}>
                    <Button component={LocaleLink} size="large" color="primary" variant="contained" to={link.register} className={classes.button}>
                      {t('btn_get')}
                    </Button>
                    <Button component={LocaleLink} size="large" color="secondary" variant="outlined" to={link.product} className={classes.button}>
                      {t('nft2.header_explore')}
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.artScene}>
                {isDesktop && (
                  <div className={classes.fadeSlider}>
                    <span className={classes.decoLine} />
                    <Carousel
                      {...slickOptionsFade}
                      ref={sliderCenter}
                      asNavFor={slider.nav1}
                    >
                      {nftList.map((item, index) => (
                        <div key={index.toString()} className={classes.cardMain}>
                          <ProductNftCard
                            img={item.img}
                            avatar={item.avatar}
                            name={item.name}
                            title={item.title}
                            price={item.price}
                            href={item.href}
                            verified={item.verified}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                )}
                <div className={classes.rollSlider}>
                  <Carousel
                    {...slickOptionsRoll}
                    ref={sliderSide}
                    asNavFor={slider.nav2}
                  >
                    {nftList.map((item, index) => (
                      <div key={index.toString()} className={classes.cardSecondary}>
                        <ProductNftCard
                          img={item.img}
                          avatar={item.avatar}
                          name={item.name}
                          title={item.title}
                          price={item.price}
                          href={item.href}
                          verified={item.verified}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default BannerSlider;
