import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import logo from 'public/images/logo-verselion.png';
import brand from 'public/text/brand';
import { useTextAlign } from 'theme/common';
import SelectLang from '../Utils/LangSwitch/Select';
import useStyles from './sitemap-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block">
      &copy;&nbsp;
      {brand.footerText}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
    link: ['#team', '#history', '#contact-us', '#locations'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    link: ['#resource', '#resource-name', '#another-resource', '#final-resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    link: ['#privacy-policy', '#terms-of-use'],
  },
];

function Footer(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation Function
  const { toggleDir } = props;
  const { t } = useTranslation('common');

  const { classes } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <footer className={classes.footer}>
      <Container className={classes.root} fixed={isMobile}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('ai-landing.banner_desc')}
            </Typography>
            {isDesktop && <Copyright />}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-evenly">
              {footers.map(footer => (
                <Grid item xs={12} md={3} key={footer.title} className={classes.siteMapItem}>
                  {isDesktop && (
                    <div>
                      <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                        {footer.title}
                      </Typography>
                      <ul>
                        {footer.description.map((item, index) => (
                          <li key={item}>
                            <Link
                              href={footer.link[index]}
                              variant="subtitle1"
                              color="textSecondary"
                              underline="hover"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isMobile && (
                    <Accordion
                      square
                      classes={{
                        root: classes.accordionRoot,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        classes={{
                          content: classes.accordionContent,
                        }}
                      >
                        <strong>
                          {footer.title}
                        </strong>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {footer.description.map((item, index) => (
                            <li key={item}>
                              <Link
                                href={footer.link[index]}
                                variant="subtitle1"
                                color="textSecondary"
                                underline="hover"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <SelectLang toggleDir={toggleDir} />
          </Grid>
        </Grid>
        {isMobile && (
          <div className={align.textCenter}>
            <Box p={{ md: 4 }}>
              <Copyright />
            </Box>
          </div>
        )}
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
