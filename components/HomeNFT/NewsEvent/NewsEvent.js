import React from 'react';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import Title from '../../Title';
import NewsCard from '../../Cards/Post/NewsCard';
import useStyles from './news-event-style';

const newsContent = [
  {
    text: 'Sed imperdiet enim ligula.',
    img: imgAPI.photosL[1],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[2],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[3],
    type: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[4],
    type: 'caption_news',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[5],
    type: 'caption_event',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    img: imgAPI.photosL[6],
    type: 'caption_news',
  },
];

function NewsEvent() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  return (
    <div className={classes.root}>
      <Title align="center" text={t('nft.news_title')} />
      <p className={cx(text.subtitle2, align.textCenter)}>
        {t('ai-landing.news_desc')}
      </p>
      <div className={classes.carousel}>
        <Carousel {...settings}>
          {newsContent.map((item, index) => (
            <div key={index.toString()}>
              <div className={classes.item}>
                <NewsCard
                  img={item.img}
                  title={item.text}
                  headline="headline"
                  orientation="portrait"
                  type="over"
                  href={link.blogDetail}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

NewsEvent.propTypes = {

};

export default NewsEvent;
