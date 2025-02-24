import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import brand from 'public/text/brand';
import menu from '../Header/data/single';
import useStyles from './basic-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {brand.footerText}
    </Typography>
  );
}

function Basic(props) {
  const { classes, cx } = useStyles();
  const { bg } = props;
  const { t } = useTranslation('common');

  return (
    <footer className={cx(classes.footer, bg ? classes.hasBg : '')}>
      <Container className={classes.root} maxWidth="lg">
        <nav>
          <ul>
            {menu.inner.map(item => (
              <li key={item.id}>
                <Link href={'/' + item.id} variant="subtitle1" underline="hover">
                  {t('ai-landing.header_' + item.name)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.socmed}>
          <IconButton aria-label="FB" className={classes.icon} size="small">
            <i className="ion-logo-twitter" />
          </IconButton>
          <IconButton aria-label="TW" className={classes.icon} size="small">
            <i className="ion-logo-facebook" />
          </IconButton>
          <IconButton aria-label="IG" className={classes.icon} size="small">
            <i className="ion-logo-instagram" />
          </IconButton>
        </div>
        <div className={classes.copyright}>
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}

Basic.propTypes = {
  bg: PropTypes.bool
};

Basic.defaultProps = {
  bg: false
};

export default Basic;
