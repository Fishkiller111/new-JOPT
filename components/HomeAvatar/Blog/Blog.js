import React, {
  useRef,
  useState,
  useEffect,
  Fragment,
} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import link from 'public/text/link';
import imgApi from 'public/images/imgAPI';
import Title from '../../Title';
import PostCard from '../../Cards/Post/PostCard';
import useStyle from './blog-style';

const blogData = [
  {
    img: imgApi.photosP[28],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosL[30],
    href: link.blogDetail,
    source: 'Twitter',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[21],
    href: link.blogDetail,
    source: 'Behance',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[29],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[14],
    href: link.blogDetail,
    source: 'Instagram',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
  {
    img: imgApi.photosP[15],
    href: link.blogDetail,
    source: 'Youtube',
    title: 'Vivamus sit amet interdum elit',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat lorem ipsum'
  },
];

function Blog() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const theme = useTheme();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [slideCount, setSlideCount] = useState(0);
  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    afterChange: current => {
      setSlideCount(current);
    },
    responsive: [{
      breakpoint: 1080,
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

  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(blogData.length - 1);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      {isTablet && (
        <Fragment>
          <Title
            text={t('avatar.blog_title')}
            align="center"
          />
          <Box component="p" sx={{ mb: 5 }} className={cx(align.textCenter, text.subtitle2)}>
            {t('avatar.blog_desc')}
          </Box>
        </Fragment>
      )}
      <div className={classes.floatingTitle}>
        <div className={classes.container}>
          <div className={classes.text}>
            <Typography className={text.title} component="h3">
              <span>#</span>
              <strong>
                {t('avatar.blog_title')}
              </strong>
            </Typography>
            <Typography gutterBottom className={text.subtitle2}>
              {t('avatar.blog_desc')}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
            disabled={slideCount <= 0}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <div className={classes.card}>
                  <PostCard
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    href={item.href}
                    source={item.source}
                  />
                </div>
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
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

export default Blog;
