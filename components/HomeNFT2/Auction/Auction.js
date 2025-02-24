import React, { useRef } from 'react';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-slick';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import LocaleLink from '../../Link';
import CountDown from '../../Counter/CountDown';
import useStyles from './auction-style';

const nftList = [
  {
    img: imgAPI.photosL[46],
    circulation: '100000',
    timeleft: 30000000,
    title: 'Lorem Ipsum Dolor 1',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[8],
    circulation: '100000',
    timeleft: 560000000,
    title: 'Lorem Ipsum Dolor 2',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100000',
    timeleft: 250000000,
    title: 'Lorem Ipsum Dolor 3',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[50],
    circulation: '100000',
    timeleft: 110000000,
    title: 'Lorem Ipsum Dolor 4',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[5],
    circulation: '100000',
    timeleft: 500000000,
    title: 'Lorem Ipsum Dolor 5',
    price: '0.5',
    href: link.productDetail,
  },
  {
    img: imgAPI.photosL[7],
    circulation: '100,000',
    timeleft: 1000000,
    title: 'Lorem Ipsum Dolor 6',
    price: '0.5',
    href: link.productDetail,
  }
];

function Bid() {
  const slider = useRef(null);
  const { classes, cx } = useStyles();

  const slickOptionsFade = {
    dots: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'ease-out',
  };

  return (
    <div className={classes.root}>
      <Carousel ref={slider} {...slickOptionsFade}>
        {nftList.map((item, index) => (
          <div key={index.toString()} className={classes.slide}>
            <div className={classes.inner}>
              <figure>
                <img src={item.img} alt="nft" />
              </figure>
              <Typography component="h3" className={classes.title}>
                {item.title}
              </Typography>
              <div className={classes.countdown}>
                <CountDown info="Sale starts in" miliseconds={item.timeleft} />
              </div>
              <div className={classes.property}>
                <Typography component="p">
                  Circulation:
                  {' '}
                  {item.circulation}
                </Typography>
                <Typography component="strong">
                  Price
                  {' '}
                  <span className={classes.price}>
                    {item.price}
                    ETH
                  </span>
                </Typography>
              </div>
            </div>
            <ButtonBase component={LocaleLink} to={item.href} />
          </div>
        ))}
      </Carousel>
      <IconButton
        className={cx(classes.nav, classes.prev)}
        onClick={() => slider.current.slickPrev()}
        size="large"
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        className={cx(classes.nav, classes.next)}
        onClick={() => slider.current.slickNext()}
        size="large"
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

export default Bid;
