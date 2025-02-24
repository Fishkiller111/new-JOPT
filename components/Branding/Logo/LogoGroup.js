import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import imgAPI from 'public/images/imgAPI';

const useStyles = makeStyles({ uniqId: 'logo_group' })(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      overflow: 'auto',
      flexWrap: 'nowrap',
      width: '100%'
    },
    '& figure': {
      verticalAlign: 'middle',
      borderRadius: theme.rounded.medium,
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      minWidth: 100,
      display: 'block',
      flexGrow: 0,
      [theme.breakpoints.up('lg')]: {
        height: 100,
        maxWidth: 100
      },
      '& img': {
        display: 'block',
        width: '100%',
      }
    }
  }
}));

const logos = [
  imgAPI.logos[20],
  imgAPI.logos[62],
  imgAPI.logos[26],
  imgAPI.logos[35],
  imgAPI.logos[40],
  imgAPI.logos[30],
  imgAPI.logos[52],
];

function CompanyLogo() {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Container className={classes.root} fixed={isDesktop}>
      {logos.map((logo, index) => (
        <figure key={index.toString()}>
          <img src={logo} alt={'logo' + index.toString()} />
        </figure>
      ))}
    </Container>
  );
}

export default CompanyLogo;
