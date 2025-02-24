import React from 'react';
import Carousel from 'react-slick';
import IconCard from './Icon';
import useStyle from './styles/expertise-style';

const expertise = [
  {
    icon: 'mdi-target',
    // color: 'metal',
    color: 'teal',
  },
  {
    icon: 'mdi-flash',
    // color: 'light',
    color: 'lightBlue'
  },
  {
    icon: 'mdi-sign-yield',
    // color: 'chemical',
    color: 'cyan',
  },
  {
    icon: 'mdi-shield-crown',
    // color: 'gold',
    color: 'yellow',
  },
  {
    icon: 'mdi-fire',
    // color: 'fire',
    color: 'red',
  },
  {
    icon: 'mdi-microsoft-xbox-controller',
    // color: 'play',
    color: 'green',
  },
  {
    icon: 'mdi-steam',
    // color: 'metal',
    color: 'grey',
  },
  {
    icon: 'mdi-one-up',
    // color: 'light',
    color: 'orange'
  },
  {
    icon: 'mdi-sword',
    // color: 'chemical',
    color: 'pink',
  },
  {
    icon: 'mdi-snowflake',
    // color: 'gold',
    color: 'purple',
  },
];

function Expertise() {
  const { classes } = useStyle();

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 960,
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
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel {...settings}>
            {expertise.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconCard icon={item.icon} color={item.color} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
