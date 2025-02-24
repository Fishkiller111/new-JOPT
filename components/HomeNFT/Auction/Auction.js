import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Carousel from 'react-slick';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import ParallaxTitle from '../../Title/ParallaxTitle';
import SliderArt from '../SliderArt';
import ProductCount from '../../Cards/Product/CountdownCard';
import useStyles from './auction-style';

const nftList = [
  {
    img: imgAPI.photosL[46],
    circulation: '100000',
    timeleft: 30000000,
    title: 'Lorem Ipsum Dolor 1',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[0],
      imgAPI.avatar[1],
      imgAPI.avatar[4],
      imgAPI.avatar[5],
    ]
  },
  {
    img: imgAPI.photosL[8],
    circulation: '100000',
    timeleft: 560000000,
    title: 'Lorem Ipsum Dolor 2',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[0],
      imgAPI.avatar[2],
      imgAPI.logos[4],
      imgAPI.avatar[4],
    ]
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100000',
    timeleft: 250000000,
    title: 'Lorem Ipsum Dolor 3',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[1],
      imgAPI.logos[2],
      imgAPI.logos[5],
      imgAPI.avatar[6],
    ]
  },
  {
    img: imgAPI.photosL[50],
    circulation: '100000',
    timeleft: 110000000,
    title: 'Lorem Ipsum Dolor 4',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[6],
      imgAPI.logos[7],
      imgAPI.avatar[8],
      imgAPI.avatar[10],
    ]
  },
  {
    img: imgAPI.photosL[5],
    circulation: '100000',
    timeleft: 500000000,
    title: 'Lorem Ipsum Dolor 5',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.logos[10],
      imgAPI.logos[11],
      imgAPI.logos[12],
      imgAPI.logos[20],
    ]
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100,000',
    timeleft: 1000000,
    title: 'Lorem Ipsum Dolor 6',
    bid: 20,
    like: 100,
    price: 0.5,
    href: link.productDetail,
    avatars: [
      imgAPI.avatar[10],
      imgAPI.logos[11],
      imgAPI.avatar[3],
      imgAPI.avatar[4],
    ]
  }
];

function Auction() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const [slideCount, setSlideCount] = useState(0);

  const { classes, cx } = useStyles();
  const [fade, setFade] = useState(false);
  const [zindex, setZindex] = useState(0);

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
      <ParallaxTitle
        bgTitle={t('nft.header_explore')}
        mainTitle={t('nft.auction_title')}
        color="doubleMain"
      />
      <Container className={classes.wrap}>
        <div className={classes.background}>
          <div className={classes.floatingArtwork}>
            <SliderArt fade={fade}>
              <div>
                <Typography variant="h2">
                  <span />
                  LIVE
                </Typography>
                <Typography sx={{ mb: 3 }} component="p">
                  {t('nft.auction_desc')}
                </Typography>
                <Button className={classes.btn} variant="outlined" color="invert" size="large">
                  {t('btn_seeall')}
                </Button>
              </div>
            </SliderArt>
          </div>
        </div>
      </Container>
      <div style={{ zIndex: zindex }} className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
            {nftList.map((item, index) => (
              <div
                key={index.toString()}
                className={classes.item}
                onMouseEnter={() => setZindex(11)}
                onMouseLeave={() => setZindex(0)}
              >
                <ProductCount
                  img={item.img}
                  title={item.title}
                  desc={item.circulation}
                  like={item.like}
                  price={item.price}
                  href={item.href}
                  avatars={item.avatars}
                  bid={item.bid}
                  timeleft={item.timeleft}
                />
              </div>
            ))}
            <div className={cx(classes.props, classes.itemPropsFirst)}>
              <div />
            </div>
          </Carousel>
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
    </div>
  );
}

export default Auction;
