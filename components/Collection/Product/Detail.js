import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import VerifiedIcon from '@mui/icons-material/Verified';
import Lightbox from 'react-18-image-lightbox';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import CountDown from '../../Counter/CountDown';
import useStyles from './product-style';

function Detail() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [loaded, setLoaded] = useState(false);
  // Media QUery
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { t } = useTranslation('common');

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    autoplay: false
  };

  // Image Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const imgs = [
    imgAPI.photosP[7],
    imgAPI.photosS[6],
    imgAPI.photosS[7],
    imgAPI.photosS[8],
    imgAPI.photosP[22],
    imgAPI.photosP[23]
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + imgs.length - 1) % imgs.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + imgs.length + 1) % imgs.length);
  }

  return (
    <div className={classes.productDetail}>
      {open && (
        <Lightbox
          mainSrc={imgs[photoIndex]}
          nextSrc={imgs[(photoIndex + 1) % imgs.length]}
          prevSrc={imgs[(photoIndex + 1) % imgs.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Grid container spacing={isDesktop ? 4 : 2} justifyContent="center">
        <Grid item lg={4} md={5} sm={5} xs={12}>
          <div className={classes.carouselWrap}>
            {loaded && (
              <div className={classes.carousel}>
                <Carousel {...settings}>
                  {imgs.map((e, index) => (
                    <div
                      key={index.toString()}
                      className={classes.item}
                    >
                      <ButtonBase href="#!" onClick={() => showPopup(index)} draggable="false">
                        <div className={classes.figure}>
                          <div style={{ backgroundImage: `url(${imgs[index]})` }} alt="thumb" className={classes.imgDetail} />
                          <Icon className={classes.zoomIcon}>zoom_in</Icon>
                        </div>
                      </ButtonBase>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </Grid>
        <Grid item md={7} sm={7} xs={12}>
          <div className={classes.text}>
            <div className={classes.options}>
              <IconButton size="small"><ShareIcon /></IconButton>
              <IconButton size="small"><MoreHorizIcon /></IconButton>
            </div>
            <h4 className={text.title2}>
              <span className={cx(text.textSecondary, text.subtitle)}>
                John Doe
                {' '}
                <VerifiedIcon size="small" color="secondary" />
              </span>
              The Lorem Ipsum Dolor
            </h4>
            <div className={classes.property}>
              <i className="ion-md-star" />
              {' '}
              4.5 &nbsp;
              <i className="ion-md-contacts" />
              {' '}
              1.0K
              {isDesktop && 'Owners' }
              {' '}
&nbsp;
              <i className="ion-ios-apps" />
              {' '}
              17
              {isDesktop && 'Items' }
              {' '}
&nbsp;
              <i className="ion-md-eye" />
              {' '}
              168K
              {isDesktop && 'Views' }
              {' '}
&nbsp;
              <i className="ion-md-heart" />
              {' '}
              1.4K
              {isDesktop && 'Favorites' }
            </div>
            <div className={classes.counterWrap}>
              <CountDown miliseconds={30000000} mini info={`${t('list_sale_ends')} Nov 24, 2022 at 3:50 AM GMT+7`} />
            </div>
            <section className={classes.btnArea}>
              <div className={classes.price}>
                <p>{t('list_current_price')}</p>
                <h3 className={text.textPrimary}>
                  0.27 ETH
                  <span>$315.26</span>
                </h3>
              </div>
              <Button variant="contained" size="large" color={theme.palette.mode === 'dark' ? 'secondaryLight' : 'black'}>
                {t('list_cart')}
              </Button>
              <Button variant="outlined" size="large" color={theme.palette.mode === 'dark' ? 'white' : 'black'}>
                {t('list_whislist')}
              </Button>
            </section>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Detail;
