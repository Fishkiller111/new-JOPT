import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import ParallaxLeft from '../Parallax/ParallaxLeft';
import Title from '../../Title';
import useStyles from './table-rank-style';

const rankData = [
  {
    avatar: imgAPI.avatar[20],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[21],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosP[18],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[31],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.photosL[42],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[6],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[11],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
  {
    avatar: imgAPI.avatar[29],
    name: 'John Doe',
    verified: true,
    sales: 100,
    items: 10,
    volume: 1040,
    change: 40
  },
];

function ChartPrice() {
  // Translation Function
  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const limit = useMediaQuery(theme => theme.breakpoints.down('sm')) ? 10 : 5;

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <ParallaxLeft />
      <Container>
        <Title dark align="center" text={t('nft2.creators_title')} />
        <Grid container spacing={isDesktop ? 4 : 2}>
          <Grid item sm={6} xs={12}>
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan="2">Creator</TableCell>
                    <TableCell>Sales</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Volume</TableCell>
                    <TableCell>Change</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rankData.slice(0, limit).map((item, index) => (
                    <TableRow key={index.toString()}>
                      <TableCell align="right" sx={{ fontStyle: 'italic' }}>
                        <span className={index <= 0 ? classes.one : ''}>
                          #
                          {index + 1}
                        </span>
                      </TableCell>
                      <TableCell sx={{ paddingRight: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar className={classes.avatar} src={item.avatar} alt="avatar" />
                          <strong>{item.name}</strong>
                          {item.verified && <VerifiedIcon className={classes.verified} />}
                        </Box>
                      </TableCell>
                      <TableCell align="right">{item.sales}</TableCell>
                      <TableCell align="right">{item.items}</TableCell>
                      <TableCell align="right">{item.volume}</TableCell>
                      <TableCell align="right">
                        <Typography component="strong" color="#42DE24">
                          +
                          {item.change}
                          %
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {isTablet && (
            <Divider className={classes.divider} orientation="vertical" flexItem />
          )}
          {isTablet && (
            <Grid item sm={6} xs={12}>
              <TableContainer>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Creator</TableCell>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell>Sales</TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Volume</TableCell>
                      <TableCell>Change</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rankData.slice(5, 10).map((item, index) => (
                      <TableRow key={index.toString()}>
                        <TableCell align="right" sx={{ fontStyle: 'italic' }}>
                          #
                          {index + 6}
                        </TableCell>
                        <TableCell sx={{ paddingRight: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar className={classes.avatar} src={item.avatar} alt="avatar" />
                            <strong>{item.name}</strong>
                            {item.verified && <VerifiedIcon className={classes.verified} />}
                          </Box>
                        </TableCell>
                        <TableCell align="right">{item.sales}</TableCell>
                        <TableCell align="right">{item.items}</TableCell>
                        <TableCell align="right">{item.volume}</TableCell>
                        <TableCell align="right">
                          <Typography color="#42DE24">
                            +
                            {item.change}
                            %
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default ChartPrice;
