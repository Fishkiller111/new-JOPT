import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import link from 'public/text/link';
import ArrowButton from '../../Forms/ArrowButton/Standard';
import Title from '../../Title';
import useStyles from './career-style';

const jobs = [
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  },
  {
    name: 'Head of Product',
    category: 'Marketing',
    location: 'Yokohama',
    type: 'Full Time',
    qualification: 'Fresh Graduate',
    posted: '22 Dec 2023',
  }
];

function JobList() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();

  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [expanded, setExpanded] = React.useState(0);
  const handleChangeExpand = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation('common');

  return (
    <div className={classes.job}>
      <Container>
        <div className={classes.tab}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={8} md={10} sm={12} xs={12}>
              <Title
                text={t('career_joblist')}
                align="center"
              />
              <Tabs
                centered={!isTablet}
                variant={isTablet ? 'scrollable' : 'fullWidth'}
                scrollButtons={isTablet}
                value={value}
                onChange={handleChange}
                classes={{
                  indicator: classes.indicator
                }}
              >
                <Tab classes={{ root: classes.tabLabel }} label="All" />
                <Tab classes={{ root: classes.tabLabel }} label="Engineering" />
                <Tab classes={{ root: classes.tabLabel }} label="Marketing" />
                <Tab classes={{ root: classes.tabLabel }} label="Designs" />
                <Tab classes={{ root: classes.tabLabel }} label="Research" />
              </Tabs>
              <div className={classes.tabContent}>
                {value === 0 && (
                  <div>
                    {jobs.map((item, index) => (
                      <div className={classes.item} key={index.toString()}>
                        <Accordion
                          classes={{
                            root: classes.paper
                          }}
                          expanded={expanded === index}
                          onChange={handleChangeExpand(index)}
                        >
                          <AccordionSummary
                            role="tablist"
                            classes={{
                              content: classes.content,
                              expanded: classes.expanded,
                            }}
                          >
                            <ExpandMoreIcon className={classes.icon} />
                            <div className={classes.heading}>
                              <Chip size="small" label={item.category} color="primary" />
                              <Typography component="h6" className={text.subtitle}>{item.name}</Typography>
                            </div>
                            {expanded !== index ? (
                              <Box sx={{ display: 'flex', pr: 4, ml: { sm: 0, xs: 6 } }}>
                                <Typography sx={{ mr: 3 }}>{item.location}</Typography>
                                <Typography>{item.type}</Typography>
                              </Box>
                            ) : (
                              <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                m: 2
                              }}
                              >
                                {!isMobile && (
                                  <h3 className={cx(text.paragraph, text.medium)}>Share</h3>
                                )}
                                <div className={classes.socmed}>
                                  <IconButton href="#" className={classes.iconBtn}><i className="ion-md-link" /></IconButton>
                                  <IconButton href="#" className={classes.iconBtn}><i className="ion-logo-linkedin" /></IconButton>
                                  <IconButton href="#" className={classes.iconBtn}><i className="ion-logo-twitter" /></IconButton>
                                  <IconButton href="#" className={classes.iconBtn}><i className="ion-ios-mail" /></IconButton>
                                </div>
                              </Box>
                            )}
                          </AccordionSummary>
                          <AccordionDetails
                            classes={{
                              root: classes.detail,
                            }}
                          >
                            <Grid container justifyContent="center" spacing={isMobile ? 2 : 6}>
                              <Grid item md={7}>
                                <Typography component="p">Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Suspendisse eleifend nunc non varius rhoncus. Nam posuere accumsan porta. </Typography>
                                <Typography className={text.medium}>Job Description</Typography>
                                <ul>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                </ul>
                                <Typography className={text.medium}>Requirements</Typography>
                                <ul>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                  <li>Type Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. </li>
                                </ul>
                              </Grid>
                              <Grid item md={5}>
                                <aside className={classes.sidebar}>
                                  <Button color="secondaryLight" variant="contained" fullWidth size="large">APPLY NOW</Button>
                                  <ul className={classes.property}>
                                    <li>
                                      <span>Location</span>
                                      <strong>{item.location}</strong>
                                    </li>
                                    <li>
                                      <span>Type</span>
                                      <strong>{item.type}</strong>
                                    </li>
                                    <li>
                                      <span>Qualification</span>
                                      <strong>{item.qualification}</strong>
                                    </li>
                                    <li>
                                      <span>Posted</span>
                                      <strong>{item.posted}</strong>
                                    </li>
                                  </ul>
                                  <ArrowButton href={link.contact} color="primary" text={t('faq_help1')} />
                                  <ArrowButton href={link.blog} color="secondary" text={t('faq_help3')} />
                                </aside>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default JobList;
