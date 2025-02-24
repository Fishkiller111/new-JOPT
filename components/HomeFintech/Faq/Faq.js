import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import { useTextAlign } from 'theme/common';
import link from 'public/text/link';
import imgAPI from 'public/images/imgAPI';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import Title from '../../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'In mi nulla, fringilla vestibulum?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque lacinia purus ut libero?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Quisque ut metus sit amet augue?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Pellentesque ac bibendum tortor?',
    a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
];

function Faq() {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <div className={classes.bg}>
          <div className={classes.decoMask}>
            <svg className={classes.main}>
              <use xlinkHref="/images/decoration/liquid-mask.svg#main" />
            </svg>
            <svg className={classes.darken}>
              <use xlinkHref="/images/decoration/liquid-mask.svg#main" />
            </svg>
          </div>
          <div className={classes.decoLine}>
            <svg>
              <use xlinkHref="/images/decoration/liquid-line.svg#main" />
            </svg>
          </div>
          {theme.palette.mode === 'dark' ? (
            <img src={imgAPI.fintech[0]} alt="background" />
          ) : (
            <img src={imgAPI.fintech[1]} alt="background" />
          )}
        </div>
        <Grid container spacing={isTablet ? 2 : 8}>
          <Grid item md={5} sm={12}>
            <Title text={t('fintech.faq_subtitle')} align={isMobile ? 'center' : 'left'} />
            {!isTablet && (
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <div className={cx(classes.wrap, align.textCenter)}>
                  <div className={classes.photo}>
                    <img src={imgAPI.avatar[16]} alt="illustration" />
                  </div>
                  <div className={classes.btn}>
                    <ArrowButton href={link.faq} text={t('faq_luck')} color="secondary" />
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </Grid>
          <Grid item md={7} sm={12}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
