import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import link from 'public/text/link';
import { useText, useBackground } from 'theme/common';
import ArrowButton from '../../Forms/ArrowButton/Large';
import useStyles from './sidebar-style';

const apps = [
  imgAPI.logos[31],
  imgAPI.logos[37],
  imgAPI.logos[34],
  imgAPI.logos[36],
  imgAPI.logos[35],
];

function Sidebar() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: bg } = useBackground();

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const { t } = useTranslation('common');

  return (
    <aside className={classes.sidebar}>
      {isTablet && (
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="primaryLight"
          className={classes.actionBtn}
        >
          {t('footer_quick_links')}
        </Button>
      )}
      <ul className={classes.property}>
        <li>
          <i className="ion-md-calendar" />
          Published on June 12, 2023
        </li>
        <li>
          <i className="ion-md-eye" />
          204 Views
        </li>
        <li>
          <i className="ion-md-text" />
          10 Comments
        </li>
        <li>
          <i className="ion-md-contacts" />
          8 Engineers
        </li>
      </ul>
      <Typography component="h4" sx={{ mb: 3 }} className={cx(text.subtitle2, text.medium, text.uppercase)}>{t('portfolio_tools')}</Typography>
      <div className={classes.apps}>
        {apps.map((item, index) => (
          <figure key={index.toString()}>
            <img src={item} alt="apps" />
          </figure>
        ))}
      </div>
      <Typography component="h4" sx={{ mb: 3 }} className={cx(text.subtitle2, text.medium, text.uppercase)}>Tags</Typography>
      <div className={classes.tags}>
        <Chip label="Designs" className={bg.primaryLight} />
        <Chip label="Architect" className={bg.secondaryLight} />
        <Chip label="Photography" className={bg.accent2Light} />
        <Chip label="Programming" className={bg.accentLight} />
      </div>
      <ArrowButton href={link.contact} text={t('register_subtitle')} />
    </aside>
  );
}

export default Sidebar;
