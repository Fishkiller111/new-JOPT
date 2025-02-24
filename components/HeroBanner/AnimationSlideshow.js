import React, { useEffect } from 'react';
import Carousel from 'react-slick';
import imgAPI from 'public/images/imgAPI';
import useStyles from './hero-style';

function AnimationSlideshow() {
  const { classes } = useStyles();
  const images = [imgAPI.unisex[1], imgAPI.unisex[2], imgAPI.unisex[3], imgAPI.unisex[4], imgAPI.unisex[5]];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    fade: true
  };

  useEffect(() => {
    window.particlesJS('particles_background', {
      particles: {
        number: {
          value: 6,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#b39ddb'
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 0,
            color: '#b39ddb'
          },
          polygon: {
            nb_sides: 6
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 160,
          random: false,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: '#ffffff',
          opacity: 1,
          width: 2
        },
        move: {
          enable: true,
          speed: 8,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab'
          },
          onclick: {
            enable: false,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div className={classes.animationSlider}>
      <div className={classes.slideshow}>
        <Carousel {...settings}>
          {images.map((item, index) => (
            <div key={index.toString()} className={classes.slideItem}>
              <div className={classes.img} style={{ backgroundImage: `url(${item})` }} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={classes.particleBackground} id="particles_background" />
    </div>
  );
}

export default AnimationSlideshow;
