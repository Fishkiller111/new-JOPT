import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';

const useStyles = makeStyles({ uniqId: 'palette' })((theme) => ({
  buy: {
    position: 'fixed',
    zIndex: 900,
    bottom: 40,
    left: 40,
    background: theme.palette.common.white,
    color: '#82b440',
    boxShadow: '0 0 10px 2px #82b440',
    border: '1px solid #82b440',
    padding: theme.spacing(1, 2),
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 0 20px 0px #82b440',
    },
    '& img': {
      marginRight: theme.spacing(),
      width: 24,
      height: 24,
    }
  }
}));

function ActionBtn() {
  const { classes } = useStyles();
  return (
    <Button variant="contained" target="_blank" className={classes.buy} href={link.buy}>
      <img src={imgAPI.logos[63]} alt="marketplace logo" />
      Buy Now
    </Button>
  );
}

export default ActionBtn;
