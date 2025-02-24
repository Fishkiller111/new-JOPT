import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import {
  ComposedChart,
  Area,
  Line,
  ResponsiveContainer
} from 'recharts';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import LocaleLink from '../../Link';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import Title from '../../Title';
import useStyles from './chart-price-style';

const coinData = [
  {
    name: 'BTC',
    logo: imgAPI.logos[48],
    status: 'up',
    price: 1234,
    percent: 3,
    dataCollection: [{ name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 4 }, { name: 'd5', uv: 6 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 13 }, { name: 'd1', uv: 5 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 4 }, { name: 'd4', uv: 14 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 20 }, { name: 'd7', uv: 22 }, { name: 'd1', uv: 15 }, { name: 'd2', uv: 20 }, { name: 'd3', uv: 14 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 10 }, { name: 'd7', uv: 6 }]
  },
  {
    name: 'DASH',
    logo: imgAPI.logos[52],
    status: 'up',
    price: 1234,
    percent: 2,
    dataCollection: [{ name: 'd1', uv: 5 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 4 }, { name: 'd4', uv: 14 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 20 }, { name: 'd7', uv: 22 }, { name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }, { name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 11 }, { name: 'd4', uv: 5 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 10 }]
  },
  {
    name: 'NAN',
    logo: imgAPI.logos[56],
    status: 'down',
    price: 1234,
    percent: 10,
    dataCollection: [{ name: 'd1', uv: 15 }, { name: 'd2', uv: 20 }, { name: 'd3', uv: 14 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 10 }, { name: 'd7', uv: 6 }, { name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 11 }, { name: 'd4', uv: 5 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 10 }, { name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 4 }, { name: 'd5', uv: 6 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 13 }]
  },
  {
    name: 'MNR',
    logo: imgAPI.logos[55],
    status: 'up',
    price: 1234,
    percent: 6,
    dataCollection: [{ name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }, { name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 4 }, { name: 'd5', uv: 6 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 13 }, { name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }]
  },
  {
    name: 'IOT',
    logo: imgAPI.logos[53],
    status: 'down',
    price: 1234,
    percent: 3,
    dataCollection: [{ name: 'd1', uv: 11 }, { name: 'd2', uv: 13 }, { name: 'd3', uv: 11 }, { name: 'd4', uv: 5 }, { name: 'd5', uv: 16 }, { name: 'd6', uv: 11 }, { name: 'd7', uv: 10 }, { name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }, { name: 'd1', uv: 3 }, { name: 'd2', uv: 6 }, { name: 'd3', uv: 10 }, { name: 'd4', uv: 12 }, { name: 'd5', uv: 10 }, { name: 'd6', uv: 8 }, { name: 'd7', uv: 12 }]
  }
];

function ChartPrice() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  // Translation Function
  const { t } = useTranslation('common');

  const { classes } = useStyles();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const setChartColor = type => {
    if (type === 'up') {
      return 'url(#colorUp)';
    }
    if (type === 'down') {
      return 'url(#colorDown)';
    }
    return '#b9b9b9';
  };

  return (
    <Fragment>
      <ParallaxLeft />
      <div className={classes.root}>
        <Container>
          <Grid container justifyContent={isDesktop ? 'flex-start' : 'center'} spacing={isDesktop ? 6 : 0}>
            <Grid item md={5} xs={12}>
              <Title text={t('wallet.chart_title')} />
              <p className={text.subtitle2}>
                {t('wallet.chart_desc')}
              </p>
              <Box py={2}>
                <Button
                  component={LocaleLink}
                  className={classes.btn}
                  to={link.register}
                  size={isDesktop ? 'large' : 'small'}
                  color="primary"
                  variant="contained"
                >
                  {t('btn_get')}
                </Button>
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <ul className={classes.chartWrap}>
                {coinData.map((item, index) => (
                  <li key={index.toString()}>
                    <div className={classes.coin}>
                      <Avatar src={item.logo} alt="item.name" className={classes.logo} />
                      <h5>
                        {item.name}
                      </h5>
                    </div>
                    <div className={classes.price}>
                      <h6>
                        $&nbsp;
                        {item.price}
                      </h6>
                      {item.status === 'down' && (
                        <div className={classes.down}>
                          <i>▼</i>
                          {item.percent}
                          %
                        </div>
                      )}
                      {item.status === 'up' && (
                        <div className={classes.up}>
                          <i>▲</i>
                          {item.percent}
                          %
                        </div>
                      )}
                      {item.status === 'stay' && (
                        <div className={classes.stay}>
                          <i>-</i>
                          {item.percent}
                          %
                        </div>
                      )}
                    </div>
                    <div className={classes.progress}>
                      {loaded && (
                        <ResponsiveContainer>
                          <ComposedChart
                            width={100}
                            height={70}
                            data={item.dataCollection}
                            margin={{
                              top: 5,
                              right: 0,
                              left: 0,
                              bottom: 5,
                            }}
                          >
                            <defs>
                              <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#5dd662" stopOpacity={1} />
                                <stop offset="95%" stopColor="#5dd662" stopOpacity={0.2} />
                              </linearGradient>
                              <linearGradient id="colorDown" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ff7272" stopOpacity={1} />
                                <stop offset="95%" stopColor="#ff7272" stopOpacity={0.2} />
                              </linearGradient>
                            </defs>
                            <Area dataKey="uv" fill={setChartColor(item.status)} />
                            <Line dataKey="uv" dot={false} strokeWidth="3" stroke={setChartColor(item.status)} />
                          </ComposedChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Box px={2}>
                <Button component={LocaleLink} className={classes.btn} to={link.register} size="large" color="secondary">
                  {t('btn_get')}
                  <ArrowForwardIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}

export default ChartPrice;
