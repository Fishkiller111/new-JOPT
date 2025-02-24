import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SortIcon from '@mui/icons-material/Sort';
import TimelineIcon from '@mui/icons-material/Timeline';
import Icon from '@mui/material/Icon';
import { useTranslation } from 'next-i18next';
import {
  ComposedChart, Area, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { useText } from 'theme/common';
import useStyles from './product-style';

function createListing(price, usd, qty, exp, from) {
  return {
 price, usd, qty, exp, from
};
}

function createActivity(event, price, qty, from, to, date) {
  return {
 event, price, qty, from, to, date
};
}

const rowsListing = [
  createListing(0.27, 315.26, 2, 'about 11 hours', '234569'),
  createListing(0.27, 315.26, 1, 'about 11 hours', '234569'),
  createListing(0.27, 315.26, 4, 'about 10 hours', 'John'),
  createListing(0.27, 315.26, 5, '2 days', 'Doe'),
  createListing(0.27, 315.26, 5, '2 days', '234569'),
];

const rowsOffers = [
  createListing(0.27, 315.26, 2, 'about 11 hours', '234569'),
  createListing(0.27, 315.26, 1, 'about 11 hours', '234569'),
  createListing(0.27, 315.26, 4, 'about 10 hours', 'John'),
  createListing(0.27, 315.26, 5, '2 days', 'Doe'),
  createListing(0.27, 315.26, 5, '2 days', '234569'),
];

const rowsActivity = [
  createActivity('Transfer', 0.223, 1, 'Jonhn Deo', 'Jin Deo', '2 May 2023'),
  createActivity('Sale', 0.223, 1, 'Jonhn Deo', 'Jin Deo', '2 May 2023'),
  createActivity('Transfer', 0.223, 1, 'Jonhn Deo', 'Jin Deo', '2 May 2023'),
  createActivity('Sale', 0.223, 1, 'Jonhn Deo', 'Jin Deo', '2 May 2023'),
  createActivity('Transfer', 0.223, 1, 'Jonhn Deo', 'Jin Deo', '2 May 2023'),
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label">{`${label} : ${payload[0].value} ETH`}</p>
      </div>
    );
  }
  return false;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: null,
  label: '',
};

const chartData = [{ name: 'Feb 23', price: 13 }, { name: 'Mar 23', price: 11 }, { name: 'Apr 23', price: 5 }, { name: 'May 23', price: 16 }, { name: 'Jun 23', price: 11 }, { name: 'Jul 23', price: 10 }, { name: 'Aug 23', price: 11 }, { name: 'Sep 23', price: 13 }, { name: 'Oct 23', price: 10 }, { name: 'Nov 23', price: 4 }, { name: 'Dec 23', price: 6 }, { name: 'Jan 24', price: 11 }, { name: 'Feb 24', price: 13 }]; // eslint-disable-line

function Description() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  const [loaded, setLoaded] = useState(false);
  const [expand, setExpand] = useState(['chart', 'listing']);
  const toggleExpand = cat => {
    const index = expand.indexOf(cat);
    if (index > -1) {
      setExpand(expanded => expanded.filter((_, id) => id !== index));
    } else {
      setExpand(oldArray => [...oldArray, cat]);
    }
  };

  const setChartColor = type => {
    if (type === 'up') {
      return 'url(#colorUp)';
    }
    if (type === 'down') {
      return 'url(#colorDown)';
    }
    return '#b9b9b9';
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box py={{ xs: 0, sm: 3 }}>
      <Grid container spacing={isDesktop ? 6 : 2} justifyContent="center">
        <Grid item lg={4} md={5} sm={10} xs={12}>
          <Box mb={3}>
            <h4 className={text.subtitle}>
              {t('list_desc')}
            </h4>
          </Box>
          <Typography component="p" sx={{ mb: 2 }}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography component="p">
            Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero. Proin varius, tortor faucibus tempor pharetra, nunc mi consectetur enim, nec posuere ante magna vitae quam.
          </Typography>
          <div className={classes.properties}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6">ARTIST</Typography>
                <Typography>Lipsum</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Artist URL</Typography>
                <Typography><a href="#">https://bungalion.io/collection/…</a></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">ERC20</Typography>
                <Typography>0x12345678910111</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">symbol</Typography>
                <Typography>CRO10</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.details}>
            <Box mb={3}>
              <h4 className={text.subtitle}>
                {t('faq_topic')}
              </h4>
            </Box>
            <ul>
              <li>
                <span>Contract Address</span>
                <strong><a href="#">0x1234..789a</a></strong>
              </li>
              <li>
                <span>Token ID</span>
                <strong><a href="#">230</a></strong>
              </li>
              <li>
                <span>Token Standard</span>
                <strong>ABC-2018</strong>
              </li>
              <li>
                <span>Last Updated</span>
                <strong>2 days ago</strong>
              </li>
              <li>
                <span>Creator Fee</span>
                <strong>1.5%</strong>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item md={7} sm={10} xs={12}>
          <Accordion
            expanded={expand.indexOf('chart') > -1}
            onChange={() => toggleExpand('chart')}
            className={classes.accordion}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={text.subtitle}>
                <TimelineIcon className={classes.icon} />
                Price History
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.chart}>
                <p className={classes.yLabel}>Volume (ETH)</p>
                {loaded && (
                  <ResponsiveContainer>
                    <ComposedChart
                      width={500}
                      height={200}
                      data={chartData}
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
                      <CartesianGrid strokeOpacity={0.3} vertical={false} />
                      <XAxis tickSize={0} axisLine={false} dataKey="name" />
                      <YAxis tickSize={0} axisLine={false} dataKey="price" />
                      <Tooltip content={<CustomTooltip />} />
                      <Area dataKey="price" fill={setChartColor('up')} />
                      <Line dataKey="price" dot={false} strokeWidth="3" stroke={setChartColor('up')} />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand.indexOf('listing') > -1}
            onChange={() => toggleExpand('listing')}
            className={classes.accordion}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={text.subtitle}>
                <FormatListBulletedIcon className={classes.icon} />
                Listing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit Price</TableCell>
                      <TableCell align="right">USD Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell>Expiration</TableCell>
                      <TableCell>From</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsListing.map((row, index) => (
                      <TableRow
                        key={index.toString()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <strong>{row.price}</strong>
                        </TableCell>
                        <TableCell align="right"><strong>{row.usd}</strong></TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell>{row.exp}</TableCell>
                        <TableCell><a href="#">{row.from}</a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand.indexOf('offers') > -1}
            onChange={() => toggleExpand('offers')}
            className={classes.accordion}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={text.subtitle}>
                <LocalOfferIcon className={classes.icon} />
                Offers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Unit Price</TableCell>
                      <TableCell align="right">USD Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell>Expiration</TableCell>
                      <TableCell>From</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsOffers.map((row, index) => (
                      <TableRow
                        key={index.toString()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <strong>{row.price}</strong>
                        </TableCell>
                        <TableCell align="right"><strong>{row.usd}</strong></TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell>{row.exp}</TableCell>
                        <TableCell><a href="#">{row.from}</a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expand.indexOf('activity') > -1}
            onChange={() => toggleExpand('activity')}
            className={classes.accordion}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={text.subtitle}>
                <SortIcon className={classes.icon} />
                Activity
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Event</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsActivity.map((row, index) => (
                      <TableRow
                        key={index.toString()}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.event === 'Transfer' && <Icon className={classes.iconTb}>shopping_cart</Icon>}
                          {row.event === 'Sale' && <Icon className={classes.iconTb}>upload</Icon>}
                          <strong>{row.event}</strong>
                        </TableCell>
                        <TableCell align="right"><strong>{row.price}</strong></TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell><a href="#">{row.from}</a></TableCell>
                        <TableCell><a href="#">{row.to}</a></TableCell>
                        <TableCell><a href="#">{row.date}</a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Description;
