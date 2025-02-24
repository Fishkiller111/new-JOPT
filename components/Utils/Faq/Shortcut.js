import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from 'public/text/link';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import Icons3d from '../../Icons3d';
import useStyles from './faq-style';

function Shortcut() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Container className={classes.shortcut}>
      <Grid container className={classes.scrollTablet} spacing={isDesktop ? 4 : 0}>
        <Grid item sm={4} xs={10}>
          <div className={cx(classes.shortcutBtn, classes.primary)}>
            <ButtonBase component={LocaleLink} to={link.blog}>
              <div className={classes.icon3d}>
                <Icons3d icon="mdi-newspaper-variant" color="primaryDouble" />
              </div>
              <Typography component="strong" className={isDesktop ? text.subtitle : text.subtitle2}>
                {t('faq_help3')}
              </Typography>
              <Typography className={text.paragraph}>
                {t('list_title')}
              </Typography>
            </ButtonBase>
          </div>
        </Grid>
        <Grid item sm={4} xs={10}>
          <div className={cx(classes.shortcutBtn, classes.secondary)}>
            <ButtonBase component={LocaleLink} to={link.faq}>
              <div className={classes.icon3d}>
                <Icons3d icon="mdi-code-greater-than-or-equal" color="secondaryDouble" />
              </div>
              <Typography component="strong" className={isDesktop ? text.subtitle : text.subtitle2}>
                {t('faq_help1')}
              </Typography>
              <Typography>
                {t('faq_title')}
              </Typography>
            </ButtonBase>
          </div>
        </Grid>
        <Grid item sm={4} xs={10}>
          <div className={cx(classes.shortcutBtn, classes.accent)}>
            <ButtonBase component={LocaleLink} to={link.contact}>
              <div className={classes.icon3d}>
                <Icons3d icon="mdi-card-account-details" color="accentDouble" />
              </div>
              <Typography component="strong" className={isDesktop ? text.subtitle : text.subtitle2}>
                {t('btn_contact')}
              </Typography>
              <Typography>
                {t('faq_luck')}
              </Typography>
            </ButtonBase>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shortcut;
